import { describe, it, expect } from 'vitest'
import {
  isValidConsentTimestamp,
  calculateLeadScore,
  getLeadSummary,
  buildGHLPayload,
} from '@/lib/ghl-webhook'
import { LeadData, RoofEstimate } from '@/types'

function makeLead(overrides?: Partial<LeadData>): LeadData {
  return {
    firstName: 'John',
    lastName: 'Doe',
    phone: '(704) 555-1234',
    email: 'john@example.com',
    address: '123 Main St, Charlotte, NC 28202',
    city: 'Charlotte',
    state: 'NC',
    postalCode: '28202',
    tcpaConsent: true,
    consentTimestamp: '2024-06-15T12:00:00Z',
    ...overrides,
  }
}

function makeEstimate(midPrice: number = 11675): RoofEstimate {
  return {
    groundSqFt: 1500,
    roofSqFt: 1830,
    squares: 18.3,
    pitchDegrees: 20,
    pitchRatio: '4/12',
    imageryDate: '6/15/2024',
    estimate: { low: midPrice * 0.6, mid: midPrice, high: midPrice * 1.4 },
    materialEstimates: [
      { name: 'Architectural Shingles', pricePerSqFt: { low: 4, mid: 6.38, high: 8.75 }, estimate: { low: midPrice * 0.6, mid: midPrice, high: midPrice * 1.4 } },
      { name: 'Metal Roofing', pricePerSqFt: { low: 10, mid: 12, high: 14 }, estimate: { low: 18300, mid: 21960, high: 25620 } },
      { name: 'Synthetic Roofing', pricePerSqFt: { low: 8, mid: 10, high: 12 }, estimate: { low: 14640, mid: 18300, high: 21960 } },
      { name: 'Roof Coatings', pricePerSqFt: { low: 3, mid: 3.88, high: 4.75 }, estimate: { low: 5490, mid: 7100, high: 8693 } },
    ],
  }
}

// ── Test 1: isValidConsentTimestamp validates ISO dates ──
describe('isValidConsentTimestamp', () => {
  it('accepts valid past ISO timestamps and rejects invalid ones', () => {
    // Valid past timestamps
    expect(isValidConsentTimestamp('2024-06-15T12:00:00Z')).toBe(true)
    expect(isValidConsentTimestamp('2025-01-01T00:00:00.000Z')).toBe(true)
    expect(isValidConsentTimestamp(new Date().toISOString())).toBe(true)

    // Invalid
    expect(isValidConsentTimestamp('')).toBe(false)
    expect(isValidConsentTimestamp('not-a-date')).toBe(false)
    expect(isValidConsentTimestamp('2099-01-01T00:00:00Z')).toBe(false) // future
  })
})

// ── Test 2: calculateLeadScore scores complete leads higher ──
describe('calculateLeadScore', () => {
  it('gives maximum score for complete lead with high-value estimate', () => {
    const lead = makeLead()
    const estimate = makeEstimate(35000) // high value
    const score = calculateLeadScore(lead, estimate)

    expect(score).toBeGreaterThanOrEqual(90)
    expect(score).toBeLessThanOrEqual(100)
  })

  it('gives lower score for incomplete leads', () => {
    const incompleteLead = makeLead({
      city: undefined,
      state: undefined,
      postalCode: undefined,
      tcpaConsent: false,
    })
    const estimate = makeEstimate(3000) // low value
    const score = calculateLeadScore(incompleteLead, estimate)

    expect(score).toBeLessThan(60)
  })
})

// ── Test 3: calculateLeadScore scales with estimate value ──
describe('calculateLeadScore estimate value scaling', () => {
  it('higher estimate mid-price yields higher score', () => {
    const lead = makeLead()
    const lowEstimate = makeEstimate(4000)
    const highEstimate = makeEstimate(35000)

    const lowScore = calculateLeadScore(lead, lowEstimate)
    const highScore = calculateLeadScore(lead, highEstimate)

    expect(highScore).toBeGreaterThan(lowScore)
  })
})

// ── Test 4: getLeadSummary produces readable string ──
describe('getLeadSummary', () => {
  it('generates a concise summary with name, location, and roof data', () => {
    const lead = makeLead()
    const estimate = makeEstimate()
    const payload = buildGHLPayload(lead, estimate)
    const summary = getLeadSummary(payload)

    expect(summary).toContain('John Doe')
    expect(summary).toContain('Charlotte')
    expect(summary).toContain('NC')
    expect(summary).toContain('28202')
    expect(summary).toContain('1830')
    expect(summary).toContain('4/12')
  })
})

// ── Test 5: buildGHLPayload tags always include required tags ──
describe('buildGHLPayload tags', () => {
  it('always includes the 4 required tags', () => {
    const lead = makeLead()
    const estimate = makeEstimate()
    const payload = buildGHLPayload(lead, estimate)

    const requiredTags = ['instant-estimate', 'website-lead', 'roof-replacement', 'charlotte-roofing-hub']
    for (const tag of requiredTags) {
      expect(payload.tags).toContain(tag)
    }
    expect(payload.tags).toHaveLength(4)
  })
})
