import { describe, it, expect } from 'vitest'
import { buildGHLPayload } from '@/lib/ghl-webhook'
import { LeadData, RoofEstimate } from '@/types'

function makeLead(): LeadData {
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
  }
}

function makeEstimate(): RoofEstimate {
  return {
    groundSqFt: 1500,
    roofSqFt: 1830,
    squares: 18.3,
    pitchDegrees: 20,
    pitchRatio: '4/12',
    imageryDate: '6/15/2024',
    estimate: { low: 7320, mid: 11675, high: 16013 },
    materialEstimates: [
      { name: 'Architectural Shingles', pricePerSqFt: { low: 4, mid: 6.38, high: 8.75 }, estimate: { low: 7320, mid: 11675, high: 16013 } },
      { name: 'Metal Roofing', pricePerSqFt: { low: 10, mid: 12, high: 14 }, estimate: { low: 18300, mid: 21960, high: 25620 } },
      { name: 'Synthetic Roofing', pricePerSqFt: { low: 8, mid: 10, high: 12 }, estimate: { low: 14640, mid: 18300, high: 21960 } },
      { name: 'Roof Coatings', pricePerSqFt: { low: 3, mid: 3.88, high: 4.75 }, estimate: { low: 5490, mid: 7100, high: 8693 } },
    ],
  }
}

describe('buildGHLPayload', () => {
  it('builds a complete GHL payload with all lead and estimate data', () => {
    const lead = makeLead()
    const estimate = makeEstimate()
    const payload = buildGHLPayload(lead, estimate)

    // Lead fields
    expect(payload.firstName).toBe('John')
    expect(payload.lastName).toBe('Doe')
    expect(payload.phone).toBe('(704) 555-1234')
    expect(payload.email).toBe('john@example.com')
    expect(payload.address1).toBe('123 Main St, Charlotte, NC 28202')
    expect(payload.city).toBe('Charlotte')
    expect(payload.state).toBe('NC')
    expect(payload.postalCode).toBe('28202')
    expect(payload.source).toBe('CharlotteRoofingHub.com')
    expect(payload.tags).toContain('instant-estimate')
    expect(payload.tags).toContain('charlotte-roofing-hub')

    // Estimate custom fields
    expect(payload.customField.roof_square_feet).toBe(1830)
    expect(payload.customField.ground_square_feet).toBe(1500)
    expect(payload.customField.roof_squares).toBe(18.3)
    expect(payload.customField.roof_pitch).toBe('4/12')
    expect(payload.customField.roof_pitch_degrees).toBe(20)
    expect(payload.customField.imagery_date).toBe('6/15/2024')
    expect(payload.customField.shingles_low).toBe(7320)
    expect(payload.customField.shingles_high).toBe(16013)
    expect(payload.customField.metal_low).toBe(18300)
    expect(payload.customField.synthetic_mid).toBe(18300)
    expect(payload.customField.coatings_high).toBe(8693)
    expect(payload.customField.tcpa_consent).toBe('Yes')
    expect(payload.customField.consent_timestamp).toBe('2024-06-15T12:00:00Z')
    expect(payload.customField.lead_score).toBeGreaterThan(0)
  })

  it('handles missing optional lead fields gracefully', () => {
    const lead: LeadData = {
      firstName: 'Jane',
      lastName: 'Smith',
      phone: '555-0000',
      email: 'jane@test.com',
      address: '456 Oak Ave',
      tcpaConsent: false,
      consentTimestamp: '',
    }
    const estimate = makeEstimate()
    const payload = buildGHLPayload(lead, estimate)

    expect(payload.city).toBe('')
    expect(payload.state).toBe('')
    expect(payload.postalCode).toBe('')
    expect(payload.customField.tcpa_consent).toBe('No')
    expect(payload.customField.ground_square_feet).toBe(1500)
    expect(payload.customField.roof_pitch_degrees).toBe(20)
    expect(payload.customField.imagery_date).toBe('6/15/2024')
    expect(payload.customField.lead_score).toBeGreaterThan(0)
  })
})
