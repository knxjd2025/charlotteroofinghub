import { describe, it, expect } from 'vitest'
import {
  getPitchMultiplier,
  degreesToPitchRatio,
  calculateEstimate,
  formatCurrency,
  formatNumber,
} from '@/lib/calculations'
import { SolarData } from '@/types'

// Helper: build a minimal SolarData fixture
function makeSolarData(overrides?: {
  groundAreaMeters2?: number
  pitchDegrees?: number
  areaMeters2?: number
}): SolarData {
  const groundArea = overrides?.groundAreaMeters2 ?? 150
  const pitch = overrides?.pitchDegrees ?? 20
  const segArea = overrides?.areaMeters2 ?? 160

  return {
    solarPotential: {
      maxArrayPanelsCount: 40,
      panelCapacityWatts: 400,
      panelHeightMeters: 1.65,
      panelWidthMeters: 0.99,
      panelLifetimeYears: 20,
      maxArrayAreaMeters2: segArea,
      maxSunshineHoursPerYear: 1500,
      carbonOffsetFactorKgPerMwh: 400,
      wholeRoofStats: {
        areaMeters2: segArea,
        sunshineQuantiles: [0],
        groundAreaMeters2: groundArea,
      },
      buildingStats: {
        areaMeters2: segArea,
        sunshineQuantiles: [0],
        groundAreaMeters2: groundArea,
      },
      roofSegmentStats: [
        {
          pitchDegrees: pitch,
          azimuthDegrees: 180,
          stats: {
            areaMeters2: segArea,
            sunshineQuantiles: [0],
            groundAreaMeters2: groundArea,
          },
        },
      ],
    },
    imageryDate: { year: 2024, month: 6, day: 15 },
    imageryProcessedDate: { year: 2024, month: 7, day: 1 },
    center: { latitude: 35.227, longitude: -80.843 },
  }
}

// ── Test 1: getPitchMultiplier returns correct multipliers ──
describe('getPitchMultiplier', () => {
  it('returns 1.0 for flat roofs (≤10°) and scales up for steeper pitches', () => {
    expect(getPitchMultiplier(0)).toBe(1.0)
    expect(getPitchMultiplier(5)).toBe(1.0)
    expect(getPitchMultiplier(10)).toBe(1.0)
    expect(getPitchMultiplier(15)).toBe(1.06)
    expect(getPitchMultiplier(25)).toBe(1.12)
    expect(getPitchMultiplier(35)).toBe(1.22)
    expect(getPitchMultiplier(45)).toBe(1.41)
    expect(getPitchMultiplier(60)).toBe(1.73)
    // Extremely steep → default
    expect(getPitchMultiplier(100)).toBe(1.73)
  })
})

// ── Test 2: degreesToPitchRatio converts correctly ──
describe('degreesToPitchRatio', () => {
  it('converts degrees to rise/12 notation', () => {
    // tan(0) * 12 = 0  → "0/12"
    expect(degreesToPitchRatio(0)).toBe('0/12')
    // tan(18.43°)*12 ≈ 4 → "4/12"
    expect(degreesToPitchRatio(18.43)).toBe('4/12')
    // tan(45°)*12 = 12 → "12/12"
    expect(degreesToPitchRatio(45)).toBe('12/12')
  })
})

// ── Test 3: calculateEstimate produces valid results ──
describe('calculateEstimate', () => {
  it('returns all required fields with correct structure', () => {
    const solarData = makeSolarData({ groundAreaMeters2: 150, pitchDegrees: 20 })
    const result = calculateEstimate(solarData)

    // Verify required fields exist
    expect(result.groundSqFt).toBeGreaterThan(0)
    expect(result.roofSqFt).toBeGreaterThan(result.groundSqFt) // pitch + waste makes it larger
    expect(result.squares).toBeGreaterThan(0)
    expect(result.pitchDegrees).toBe(20)
    expect(result.pitchRatio).toMatch(/^\d+\/12$/)
    expect(result.imageryDate).toBe('6/15/2024')

    // Primary estimate (architectural shingles)
    expect(result.estimate.low).toBeGreaterThan(0)
    expect(result.estimate.mid).toBeGreaterThan(result.estimate.low)
    expect(result.estimate.high).toBeGreaterThan(result.estimate.mid)

    // 4 material types
    expect(result.materialEstimates).toHaveLength(4)
    expect(result.materialEstimates[0].name).toBe('Architectural Shingles')
    expect(result.materialEstimates[1].name).toBe('Metal Roofing')
    expect(result.materialEstimates[2].name).toBe('Synthetic Roofing')
    expect(result.materialEstimates[3].name).toBe('Roof Coatings')
  })

  it('applies pitch multiplier and waste factor correctly', () => {
    const groundAreaM2 = 100 // ~1076 sqft
    const solarData = makeSolarData({ groundAreaMeters2: groundAreaM2, pitchDegrees: 20 })
    const result = calculateEstimate(solarData)

    const expectedGroundSqFt = Math.round(groundAreaM2 * 10.7639)
    const expectedRoofSqFt = Math.round(expectedGroundSqFt * 1.06 * 1.15)

    expect(result.groundSqFt).toBe(expectedGroundSqFt)
    expect(result.roofSqFt).toBe(expectedRoofSqFt)
  })
})

// ── Test 4: formatCurrency produces expected output ──
describe('formatCurrency', () => {
  it('formats numbers as USD with no decimals', () => {
    expect(formatCurrency(15000)).toBe('$15,000')
    expect(formatCurrency(8500)).toBe('$8,500')
    expect(formatCurrency(0)).toBe('$0')
    expect(formatCurrency(1234567)).toBe('$1,234,567')
  })
})

// ── Test 5: formatNumber formats with commas ──
describe('formatNumber', () => {
  it('formats numbers with locale separators', () => {
    expect(formatNumber(1500)).toBe('1,500')
    expect(formatNumber(100)).toBe('100')
    expect(formatNumber(1234567)).toBe('1,234,567')
  })
})
