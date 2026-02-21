import { describe, it, expect, beforeEach } from 'vitest'
import {
  trackEstimateEvent,
  getSessionEvents,
  getFunnelMetrics,
  getFunnelDuration,
  AnalyticsEvent,
} from '@/lib/estimate-analytics'

beforeEach(() => {
  sessionStorage.clear()
})

// ── Test 1: trackEstimateEvent stores events in sessionStorage ──
describe('trackEstimateEvent', () => {
  it('stores events in sessionStorage and returns the event object', () => {
    const event = trackEstimateEvent('estimate_page_view', { source: 'direct' })

    expect(event.event).toBe('estimate_page_view')
    expect(event.timestamp).toBeTruthy()
    expect(event.properties?.source).toBe('direct')

    const stored = getSessionEvents()
    expect(stored).toHaveLength(1)
    expect(stored[0].event).toBe('estimate_page_view')
  })

  it('appends multiple events to the same session', () => {
    trackEstimateEvent('estimate_page_view')
    trackEstimateEvent('address_entered')
    trackEstimateEvent('satellite_confirmed')

    const stored = getSessionEvents()
    expect(stored).toHaveLength(3)
    expect(stored.map(e => e.event)).toEqual([
      'estimate_page_view',
      'address_entered',
      'satellite_confirmed',
    ])
  })
})

// ── Test 2: getFunnelMetrics calculates correct metrics ──
describe('getFunnelMetrics', () => {
  it('counts events by type and calculates conversion rate', () => {
    const events: AnalyticsEvent[] = [
      { event: 'estimate_page_view', timestamp: '2024-01-01T00:00:00Z' },
      { event: 'address_entered', timestamp: '2024-01-01T00:00:10Z' },
      { event: 'satellite_confirmed', timestamp: '2024-01-01T00:00:20Z' },
      { event: 'lead_form_submitted', timestamp: '2024-01-01T00:00:30Z' },
      { event: 'estimate_results_viewed', timestamp: '2024-01-01T00:00:40Z' },
    ]

    const metrics = getFunnelMetrics(events)

    expect(metrics.pageViews).toBe(1)
    expect(metrics.addressesEntered).toBe(1)
    expect(metrics.satelliteConfirmed).toBe(1)
    expect(metrics.formsSubmitted).toBe(1)
    expect(metrics.resultsViewed).toBe(1)
    expect(metrics.conversionRate).toBe(100) // 1/1 = 100%
  })
})

// ── Test 3: getFunnelMetrics with zero events ──
describe('getFunnelMetrics edge cases', () => {
  it('handles empty events array with zero conversion', () => {
    const metrics = getFunnelMetrics([])

    expect(metrics.pageViews).toBe(0)
    expect(metrics.conversionRate).toBe(0)
    expect(metrics.popupShown).toBe(0)
    expect(metrics.popupConverted).toBe(0)
  })

  it('tracks popup events separately', () => {
    const events: AnalyticsEvent[] = [
      { event: 'estimate_page_view', timestamp: '2024-01-01T00:00:00Z' },
      { event: 'exit_popup_shown', timestamp: '2024-01-01T00:00:15Z' },
      { event: 'exit_popup_address_entered', timestamp: '2024-01-01T00:00:20Z' },
    ]

    const metrics = getFunnelMetrics(events)
    expect(metrics.popupShown).toBe(1)
    expect(metrics.popupConverted).toBe(1)
    expect(metrics.conversionRate).toBe(0) // No form submission = 0% conversion
  })
})

// ── Test 4: getFunnelDuration calculates time span ──
describe('getFunnelDuration', () => {
  it('calculates seconds between first and last event', () => {
    const events: AnalyticsEvent[] = [
      { event: 'estimate_page_view', timestamp: '2024-01-01T00:00:00Z' },
      { event: 'address_entered', timestamp: '2024-01-01T00:00:30Z' },
      { event: 'lead_form_submitted', timestamp: '2024-01-01T00:01:30Z' },
    ]

    const duration = getFunnelDuration(events)
    expect(duration).toBe(90) // 90 seconds
  })

  it('returns 0 for single or empty events', () => {
    expect(getFunnelDuration([])).toBe(0)
    expect(getFunnelDuration([
      { event: 'estimate_page_view', timestamp: '2024-01-01T00:00:00Z' },
    ])).toBe(0)
  })
})

// ── Test 5: getSessionEvents returns empty array when no data ──
describe('getSessionEvents', () => {
  it('returns empty array when sessionStorage is empty', () => {
    expect(getSessionEvents()).toEqual([])
  })

  it('handles corrupted sessionStorage data gracefully', () => {
    sessionStorage.setItem('estimate_events', 'not-valid-json')
    expect(getSessionEvents()).toEqual([])
  })
})
