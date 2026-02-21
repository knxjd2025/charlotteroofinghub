import { describe, it, expect, beforeEach } from 'vitest'
import { checkRateLimit, getClientIP } from '@/lib/rate-limit'

// ── Test 1: checkRateLimit allows requests within limit ──
describe('checkRateLimit', () => {
  it('allows requests within the configured limit', () => {
    const id = `test-allow-${Date.now()}`
    const config = { maxRequests: 3, windowMs: 60000 }

    const r1 = checkRateLimit(id, config)
    expect(r1.success).toBe(true)
    expect(r1.remaining).toBe(2)

    const r2 = checkRateLimit(id, config)
    expect(r2.success).toBe(true)
    expect(r2.remaining).toBe(1)

    const r3 = checkRateLimit(id, config)
    expect(r3.success).toBe(true)
    expect(r3.remaining).toBe(0)
  })

  // ── Test 2: checkRateLimit blocks when exceeded ──
  it('blocks requests that exceed the limit', () => {
    const id = `test-block-${Date.now()}`
    const config = { maxRequests: 2, windowMs: 60000 }

    checkRateLimit(id, config) // 1
    checkRateLimit(id, config) // 2

    const r3 = checkRateLimit(id, config) // 3 → blocked
    expect(r3.success).toBe(false)
    expect(r3.remaining).toBe(0)
  })

  // ── Test 3: separate identifiers have independent limits ──
  it('tracks separate identifiers independently', () => {
    const config = { maxRequests: 1, windowMs: 60000 }

    const idA = `test-a-${Date.now()}`
    const idB = `test-b-${Date.now()}`

    const rA = checkRateLimit(idA, config)
    expect(rA.success).toBe(true)

    const rB = checkRateLimit(idB, config)
    expect(rB.success).toBe(true)

    // A is now exceeded
    const rA2 = checkRateLimit(idA, config)
    expect(rA2.success).toBe(false)

    // B is also exceeded
    const rB2 = checkRateLimit(idB, config)
    expect(rB2.success).toBe(false)
  })
})

// ── Test 4: getClientIP extracts IP from x-forwarded-for ──
describe('getClientIP', () => {
  it('extracts IP from x-forwarded-for header', () => {
    const request = new Request('http://localhost', {
      headers: { 'x-forwarded-for': '192.168.1.100, 10.0.0.1' },
    })
    expect(getClientIP(request)).toBe('192.168.1.100')
  })

  // ── Test 5: getClientIP falls back to x-real-ip then unknown ──
  it('falls back to x-real-ip then unknown', () => {
    const reqRealIP = new Request('http://localhost', {
      headers: { 'x-real-ip': '10.0.0.5' },
    })
    expect(getClientIP(reqRealIP)).toBe('10.0.0.5')

    const reqNone = new Request('http://localhost')
    expect(getClientIP(reqNone)).toBe('unknown')
  })
})
