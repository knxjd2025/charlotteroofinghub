import { SolarData, RoofEstimate, MaterialEstimate } from '@/types';

const PITCH_MULTIPLIERS: Record<number, number> = {
  10: 1.00,  // 0-10 degrees
  20: 1.06,  // 10-20 degrees
  30: 1.12,  // 20-30 degrees
  40: 1.22,  // 30-40 degrees
  50: 1.41,  // 40-50 degrees
  90: 1.73,  // 50+ degrees
};

const SQ_METERS_TO_SQ_FEET = 10.7639;
const WASTE_FACTOR = 1.15; // 15% waste

// Material pricing per square foot
const MATERIAL_PRICING = [
  {
    name: 'Architectural Shingles',
    pricePerSqFt: { low: 4.00, mid: 6.38, high: 8.75 },
  },
  {
    name: 'Metal Roofing',
    pricePerSqFt: { low: 10.00, mid: 12.00, high: 14.00 },
  },
  {
    name: 'Synthetic Roofing',
    pricePerSqFt: { low: 8.00, mid: 10.00, high: 12.00 },
  },
  {
    name: 'Roof Coatings',
    pricePerSqFt: { low: 3.00, mid: 3.88, high: 4.75 },
  },
];

export function getPitchMultiplier(pitchDegrees: number): number {
  const thresholds = Object.keys(PITCH_MULTIPLIERS)
    .map(Number)
    .sort((a, b) => a - b);

  for (const threshold of thresholds) {
    if (pitchDegrees <= threshold) {
      return PITCH_MULTIPLIERS[threshold];
    }
  }
  return 1.73; // Default for very steep roofs
}

export function degreesToPitchRatio(degrees: number): string {
  const rise = Math.tan(degrees * Math.PI / 180) * 12;
  return `${Math.round(rise)}/12`;
}

export function calculateEstimate(solarData: SolarData): RoofEstimate {
  const segments = solarData.solarPotential.roofSegmentStats;

  // Calculate weighted average pitch
  let totalArea = 0;
  let weightedPitch = 0;

  segments.forEach((seg) => {
    const area = seg.stats.areaMeters2;
    totalArea += area;
    weightedPitch += seg.pitchDegrees * area;
  });

  const avgPitch = totalArea > 0 ? weightedPitch / totalArea : 20; // Default to 20 degrees

  // Get pitch multiplier
  const pitchMult = getPitchMultiplier(avgPitch);

  // Calculate areas
  const groundSqFt = solarData.solarPotential.wholeRoofStats.groundAreaMeters2 * SQ_METERS_TO_SQ_FEET;
  const roofSqFt = groundSqFt * pitchMult * WASTE_FACTOR;
  const squares = roofSqFt / 100;

  // Format imagery date
  const { year, month, day } = solarData.imageryDate || { year: 2024, month: 1, day: 1 };
  const imageryDate = `${month}/${day}/${year}`;

  // Calculate estimates for each material type
  const materialEstimates: MaterialEstimate[] = MATERIAL_PRICING.map((material) => ({
    name: material.name,
    pricePerSqFt: material.pricePerSqFt,
    estimate: {
      low: Math.round(roofSqFt * material.pricePerSqFt.low),
      mid: Math.round(roofSqFt * material.pricePerSqFt.mid),
      high: Math.round(roofSqFt * material.pricePerSqFt.high),
    },
  }));

  // Primary estimate is Architectural Shingles (first material)
  const primaryEstimate = materialEstimates[0].estimate;

  return {
    groundSqFt: Math.round(groundSqFt),
    roofSqFt: Math.round(roofSqFt),
    squares: Math.round(squares * 10) / 10,
    pitchDegrees: Math.round(avgPitch),
    pitchRatio: degreesToPitchRatio(avgPitch),
    imageryDate,
    estimate: primaryEstimate,
    materialEstimates,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

/**
 * Calculate a roof complexity score based on segment count and pitch variance.
 * Returns 'Simple' | 'Moderate' | 'Complex' with a numeric score 1-10.
 */
export function getRoofComplexity(solarData: SolarData): {
  score: number;
  label: 'Simple' | 'Moderate' | 'Complex';
  segmentCount: number;
} {
  const segments = solarData.solarPotential.roofSegmentStats;
  const segmentCount = segments.length;

  if (segmentCount === 0) {
    return { score: 1, label: 'Simple', segmentCount: 0 };
  }

  // Pitch variance contributes to complexity
  const pitches = segments.map(s => s.pitchDegrees);
  const avgPitch = pitches.reduce((a, b) => a + b, 0) / pitches.length;
  const pitchVariance = pitches.reduce((sum, p) => sum + Math.pow(p - avgPitch, 2), 0) / pitches.length;
  const pitchStdDev = Math.sqrt(pitchVariance);

  // Score: segments (1-5 points) + pitch variance (1-5 points)
  const segmentScore = Math.min(segmentCount, 5);
  const varianceScore = Math.min(Math.round(pitchStdDev / 3), 5);
  const score = Math.max(1, Math.min(10, segmentScore + varianceScore));

  let label: 'Simple' | 'Moderate' | 'Complex';
  if (score <= 3) label = 'Simple';
  else if (score <= 6) label = 'Moderate';
  else label = 'Complex';

  return { score, label, segmentCount };
}

/**
 * Generate a human-readable estimate summary string.
 */
export function getEstimateSummary(estimate: RoofEstimate): string {
  const primary = estimate.materialEstimates[0];
  if (!primary) return '';
  return `${formatNumber(estimate.roofSqFt)} sq ft roof at ${estimate.pitchRatio} pitch — ${primary.name}: ${formatCurrency(primary.estimate.low)} to ${formatCurrency(primary.estimate.high)}`;
}

/**
 * Get the recommended material based on budget preference.
 */
export function getRecommendedMaterial(
  estimate: RoofEstimate,
  budget: 'economy' | 'mid-range' | 'premium'
): MaterialEstimate | null {
  if (estimate.materialEstimates.length === 0) return null;

  switch (budget) {
    case 'economy':
      // Cheapest = Roof Coatings (last in array)
      return estimate.materialEstimates.reduce((cheapest, m) =>
        m.estimate.mid < cheapest.estimate.mid ? m : cheapest
      );
    case 'premium':
      // Most expensive
      return estimate.materialEstimates.reduce((priciest, m) =>
        m.estimate.mid > priciest.estimate.mid ? m : priciest
      );
    case 'mid-range':
    default:
      // Architectural Shingles (first)
      return estimate.materialEstimates[0];
  }
}
