// Simple in-memory rate limiter

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }
}, 60000);

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetTime: number;
}

export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  const key = identifier;

  let entry = rateLimitStore.get(key);

  if (!entry || entry.resetTime < now) {
    entry = {
      count: 1,
      resetTime: now + config.windowMs,
    };
    rateLimitStore.set(key, entry);
    return {
      success: true,
      remaining: config.maxRequests - 1,
      resetTime: entry.resetTime,
    };
  }

  entry.count++;

  if (entry.count > config.maxRequests) {
    return {
      success: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  return {
    success: true,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

export function getClientIP(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  return 'unknown';
}

export const RATE_LIMITS = {
  autocomplete: { maxRequests: 30, windowMs: 60000 },
  roofData: { maxRequests: 10, windowMs: 60000 },
  submitLead: { maxRequests: 5, windowMs: 60000 },
  geocode: { maxRequests: 20, windowMs: 60000 },
  staticMap: { maxRequests: 20, windowMs: 60000 },
};

/**
 * Calculate time until rate limit resets in seconds.
 */
export function getRetryAfterSeconds(result: RateLimitResult): number {
  if (result.success) return 0;
  return Math.max(0, Math.ceil((result.resetTime - Date.now()) / 1000));
}

/**
 * Build standard rate limit response headers.
 */
export function getRateLimitHeaders(
  result: RateLimitResult,
  config: RateLimitConfig
): Record<string, string> {
  const headers: Record<string, string> = {
    'X-RateLimit-Limit': String(config.maxRequests),
    'X-RateLimit-Remaining': String(result.remaining),
    'X-RateLimit-Reset': String(Math.ceil(result.resetTime / 1000)),
  };

  if (!result.success) {
    headers['Retry-After'] = String(getRetryAfterSeconds(result));
  }

  return headers;
}

/**
 * Check if a rate limit result indicates the client should be warned
 * (more than 80% of limit consumed).
 */
export function isApproachingLimit(result: RateLimitResult, config: RateLimitConfig): boolean {
  if (!result.success) return true;
  const usedPercent = ((config.maxRequests - result.remaining) / config.maxRequests) * 100;
  return usedPercent >= 80;
}

/**
 * Reset rate limit for a specific identifier (useful for testing).
 */
export function resetRateLimit(identifier: string): void {
  rateLimitStore.delete(identifier);
}
