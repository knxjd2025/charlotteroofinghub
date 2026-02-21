import { describe, it, expect, beforeEach } from 'vitest'
import {
  EXIT_INTENT_CONFIG,
  shouldTriggerOnMouseLeave,
  shouldTriggerOnScroll,
  isPopupDismissed,
  markPopupDismissed,
} from '@/lib/exit-intent'

// ── Test 1: shouldTriggerOnMouseLeave logic ──
describe('shouldTriggerOnMouseLeave', () => {
  it('triggers when mouse is near top, enough time passed, and not dismissed', () => {
    expect(shouldTriggerOnMouseLeave(5, true, false)).toBe(true)
    expect(shouldTriggerOnMouseLeave(0, true, false)).toBe(true)
  })

  it('does NOT trigger if mouse is below threshold', () => {
    expect(shouldTriggerOnMouseLeave(50, true, false)).toBe(false)
    expect(shouldTriggerOnMouseLeave(10, true, false)).toBe(false)
  })

  it('does NOT trigger if not enough time or already dismissed', () => {
    expect(shouldTriggerOnMouseLeave(5, false, false)).toBe(false)
    expect(shouldTriggerOnMouseLeave(5, true, true)).toBe(false)
  })
})

// ── Test 2: shouldTriggerOnScroll logic ──
describe('shouldTriggerOnScroll', () => {
  it('triggers when scroll-up exceeds threshold near top of page', () => {
    expect(shouldTriggerOnScroll(350, 50, true, false)).toBe(true)
  })

  it('does NOT trigger if scroll-up distance too small', () => {
    expect(shouldTriggerOnScroll(100, 50, true, false)).toBe(false)
  })

  it('does NOT trigger if user is still far down the page', () => {
    expect(shouldTriggerOnScroll(350, 500, true, false)).toBe(false)
  })

  it('does NOT trigger if dismissed or timer not ready', () => {
    expect(shouldTriggerOnScroll(350, 50, false, false)).toBe(false)
    expect(shouldTriggerOnScroll(350, 50, true, true)).toBe(false)
  })
})

// ── Test 3: EXIT_INTENT_CONFIG has sensible defaults ──
describe('EXIT_INTENT_CONFIG', () => {
  it('has all required config values with sensible defaults', () => {
    expect(EXIT_INTENT_CONFIG.minTimeOnPage).toBe(15000)
    expect(EXIT_INTENT_CONFIG.mouseYThreshold).toBe(10)
    expect(EXIT_INTENT_CONFIG.scrollUpThreshold).toBe(300)
    expect(EXIT_INTENT_CONFIG.scrollTopThreshold).toBe(100)
    expect(EXIT_INTENT_CONFIG.storageKey).toBe('exitPopupDismissed')
  })
})

// ── Test 4: sessionStorage persistence ──
describe('isPopupDismissed / markPopupDismissed', () => {
  beforeEach(() => {
    sessionStorage.clear()
  })

  it('returns false when not dismissed, true after marking dismissed', () => {
    expect(isPopupDismissed()).toBe(false)

    markPopupDismissed()
    expect(isPopupDismissed()).toBe(true)
  })

  it('persists across calls via sessionStorage', () => {
    markPopupDismissed()
    // Simulate re-reading
    expect(sessionStorage.getItem('exitPopupDismissed')).toBe('true')
    expect(isPopupDismissed()).toBe(true)
  })
})

// ── Test 5: Edge cases ──
describe('exit intent edge cases', () => {
  it('exact threshold values behave correctly', () => {
    // mouseY exactly at threshold (10) should NOT trigger (< 10 required)
    expect(shouldTriggerOnMouseLeave(10, true, false)).toBe(false)
    // mouseY at 9 should trigger
    expect(shouldTriggerOnMouseLeave(9, true, false)).toBe(true)

    // scrollUp exactly at threshold (300) should NOT trigger (> 300 required)
    expect(shouldTriggerOnScroll(300, 50, true, false)).toBe(false)
    // scrollUp at 301 should trigger
    expect(shouldTriggerOnScroll(301, 50, true, false)).toBe(true)

    // scrollY exactly at threshold (100) should NOT trigger (< 100 required)
    expect(shouldTriggerOnScroll(350, 100, true, false)).toBe(false)
    // scrollY at 99 should trigger
    expect(shouldTriggerOnScroll(350, 99, true, false)).toBe(true)
  })
})
