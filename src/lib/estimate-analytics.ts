// Estimate funnel analytics tracking

export type EstimateEvent =
  | 'estimate_page_view'
  | 'address_entered'
  | 'address_autocomplete_used'
  | 'address_geocode_fallback'
  | 'satellite_confirmed'
  | 'satellite_rejected'
  | 'calculation_started'
  | 'calculation_completed'
  | 'lead_form_started'
  | 'lead_form_submitted'
  | 'estimate_results_viewed'
  | 'exit_popup_shown'
  | 'exit_popup_dismissed'
  | 'exit_popup_address_entered'

export interface AnalyticsEvent {
  event: EstimateEvent
  timestamp: string
  properties?: Record<string, string | number | boolean>
}

/**
 * Track an estimate funnel event. Stores events in sessionStorage
 * for the current visit and can be sent to analytics backends.
 */
export function trackEstimateEvent(
  event: EstimateEvent,
  properties?: Record<string, string | number | boolean>
): AnalyticsEvent {
  const analyticsEvent: AnalyticsEvent = {
    event,
    timestamp: new Date().toISOString(),
    properties,
  }

  if (typeof window !== 'undefined') {
    const existing = getSessionEvents()
    existing.push(analyticsEvent)
    sessionStorage.setItem('estimate_events', JSON.stringify(existing))
  }

  return analyticsEvent
}

/**
 * Get all estimate events tracked in this session.
 */
export function getSessionEvents(): AnalyticsEvent[] {
  if (typeof window === 'undefined') return []

  try {
    const stored = sessionStorage.getItem('estimate_events')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

/**
 * Calculate funnel conversion metrics from session events.
 */
export function getFunnelMetrics(events: AnalyticsEvent[]): {
  pageViews: number
  addressesEntered: number
  satelliteConfirmed: number
  formsSubmitted: number
  resultsViewed: number
  conversionRate: number
  popupShown: number
  popupConverted: number
} {
  const pageViews = events.filter(e => e.event === 'estimate_page_view').length
  const addressesEntered = events.filter(e => e.event === 'address_entered').length
  const satelliteConfirmed = events.filter(e => e.event === 'satellite_confirmed').length
  const formsSubmitted = events.filter(e => e.event === 'lead_form_submitted').length
  const resultsViewed = events.filter(e => e.event === 'estimate_results_viewed').length
  const popupShown = events.filter(e => e.event === 'exit_popup_shown').length
  const popupConverted = events.filter(e => e.event === 'exit_popup_address_entered').length

  const conversionRate = pageViews > 0 ? (formsSubmitted / pageViews) * 100 : 0

  return {
    pageViews,
    addressesEntered,
    satelliteConfirmed,
    formsSubmitted,
    resultsViewed,
    conversionRate: Math.round(conversionRate * 10) / 10,
    popupShown,
    popupConverted,
  }
}

/**
 * Get the time elapsed in the funnel (first event to last event) in seconds.
 */
export function getFunnelDuration(events: AnalyticsEvent[]): number {
  if (events.length < 2) return 0

  const sorted = [...events].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  )

  const first = new Date(sorted[0].timestamp).getTime()
  const last = new Date(sorted[sorted.length - 1].timestamp).getTime()

  return Math.round((last - first) / 1000)
}
