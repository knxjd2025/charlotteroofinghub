import { describe, it, expect } from 'vitest'
import {
  checkRateLimit,
  getRetryAfterSeconds,
  getRateLimitHeaders,
  isApproachingLimit,
  resetRateLimit,
  RATE_LIMITS,
} from '@/lib/rate-limit'

// ── Test 1: getRetryAfterSeconds returns seconds until reset ──
describe('getRetryAfterSeconds', () => {
  it('returns 0 for successful results', () => {
    const id = `retry-success-${Date.now()}`
    const result = checkRateLimit(id, { maxRequests: 5, windowMs: 60000 })
    expect(getRetryAfterSeconds(result)).toBe(0)
  })

  it('returns positive seconds for rate-limited results', () => {
    const id = `retry-blocked-${Date.now()}`
    const config = { maxRequests: 1, windowMs: 60000 }
    checkRateLimit(id, config) // use up the limit
    const blocked = checkRateLimit(id, config) // blocked

    const retryAfter = getRetryAfterSeconds(blocked)
    expect(retryAfter).toBeGreaterThan(0)
    expect(retryAfter).toBeLessThanOrEqual(60)
  })
})

// ── Test 2: getRateLimitHeaders builds correct headers ──
describe('getRateLimitHeaders', () => {
  it('includes all standard rate limit headers for allowed requests', () => {
    const id = `headers-ok-${Date.now()}`
    const config = { maxRequests: 10, windowMs: 60000 }
    const result = checkRateLimit(id, config)
    const headers = getRateLimitHeaders(result, config)

    expect(headers['X-RateLimit-Limit']).toBe('10')
    expect(headers['X-RateLimit-Remaining']).toBe('9')
    expect(headers['X-RateLimit-Reset']).toBeTruthy()
    expect(headers['Retry-After']).toBeUndefined()
  })

  it('includes Retry-After header for blocked requests', () => {
    const id = `headers-blocked-${Date.now()}`
    const config = { maxRequests: 1, windowMs: 60000 }
    checkRateLimit(id, config)
    const blocked = checkRateLimit(id, config)
    const headers = getRateLimitHeaders(blocked, config)

    expect(headers['X-RateLimit-Remaining']).toBe('0')
    expect(headers['Retry-After']).toBeTruthy()
    expect(parseInt(headers['Retry-After'])).toBeGreaterThan(0)
  })
})

// ── Test 3: isApproachingLimit warns at 80%+ usage ──
describe('isApproachingLimit', () => {
  it('returns false when under 80% of limit', () => {
    const id = `approach-low-${Date.now()}`
    const config = { maxRequests: 10, windowMs: 60000 }
    const result = checkRateLimit(id, config) // 1/10 = 10%
    expect(isApproachingLimit(result, config)).toBe(false)
  })

  it('returns true when at or over 80% of limit', () => {
    const id = `approach-high-${Date.now()}`
    const config = { maxRequests: 5, windowMs: 60000 }

    checkRateLimit(id, config) // 1/5
    checkRateLimit(id, config) // 2/5
    checkRateLimit(id, config) // 3/5
    const r4 = checkRateLimit(id, config) // 4/5 = 80%

    expect(isApproachingLimit(r4, config)).toBe(true)
  })

  it('returns true for blocked requests', () => {
    const id = `approach-blocked-${Date.now()}`
    const config = { maxRequests: 1, windowMs: 60000 }
    checkRateLimit(id, config)
    const blocked = checkRateLimit(id, config)
    expect(isApproachingLimit(blocked, config)).toBe(true)
  })
})

// ── Test 4: resetRateLimit clears the limiter ──
describe('resetRateLimit', () => {
  it('clears rate limit so requests are allowed again', () => {
    const id = `reset-test-${Date.now()}`
    const config = { maxRequests: 1, windowMs: 60000 }

    checkRateLimit(id, config) // use up limit
    const blocked = checkRateLimit(id, config)
    expect(blocked.success).toBe(false)

    resetRateLimit(id)

    const afterReset = checkRateLimit(id, config)
    expect(afterReset.success).toBe(true)
    expect(afterReset.remaining).toBe(0)
  })
})

// ── Test 5: RATE_LIMITS windows are all 60 seconds ──
describe('RATE_LIMITS consistency', () => {
  it('all endpoints use 60-second windows', () => {
    const endpoints = Object.values(RATE_LIMITS)
    for (const config of endpoints) {
      expect(config.windowMs).toBe(60000)
      expect(config.maxRequests).toBeGreaterThan(0)
    }
  })

  it('submit-lead has the most restrictive limit', () => {
    const limits = Object.entries(RATE_LIMITS)
    const minLimit = limits.reduce((min, [, config]) =>
      config.maxRequests < min.maxRequests ? config : min
    , limits[0][1])

    expect(minLimit.maxRequests).toBe(RATE_LIMITS.submitLead.maxRequests)
  })
})
