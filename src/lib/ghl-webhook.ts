import { LeadData, RoofEstimate, GHLWebhookPayload } from '@/types';

export function buildGHLPayload(
  lead: LeadData,
  estimate: RoofEstimate
): GHLWebhookPayload {
  const shingles = estimate.materialEstimates.find(m => m.name === 'Architectural Shingles')?.estimate || estimate.estimate;
  const metal = estimate.materialEstimates.find(m => m.name === 'Metal Roofing')?.estimate || { low: 0, mid: 0, high: 0 };
  const synthetic = estimate.materialEstimates.find(m => m.name === 'Synthetic Roofing')?.estimate || { low: 0, mid: 0, high: 0 };
  const coatings = estimate.materialEstimates.find(m => m.name === 'Roof Coatings')?.estimate || { low: 0, mid: 0, high: 0 };

  return {
    firstName: lead.firstName,
    lastName: lead.lastName,
    phone: lead.phone,
    email: lead.email,
    address1: lead.address,
    city: lead.city || '',
    state: lead.state || '',
    postalCode: lead.postalCode || '',
    source: 'CharlotteRoofingHub.com',
    tags: ['instant-estimate', 'website-lead', 'roof-replacement', 'charlotte-roofing-hub'],
    customField: {
      roof_square_feet: estimate.roofSqFt,
      roof_squares: estimate.squares,
      roof_pitch: estimate.pitchRatio,
      shingles_low: shingles.low,
      shingles_mid: shingles.mid,
      shingles_high: shingles.high,
      metal_low: metal.low,
      metal_mid: metal.mid,
      metal_high: metal.high,
      synthetic_low: synthetic.low,
      synthetic_mid: synthetic.mid,
      synthetic_high: synthetic.high,
      coatings_low: coatings.low,
      coatings_mid: coatings.mid,
      coatings_high: coatings.high,
      tcpa_consent: lead.tcpaConsent ? 'Yes' : 'No',
      consent_timestamp: lead.consentTimestamp,
    },
  };
}

/**
 * Validate that a consent timestamp is a valid ISO date string and not in the future.
 */
export function isValidConsentTimestamp(timestamp: string): boolean {
  if (!timestamp) return false;
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) return false;
  // Must not be in the future (allow 5 min clock skew)
  return date.getTime() <= Date.now() + 5 * 60 * 1000;
}

/**
 * Calculate a lead quality score (1-100) based on completeness and estimate value.
 */
export function calculateLeadScore(lead: LeadData, estimate: RoofEstimate): number {
  let score = 0;

  // Contact completeness (up to 40 points)
  if (lead.firstName) score += 8;
  if (lead.lastName) score += 8;
  if (lead.phone) score += 8;
  if (lead.email) score += 8;
  if (lead.tcpaConsent) score += 8;

  // Address completeness (up to 20 points)
  if (lead.address) score += 8;
  if (lead.city) score += 4;
  if (lead.state) score += 4;
  if (lead.postalCode) score += 4;

  // Estimate value signals quality (up to 40 points)
  // Higher value roofs = more valuable leads
  const midEstimate = estimate.estimate.mid;
  if (midEstimate > 5000) score += 10;
  if (midEstimate > 10000) score += 10;
  if (midEstimate > 20000) score += 10;
  if (midEstimate > 30000) score += 10;

  return Math.min(100, score);
}

/**
 * Get a summary of the lead payload for logging.
 */
export function getLeadSummary(payload: GHLWebhookPayload): string {
  return `${payload.firstName} ${payload.lastName} | ${payload.city}, ${payload.state} ${payload.postalCode} | ${payload.customField.roof_square_feet} sqft | ${payload.customField.roof_pitch} pitch`;
}

export async function submitToGHL(payload: GHLWebhookPayload): Promise<boolean> {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('GHL_WEBHOOK_URL not configured');
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error('GHL webhook failed:', response.status, response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('GHL webhook error:', error);
    return false;
  }
}
