import { describe, it, expect } from 'vitest'
import { calculateEstimate, getPitchMultiplier } from '@/lib/calculations'
import { SolarData } from '@/types'
import { RATE_LIMITS } from '@/lib/rate-limit'

function makeSolarData(overrides?: Partial<{
  groundAreaMeters2: number
  segments: Array<{ pitchDegrees: number; areaMeters2: number }>
}>): SolarData {
  const groundArea = overrides?.groundAreaMeters2 ?? 150
  const segments = overrides?.segments ?? [{ pitchDegrees: 20, areaMeters2: 160 }]

  return {
    solarPotential: {
      maxArrayPanelsCount: 40,
      panelCapacityWatts: 400,
      panelHeightMeters: 1.65,
      panelWidthMeters: 0.99,
      panelLifetimeYears: 20,
      maxArrayAreaMeters2: 160,
      maxSunshineHoursPerYear: 1500,
      carbonOffsetFactorKgPerMwh: 400,
      wholeRoofStats: {
        areaMeters2: 160,
        sunshineQuantiles: [0],
        groundAreaMeters2: groundArea,
      },
      buildingStats: {
        areaMeters2: 160,
        sunshineQuantiles: [0],
        groundAreaMeters2: groundArea,
      },
      roofSegmentStats: segments.map(s => ({
        pitchDegrees: s.pitchDegrees,
        azimuthDegrees: 180,
        stats: {
          areaMeters2: s.areaMeters2,
          sunshineQuantiles: [0],
          groundAreaMeters2: groundArea / segments.length,
        },
      })),
    },
    imageryDate: { year: 2024, month: 6, day: 15 },
    imageryProcessedDate: { year: 2024, month: 7, day: 1 },
    center: { latitude: 35.227, longitude: -80.843 },
  }
}

// ── Test 1: Multi-segment weighted pitch calculation ──
describe('calculateEstimate with multiple roof segments', () => {
  it('calculates weighted average pitch across multiple segments', () => {
    const solarData = makeSolarData({
      groundAreaMeters2: 200,
      segments: [
        { pitchDegrees: 10, areaMeters2: 100 },
        { pitchDegrees: 30, areaMeters2: 100 },
      ],
    })
    const result = calculateEstimate(solarData)

    // Weighted avg: (10*100 + 30*100) / 200 = 20
    expect(result.pitchDegrees).toBe(20)
  })
})

// ── Test 2: Material estimates are ordered and all positive ──
describe('material estimates validation', () => {
  it('all material estimates have positive low < mid < high', () => {
    const solarData = makeSolarData({ groundAreaMeters2: 120 })
    const result = calculateEstimate(solarData)

    for (const mat of result.materialEstimates) {
      expect(mat.estimate.low).toBeGreaterThan(0)
      expect(mat.estimate.mid).toBeGreaterThan(mat.estimate.low)
      expect(mat.estimate.high).toBeGreaterThan(mat.estimate.mid)
      expect(mat.name).toBeTruthy()
      expect(mat.pricePerSqFt.low).toBeGreaterThan(0)
    }
  })
})

// ── Test 3: Metal roofing is more expensive than shingles ──
describe('material pricing hierarchy', () => {
  it('metal roofing costs more than architectural shingles', () => {
    const solarData = makeSolarData({ groundAreaMeters2: 150 })
    const result = calculateEstimate(solarData)

    const shingles = result.materialEstimates.find(m => m.name === 'Architectural Shingles')!
    const metal = result.materialEstimates.find(m => m.name === 'Metal Roofing')!

    expect(metal.estimate.mid).toBeGreaterThan(shingles.estimate.mid)
  })
})

// ── Test 4: Rate limit constants are properly configured ──
describe('RATE_LIMITS configuration', () => {
  it('has all required rate limit configs with reasonable values', () => {
    expect(RATE_LIMITS.autocomplete.maxRequests).toBeGreaterThanOrEqual(10)
    expect(RATE_LIMITS.autocomplete.windowMs).toBe(60000)

    expect(RATE_LIMITS.roofData.maxRequests).toBeGreaterThanOrEqual(5)
    expect(RATE_LIMITS.roofData.windowMs).toBe(60000)

    expect(RATE_LIMITS.submitLead.maxRequests).toBeGreaterThanOrEqual(3)
    expect(RATE_LIMITS.submitLead.windowMs).toBe(60000)

    expect(RATE_LIMITS.geocode.maxRequests).toBeGreaterThanOrEqual(10)
    expect(RATE_LIMITS.staticMap.maxRequests).toBeGreaterThanOrEqual(10)
  })
})

// ── Test 5: Steep roofs produce higher estimates than flat roofs ──
describe('pitch impact on estimate', () => {
  it('steep roofs cost more than flat roofs for the same ground area', () => {
    const flatRoof = makeSolarData({
      groundAreaMeters2: 150,
      segments: [{ pitchDegrees: 5, areaMeters2: 150 }],
    })
    const steepRoof = makeSolarData({
      groundAreaMeters2: 150,
      segments: [{ pitchDegrees: 45, areaMeters2: 200 }],
    })

    const flatEstimate = calculateEstimate(flatRoof)
    const steepEstimate = calculateEstimate(steepRoof)

    // Steep roof has higher multiplier → more materials → higher cost
    expect(steepEstimate.roofSqFt).toBeGreaterThan(flatEstimate.roofSqFt)
    expect(steepEstimate.estimate.mid).toBeGreaterThan(flatEstimate.estimate.mid)

    // Verify the multiplier difference
    expect(getPitchMultiplier(45)).toBeGreaterThan(getPitchMultiplier(5))
  })
})
