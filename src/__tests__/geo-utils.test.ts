import { describe, it, expect } from 'vitest'
import {
  isInCharlotteMetro,
  distanceMiles,
  distanceFromCharlotte,
  isValidCoordinates,
  CHARLOTTE_CENTER,
  CHARLOTTE_METRO_BOUNDS,
} from '@/lib/geo-utils'

// ── Test 1: isInCharlotteMetro validates Charlotte area coordinates ──
describe('isInCharlotteMetro', () => {
  it('returns true for locations within Charlotte metro area', () => {
    // Charlotte city center
    expect(isInCharlotteMetro(35.2271, -80.8431)).toBe(true)
    // Huntersville
    expect(isInCharlotteMetro(35.4107, -80.8429)).toBe(true)
    // Matthews
    expect(isInCharlotteMetro(35.1168, -80.7237)).toBe(true)
    // Pineville
    expect(isInCharlotteMetro(35.0832, -80.8453)).toBe(true)
  })

  it('returns false for locations outside the service area', () => {
    // Raleigh, NC
    expect(isInCharlotteMetro(35.7796, -78.6382)).toBe(false)
    // New York City
    expect(isInCharlotteMetro(40.7128, -74.0060)).toBe(false)
    // Asheville, NC
    expect(isInCharlotteMetro(35.5951, -82.5515)).toBe(false)
  })
})

// ── Test 2: distanceMiles calculates correctly ──
describe('distanceMiles', () => {
  it('calculates distance between two points in miles', () => {
    // Charlotte to itself = 0
    const d0 = distanceMiles(CHARLOTTE_CENTER, CHARLOTTE_CENTER)
    expect(d0).toBe(0)

    // Charlotte to Huntersville (~12 miles)
    const d1 = distanceMiles(CHARLOTTE_CENTER, { lat: 35.4107, lng: -80.8429 })
    expect(d1).toBeGreaterThan(10)
    expect(d1).toBeLessThan(15)

    // Charlotte to Raleigh (~130-170 miles)
    const d2 = distanceMiles(CHARLOTTE_CENTER, { lat: 35.7796, lng: -78.6382 })
    expect(d2).toBeGreaterThan(120)
    expect(d2).toBeLessThan(180)
  })
})

// ── Test 3: distanceFromCharlotte uses city center ──
describe('distanceFromCharlotte', () => {
  it('measures distance from Charlotte city center', () => {
    // City center itself
    expect(distanceFromCharlotte(35.2271, -80.8431)).toBeCloseTo(0, 0)

    // Nearby suburb (~5-15 miles)
    const dist = distanceFromCharlotte(35.3, -80.85)
    expect(dist).toBeGreaterThan(3)
    expect(dist).toBeLessThan(15)
  })
})

// ── Test 4: isValidCoordinates rejects bad inputs ──
describe('isValidCoordinates', () => {
  it('accepts valid coordinates and rejects invalid ones', () => {
    expect(isValidCoordinates(35.2271, -80.8431)).toBe(true)
    expect(isValidCoordinates(0, 0)).toBe(false) // null island
    expect(isValidCoordinates(NaN, -80)).toBe(false)
    expect(isValidCoordinates(35, NaN)).toBe(false)
    expect(isValidCoordinates(91, -80)).toBe(false) // out of range
    expect(isValidCoordinates(35, -181)).toBe(false) // out of range
    expect(isValidCoordinates(-90, 180)).toBe(true) // edge of valid range
  })
})

// ── Test 5: CHARLOTTE_METRO_BOUNDS has valid region ──
describe('CHARLOTTE_METRO_BOUNDS', () => {
  it('defines a valid rectangular region with north > south and east > west', () => {
    expect(CHARLOTTE_METRO_BOUNDS.north).toBeGreaterThan(CHARLOTTE_METRO_BOUNDS.south)
    expect(CHARLOTTE_METRO_BOUNDS.east).toBeGreaterThan(CHARLOTTE_METRO_BOUNDS.west)

    // Charlotte center should be inside bounds
    expect(CHARLOTTE_CENTER.lat).toBeGreaterThan(CHARLOTTE_METRO_BOUNDS.south)
    expect(CHARLOTTE_CENTER.lat).toBeLessThan(CHARLOTTE_METRO_BOUNDS.north)
    expect(CHARLOTTE_CENTER.lng).toBeGreaterThan(CHARLOTTE_METRO_BOUNDS.west)
    expect(CHARLOTTE_CENTER.lng).toBeLessThan(CHARLOTTE_METRO_BOUNDS.east)
  })
})
