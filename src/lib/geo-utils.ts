// Geographic utilities for Charlotte metro area

export interface LatLng {
  lat: number
  lng: number
}

/**
 * Charlotte metro bounding box (approximate).
 * Covers Charlotte, Huntersville, Cornelius, Davidson, Matthews,
 * Mint Hill, Pineville, Indian Trail, Waxhaw, Fort Mill area.
 */
export const CHARLOTTE_METRO_BOUNDS = {
  north: 35.55,
  south: 34.90,
  east: -80.55,
  west: -81.10,
} as const

/**
 * Check if coordinates are within the Charlotte metro service area.
 */
export function isInCharlotteMetro(lat: number, lng: number): boolean {
  return (
    lat >= CHARLOTTE_METRO_BOUNDS.south &&
    lat <= CHARLOTTE_METRO_BOUNDS.north &&
    lng >= CHARLOTTE_METRO_BOUNDS.west &&
    lng <= CHARLOTTE_METRO_BOUNDS.east
  )
}

/**
 * Calculate distance between two points in miles using Haversine formula.
 */
export function distanceMiles(point1: LatLng, point2: LatLng): number {
  const R = 3959 // Earth radius in miles
  const dLat = toRadians(point2.lat - point1.lat)
  const dLng = toRadians(point2.lng - point1.lng)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(point1.lat)) * Math.cos(toRadians(point2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180)
}

/**
 * Charlotte city center coordinates.
 */
export const CHARLOTTE_CENTER: LatLng = {
  lat: 35.2271,
  lng: -80.8431,
}

/**
 * Get distance from Charlotte city center in miles.
 */
export function distanceFromCharlotte(lat: number, lng: number): number {
  return distanceMiles(CHARLOTTE_CENTER, { lat, lng })
}

/**
 * Validate that coordinates are reasonable (not 0,0 or out of range).
 */
export function isValidCoordinates(lat: number, lng: number): boolean {
  if (isNaN(lat) || isNaN(lng)) return false
  if (lat === 0 && lng === 0) return false
  return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180
}
