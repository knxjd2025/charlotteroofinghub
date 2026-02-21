import { describe, it, expect, beforeEach } from 'vitest'
import {
  saveAddressToSession,
  getAddressFromSession,
  saveEstimateToSession,
  getEstimateFromSession,
  hasPreviousEstimate,
  clearEstimateSession,
  getSessionSnapshot,
  isSessionFresh,
  EstimateSession,
} from '@/lib/estimate-session'
import { RoofEstimate } from '@/types'

function makeSession(): EstimateSession {
  return {
    address: '123 Main St, Charlotte, NC 28202',
    lat: 35.227,
    lng: -80.843,
    city: 'Charlotte',
    state: 'NC',
    postalCode: '28202',
    timestamp: new Date().toISOString(),
  }
}

function makeEstimate(): RoofEstimate {
  return {
    groundSqFt: 1500,
    roofSqFt: 1830,
    squares: 18.3,
    pitchDegrees: 20,
    pitchRatio: '4/12',
    estimate: { low: 7320, mid: 11675, high: 16013 },
    materialEstimates: [],
  }
}

beforeEach(() => {
  sessionStorage.clear()
})

// ── Test 1: Address session save/load roundtrip ──
describe('address session management', () => {
  it('saves and retrieves address data from session', () => {
    const session = makeSession()
    saveAddressToSession(session)

    const retrieved = getAddressFromSession()
    expect(retrieved).not.toBeNull()
    expect(retrieved!.address).toBe('123 Main St, Charlotte, NC 28202')
    expect(retrieved!.lat).toBe(35.227)
    expect(retrieved!.lng).toBe(-80.843)
    expect(retrieved!.city).toBe('Charlotte')
  })

  it('returns null when no address is stored', () => {
    expect(getAddressFromSession()).toBeNull()
  })
})

// ── Test 2: Estimate session save/load roundtrip ──
describe('estimate session management', () => {
  it('saves and retrieves estimate data from session', () => {
    const estimate = makeEstimate()
    saveEstimateToSession(estimate)

    const retrieved = getEstimateFromSession()
    expect(retrieved).not.toBeNull()
    expect(retrieved!.roofSqFt).toBe(1830)
    expect(retrieved!.pitchRatio).toBe('4/12')
  })

  it('hasPreviousEstimate returns correct boolean', () => {
    expect(hasPreviousEstimate()).toBe(false)

    saveEstimateToSession(makeEstimate())
    expect(hasPreviousEstimate()).toBe(true)
  })
})

// ── Test 3: clearEstimateSession removes all data ──
describe('clearEstimateSession', () => {
  it('clears address, estimate, and events from session', () => {
    saveAddressToSession(makeSession())
    saveEstimateToSession(makeEstimate())
    sessionStorage.setItem('estimate_events', '[]')

    clearEstimateSession()

    expect(getAddressFromSession()).toBeNull()
    expect(getEstimateFromSession()).toBeNull()
    expect(sessionStorage.getItem('estimate_events')).toBeNull()
  })
})

// ── Test 4: getSessionSnapshot returns status of all keys ──
describe('getSessionSnapshot', () => {
  it('reports status of all session storage keys', () => {
    const emptySnapshot = getSessionSnapshot()
    expect(emptySnapshot.hasAddress).toBe(false)
    expect(emptySnapshot.hasEstimate).toBe(false)
    expect(emptySnapshot.popupDismissed).toBe(false)
    expect(emptySnapshot.hasEvents).toBe(false)

    saveAddressToSession(makeSession())
    saveEstimateToSession(makeEstimate())
    sessionStorage.setItem('exitPopupDismissed', 'true')

    const fullSnapshot = getSessionSnapshot()
    expect(fullSnapshot.hasAddress).toBe(true)
    expect(fullSnapshot.hasEstimate).toBe(true)
    expect(fullSnapshot.popupDismissed).toBe(true)
  })
})

// ── Test 5: isSessionFresh validates timestamp recency ──
describe('isSessionFresh', () => {
  it('returns true for recent sessions', () => {
    const session = makeSession()
    expect(isSessionFresh(session)).toBe(true)
  })

  it('returns false for sessions older than 2 hours', () => {
    const oldSession = makeSession()
    const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
    oldSession.timestamp = threeHoursAgo
    expect(isSessionFresh(oldSession)).toBe(false)
  })

  it('returns false for invalid timestamps', () => {
    const badSession = makeSession()
    badSession.timestamp = ''
    expect(isSessionFresh(badSession)).toBe(false)

    badSession.timestamp = 'not-a-date'
    expect(isSessionFresh(badSession)).toBe(false)
  })
})
