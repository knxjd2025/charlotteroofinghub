import { describe, it, expect } from 'vitest'
import {
  generateTextSummary,
  encodeEstimateForShare,
  decodeEstimateFromShare,
  calculateMaterialSavings,
} from '@/lib/estimate-export'
import { RoofEstimate, MaterialEstimate } from '@/types'

function makeEstimate(): RoofEstimate {
  return {
    groundSqFt: 1500,
    roofSqFt: 1830,
    squares: 18.3,
    pitchDegrees: 20,
    pitchRatio: '4/12',
    imageryDate: '6/15/2024',
    address: '123 Main St, Charlotte, NC 28202',
    estimate: { low: 7320, mid: 11675, high: 16013 },
    materialEstimates: [
      { name: 'Architectural Shingles', pricePerSqFt: { low: 4, mid: 6.38, high: 8.75 }, estimate: { low: 7320, mid: 11675, high: 16013 } },
      { name: 'Metal Roofing', pricePerSqFt: { low: 10, mid: 12, high: 14 }, estimate: { low: 18300, mid: 21960, high: 25620 } },
      { name: 'Synthetic Roofing', pricePerSqFt: { low: 8, mid: 10, high: 12 }, estimate: { low: 14640, mid: 18300, high: 21960 } },
      { name: 'Roof Coatings', pricePerSqFt: { low: 3, mid: 3.88, high: 4.75 }, estimate: { low: 5490, mid: 7100, high: 8693 } },
    ],
  }
}

// ── Test 1: generateTextSummary produces complete readable output ──
describe('generateTextSummary', () => {
  it('generates a formatted text summary with all estimate details', () => {
    const estimate = makeEstimate()
    const summary = generateTextSummary(estimate)

    expect(summary).toContain('CHARLOTTE ROOFING HUB')
    expect(summary).toContain('123 Main St, Charlotte, NC 28202')
    expect(summary).toContain('1,830 sq ft')
    expect(summary).toContain('4/12')
    expect(summary).toContain('Architectural Shingles')
    expect(summary).toContain('Metal Roofing')
    expect(summary).toContain('$7,320')
    expect(summary).toContain('$16,013')
    expect(summary).toContain('Disclaimer')
    expect(summary).toContain('CharlotteRoofingHub.com')
  })
})

// ── Test 2: encodeEstimateForShare creates valid base64 ──
describe('encodeEstimateForShare', () => {
  it('encodes estimate into a URL-safe base64 string', () => {
    const estimate = makeEstimate()
    const encoded = encodeEstimateForShare(estimate)

    expect(encoded).toBeTruthy()
    expect(typeof encoded).toBe('string')
    expect(encoded.length).toBeGreaterThan(0)
    // Base64 should not contain URL-unsafe chars (when using standard btoa)
    expect(encoded).not.toContain(' ')
  })
})

// ── Test 3: encode/decode roundtrip preserves data ──
describe('encode/decode roundtrip', () => {
  it('decodes back to the original estimate values', () => {
    const estimate = makeEstimate()
    const encoded = encodeEstimateForShare(estimate)
    const decoded = decodeEstimateFromShare(encoded)

    expect(decoded).not.toBeNull()
    expect(decoded!.address).toBe('123 Main St, Charlotte, NC 28202')
    expect(decoded!.roofSqFt).toBe(1830)
    expect(decoded!.groundSqFt).toBe(1500)
    expect(decoded!.pitchRatio).toBe('4/12')
    expect(decoded!.squares).toBe(18.3)
    expect(decoded!.estimate.low).toBe(7320)
    expect(decoded!.estimate.mid).toBe(11675)
    expect(decoded!.estimate.high).toBe(16013)
  })

  it('returns null for invalid encoded strings', () => {
    expect(decodeEstimateFromShare('')).toBeNull()
    expect(decodeEstimateFromShare('not-valid-base64!!!')).toBeNull()
  })
})

// ── Test 4: calculateMaterialSavings computes correct deltas ──
describe('calculateMaterialSavings', () => {
  it('calculates savings between shingles and metal roofing', () => {
    const estimate = makeEstimate()
    const shingles = estimate.materialEstimates[0]
    const metal = estimate.materialEstimates[1]

    const savings = calculateMaterialSavings(shingles, metal)

    expect(savings.midSavings).toBe(metal.estimate.mid - shingles.estimate.mid)
    expect(savings.midSavings).toBeGreaterThan(0) // Metal costs more
    expect(savings.percentSavings).toBeGreaterThan(0)
    expect(savings.percentSavings).toBeLessThan(100)
  })
})

// ── Test 5: generateTextSummary handles missing optional fields ──
describe('generateTextSummary edge cases', () => {
  it('handles estimate without address or imagery date', () => {
    const estimate: RoofEstimate = {
      groundSqFt: 1000,
      roofSqFt: 1200,
      squares: 12,
      pitchDegrees: 15,
      pitchRatio: '3/12',
      estimate: { low: 5000, mid: 8000, high: 11000 },
      materialEstimates: [
        { name: 'Architectural Shingles', pricePerSqFt: { low: 4, mid: 6, high: 8 }, estimate: { low: 5000, mid: 8000, high: 11000 } },
      ],
    }

    const summary = generateTextSummary(estimate)

    expect(summary).toContain('CHARLOTTE ROOFING HUB')
    expect(summary).toContain('1,200 sq ft')
    expect(summary).not.toContain('Property:')
    expect(summary).not.toContain('Imagery Date:')
  })
})
