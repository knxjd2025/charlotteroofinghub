// Exit intent detection utilities

export const EXIT_INTENT_CONFIG = {
  /** Minimum time on page (ms) before popup can trigger */
  minTimeOnPage: 15000,
  /** Mouse must be within this Y-coordinate to trigger */
  mouseYThreshold: 10,
  /** Mobile: required upward scroll distance to trigger */
  scrollUpThreshold: 300,
  /** Mobile: must be near top of page */
  scrollTopThreshold: 100,
  /** SessionStorage key for dismissed state */
  storageKey: 'exitPopupDismissed',
} as const

/**
 * Check if exit intent should be dismissed for this session.
 */
export function isPopupDismissed(): boolean {
  if (typeof window === 'undefined') return false
  return sessionStorage.getItem(EXIT_INTENT_CONFIG.storageKey) === 'true'
}

/**
 * Mark popup as dismissed for this session.
 */
export function markPopupDismissed(): void {
  if (typeof window === 'undefined') return
  sessionStorage.setItem(EXIT_INTENT_CONFIG.storageKey, 'true')
}

/**
 * Determine if a mouseleave event should trigger exit intent.
 */
export function shouldTriggerOnMouseLeave(
  clientY: number,
  canTrigger: boolean,
  isDismissed: boolean
): boolean {
  return clientY < EXIT_INTENT_CONFIG.mouseYThreshold && canTrigger && !isDismissed
}

/**
 * Determine if scroll behavior indicates mobile exit intent.
 */
export function shouldTriggerOnScroll(
  scrollUpDistance: number,
  currentScrollY: number,
  canTrigger: boolean,
  isDismissed: boolean
): boolean {
  return (
    scrollUpDistance > EXIT_INTENT_CONFIG.scrollUpThreshold &&
    canTrigger &&
    !isDismissed &&
    currentScrollY < EXIT_INTENT_CONFIG.scrollTopThreshold
  )
}
