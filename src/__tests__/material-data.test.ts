import { describe, it, expect } from 'vitest'
import {
  MATERIAL_PROFILES,
  getMaterialProfile,
  getBestMaterialFor,
  costPerYear,
} from '@/lib/material-data'

// ── Test 1: MATERIAL_PROFILES has complete data for all 4 materials ──
describe('MATERIAL_PROFILES', () => {
  it('contains profiles for all 4 roofing materials with complete data', () => {
    expect(MATERIAL_PROFILES).toHaveLength(4)

    const names = MATERIAL_PROFILES.map(m => m.name)
    expect(names).toContain('Architectural Shingles')
    expect(names).toContain('Metal Roofing')
    expect(names).toContain('Synthetic Roofing')
    expect(names).toContain('Roof Coatings')

    for (const profile of MATERIAL_PROFILES) {
      expect(profile.lifespanYears.min).toBeGreaterThan(0)
      expect(profile.lifespanYears.max).toBeGreaterThan(profile.lifespanYears.min)
      expect(profile.warrantyYears).toBeGreaterThan(0)
      expect(profile.windResistanceMph).toBeGreaterThan(0)
      expect(profile.pros.length).toBeGreaterThanOrEqual(3)
      expect(profile.cons.length).toBeGreaterThanOrEqual(2)
      expect(profile.bestFor).toBeTruthy()
    }
  })
})

// ── Test 2: getMaterialProfile finds correct material ──
describe('getMaterialProfile', () => {
  it('returns the correct profile by exact name match', () => {
    const metal = getMaterialProfile('Metal Roofing')
    expect(metal).toBeDefined()
    expect(metal!.name).toBe('Metal Roofing')
    expect(metal!.lifespanYears.max).toBe(70)
    expect(metal!.warrantyYears).toBe(50)
  })

  it('returns undefined for unknown material name', () => {
    expect(getMaterialProfile('Thatch Roofing')).toBeUndefined()
    expect(getMaterialProfile('')).toBeUndefined()
  })
})

// ── Test 3: getBestMaterialFor returns appropriate material per priority ──
describe('getBestMaterialFor', () => {
  it('returns Architectural Shingles for value priority', () => {
    const result = getBestMaterialFor('value')
    expect(result.name).toBe('Architectural Shingles')
  })

  it('returns Metal Roofing for longevity and energy priorities', () => {
    expect(getBestMaterialFor('longevity').name).toBe('Metal Roofing')
    expect(getBestMaterialFor('energy').name).toBe('Metal Roofing')
  })

  it('returns Roof Coatings for budget priority', () => {
    expect(getBestMaterialFor('budget').name).toBe('Roof Coatings')
  })
})

// ── Test 4: costPerYear calculates correctly ──
describe('costPerYear', () => {
  it('divides total cost by lifespan years and rounds', () => {
    expect(costPerYear(15000, 30)).toBe(500)
    expect(costPerYear(25000, 50)).toBe(500)
    expect(costPerYear(10000, 15)).toBe(667)
    expect(costPerYear(0, 30)).toBe(0)
  })

  it('handles zero lifespan gracefully', () => {
    expect(costPerYear(15000, 0)).toBe(0)
    expect(costPerYear(15000, -5)).toBe(0)
  })
})

// ── Test 5: Metal has longest lifespan, coatings has shortest ──
describe('material comparisons', () => {
  it('metal has the longest max lifespan and coatings the shortest', () => {
    const metal = getMaterialProfile('Metal Roofing')!
    const coatings = getMaterialProfile('Roof Coatings')!
    const shingles = getMaterialProfile('Architectural Shingles')!

    expect(metal.lifespanYears.max).toBeGreaterThan(coatings.lifespanYears.max)
    expect(metal.lifespanYears.max).toBeGreaterThan(shingles.lifespanYears.max)
    expect(coatings.lifespanYears.max).toBeLessThanOrEqual(shingles.lifespanYears.min)
  })

  it('metal has highest wind resistance', () => {
    const maxWind = Math.max(...MATERIAL_PROFILES.map(m => m.windResistanceMph))
    const metal = getMaterialProfile('Metal Roofing')!
    expect(metal.windResistanceMph).toBe(maxWind)
  })
})
