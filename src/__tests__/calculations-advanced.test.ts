import { describe, it, expect } from 'vitest'
import {
  getRoofComplexity,
  getEstimateSummary,
  getRecommendedMaterial,
  calculateEstimate,
} from '@/lib/calculations'
import { SolarData } from '@/types'

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

// ── Test 1: Simple roof gets low complexity score ──
describe('getRoofComplexity', () => {
  it('rates a single-segment roof as Simple', () => {
    const data = makeSolarData({ segments: [{ pitchDegrees: 20, areaMeters2: 160 }] })
    const result = getRoofComplexity(data)

    expect(result.label).toBe('Simple')
    expect(result.segmentCount).toBe(1)
    expect(result.score).toBeGreaterThanOrEqual(1)
    expect(result.score).toBeLessThanOrEqual(3)
  })

  // ── Test 2: Complex multi-segment roof with varied pitches ──
  it('rates a multi-segment high-variance roof as Complex', () => {
    const data = makeSolarData({
      segments: [
        { pitchDegrees: 5, areaMeters2: 50 },
        { pitchDegrees: 15, areaMeters2: 50 },
        { pitchDegrees: 35, areaMeters2: 50 },
        { pitchDegrees: 45, areaMeters2: 50 },
        { pitchDegrees: 50, areaMeters2: 50 },
        { pitchDegrees: 10, areaMeters2: 50 },
        { pitchDegrees: 40, areaMeters2: 50 },
      ],
    })
    const result = getRoofComplexity(data)

    expect(result.label).toBe('Complex')
    expect(result.segmentCount).toBe(7)
    expect(result.score).toBeGreaterThanOrEqual(7)
  })
})

// ── Test 3: getEstimateSummary produces readable string ──
describe('getEstimateSummary', () => {
  it('generates a human-readable summary with sq ft, pitch, and price range', () => {
    const data = makeSolarData({ groundAreaMeters2: 150 })
    const estimate = calculateEstimate(data)
    const summary = getEstimateSummary(estimate)

    expect(summary).toContain('sq ft')
    expect(summary).toContain('/12')
    expect(summary).toContain('Architectural Shingles')
    expect(summary).toContain('$')
    expect(summary).toContain(' to ')
  })
})

// ── Test 4: getRecommendedMaterial returns correct material per budget ──
describe('getRecommendedMaterial', () => {
  it('returns cheapest material for economy, most expensive for premium', () => {
    const data = makeSolarData({ groundAreaMeters2: 150 })
    const estimate = calculateEstimate(data)

    const economy = getRecommendedMaterial(estimate, 'economy')!
    const premium = getRecommendedMaterial(estimate, 'premium')!
    const midRange = getRecommendedMaterial(estimate, 'mid-range')!

    expect(economy.name).toBe('Roof Coatings')
    expect(premium.name).toBe('Metal Roofing')
    expect(midRange.name).toBe('Architectural Shingles')

    expect(economy.estimate.mid).toBeLessThan(premium.estimate.mid)
  })
})

// ── Test 5: Zero-segment edge case handled gracefully ──
describe('getRoofComplexity edge cases', () => {
  it('handles zero segments gracefully', () => {
    const data: SolarData = {
      solarPotential: {
        maxArrayPanelsCount: 0,
        panelCapacityWatts: 0,
        panelHeightMeters: 0,
        panelWidthMeters: 0,
        panelLifetimeYears: 0,
        maxArrayAreaMeters2: 0,
        maxSunshineHoursPerYear: 0,
        carbonOffsetFactorKgPerMwh: 0,
        wholeRoofStats: { areaMeters2: 0, sunshineQuantiles: [], groundAreaMeters2: 0 },
        buildingStats: { areaMeters2: 0, sunshineQuantiles: [], groundAreaMeters2: 0 },
        roofSegmentStats: [],
      },
      imageryDate: { year: 2024, month: 1, day: 1 },
      imageryProcessedDate: { year: 2024, month: 1, day: 1 },
      center: { latitude: 0, longitude: 0 },
    }

    const result = getRoofComplexity(data)
    expect(result.score).toBe(1)
    expect(result.label).toBe('Simple')
    expect(result.segmentCount).toBe(0)
  })
})
