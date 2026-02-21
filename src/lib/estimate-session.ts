// Estimate session state management

import { RoofEstimate } from '@/types'

export interface EstimateSession {
  address: string
  lat: number
  lng: number
  city: string
  state: string
  postalCode: string
  timestamp: string
}

const KEYS = {
  addressData: 'addressData',
  roofEstimate: 'roofEstimate',
  exitPopupDismissed: 'exitPopupDismissed',
  estimateEvents: 'estimate_events',
} as const

/**
 * Save address data to session.
 */
export function saveAddressToSession(data: EstimateSession): void {
  if (typeof window === 'undefined') return
  sessionStorage.setItem(KEYS.addressData, JSON.stringify(data))
}

/**
 * Get the saved address data from session.
 */
export function getAddressFromSession(): EstimateSession | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = sessionStorage.getItem(KEYS.addressData)
    if (!stored) return null
    return JSON.parse(stored)
  } catch {
    return null
  }
}

/**
 * Save roof estimate to session.
 */
export function saveEstimateToSession(estimate: RoofEstimate): void {
  if (typeof window === 'undefined') return
  sessionStorage.setItem(KEYS.roofEstimate, JSON.stringify(estimate))
}

/**
 * Get the saved roof estimate from session.
 */
export function getEstimateFromSession(): RoofEstimate | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = sessionStorage.getItem(KEYS.roofEstimate)
    if (!stored) return null
    return JSON.parse(stored)
  } catch {
    return null
  }
}

/**
 * Check if the user has a previous estimate in this session.
 */
export function hasPreviousEstimate(): boolean {
  return getEstimateFromSession() !== null
}

/**
 * Clear all estimate session data.
 */
export function clearEstimateSession(): void {
  if (typeof window === 'undefined') return
  sessionStorage.removeItem(KEYS.addressData)
  sessionStorage.removeItem(KEYS.roofEstimate)
  sessionStorage.removeItem(KEYS.estimateEvents)
}

/**
 * Get a snapshot of all stored session keys for debugging.
 */
export function getSessionSnapshot(): Record<string, boolean> {
  if (typeof window === 'undefined') return {}
  return {
    hasAddress: sessionStorage.getItem(KEYS.addressData) !== null,
    hasEstimate: sessionStorage.getItem(KEYS.roofEstimate) !== null,
    popupDismissed: sessionStorage.getItem(KEYS.exitPopupDismissed) === 'true',
    hasEvents: sessionStorage.getItem(KEYS.estimateEvents) !== null,
  }
}

/**
 * Validate that session data is not stale (within last 2 hours).
 */
export function isSessionFresh(session: EstimateSession): boolean {
  if (!session.timestamp) return false
  const sessionTime = new Date(session.timestamp).getTime()
  if (isNaN(sessionTime)) return false
  const twoHoursMs = 2 * 60 * 60 * 1000
  return Date.now() - sessionTime < twoHoursMs
}
