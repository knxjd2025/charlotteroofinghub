// Roofing material detailed data for Charlotte, NC

export interface MaterialProfile {
  name: string
  lifespanYears: { min: number; max: number }
  warrantyYears: number
  windResistanceMph: number
  energyEfficiency: 'Low' | 'Medium' | 'High'
  maintenanceLevel: 'Low' | 'Medium' | 'High'
  bestFor: string
  pros: string[]
  cons: string[]
}

export const MATERIAL_PROFILES: MaterialProfile[] = [
  {
    name: 'Architectural Shingles',
    lifespanYears: { min: 25, max: 30 },
    warrantyYears: 30,
    windResistanceMph: 130,
    energyEfficiency: 'Medium',
    maintenanceLevel: 'Low',
    bestFor: 'Most Charlotte homes — best value for money',
    pros: [
      'Most affordable option for full replacement',
      'Wide variety of colors and styles',
      'Easy to repair and widely available',
      'Good wind resistance for NC storms',
    ],
    cons: [
      'Shorter lifespan than metal or synthetic',
      'Can be damaged by large hail',
      'Less energy efficient than reflective options',
    ],
  },
  {
    name: 'Metal Roofing',
    lifespanYears: { min: 40, max: 70 },
    warrantyYears: 50,
    windResistanceMph: 140,
    energyEfficiency: 'High',
    maintenanceLevel: 'Low',
    bestFor: 'Long-term investment with energy savings',
    pros: [
      'Longest lifespan of common materials',
      'Excellent wind and hail resistance',
      'Reflects heat — reduces cooling costs 25-40%',
      'Fully recyclable and environmentally friendly',
    ],
    cons: [
      'Higher upfront cost',
      'Can be noisy in heavy rain without insulation',
      'Denting possible from large hail',
    ],
  },
  {
    name: 'Synthetic Roofing',
    lifespanYears: { min: 30, max: 50 },
    warrantyYears: 50,
    windResistanceMph: 110,
    energyEfficiency: 'Medium',
    maintenanceLevel: 'Low',
    bestFor: 'Premium look of slate/shake without the weight',
    pros: [
      'Mimics expensive materials at lower cost',
      'Lightweight — no structural reinforcement needed',
      'Impact resistant and fire rated',
      'Long warranty coverage',
    ],
    cons: [
      'Less proven track record than shingles',
      'Fewer contractor options for installation',
      'Mid-range pricing may not fit all budgets',
    ],
  },
  {
    name: 'Roof Coatings',
    lifespanYears: { min: 10, max: 20 },
    warrantyYears: 10,
    windResistanceMph: 80,
    energyEfficiency: 'High',
    maintenanceLevel: 'Medium',
    bestFor: 'Extending life of existing flat/low-slope roofs',
    pros: [
      'Lowest cost option',
      'Can extend existing roof life 10-20 years',
      'Excellent for flat and low-slope roofs',
      'Reflects UV — significant energy savings',
    ],
    cons: [
      'Not suitable for steep-slope roofs',
      'Requires recoating every 10-15 years',
      'Lower wind resistance than other options',
      'Not a full replacement solution',
    ],
  },
]

/**
 * Get the material profile by name.
 */
export function getMaterialProfile(name: string): MaterialProfile | undefined {
  return MATERIAL_PROFILES.find(m => m.name === name)
}

/**
 * Get the best material for Charlotte's climate based on priorities.
 */
export function getBestMaterialFor(
  priority: 'value' | 'longevity' | 'energy' | 'budget'
): MaterialProfile {
  switch (priority) {
    case 'value':
      return MATERIAL_PROFILES[0] // Architectural Shingles
    case 'longevity':
      return MATERIAL_PROFILES[1] // Metal Roofing
    case 'energy':
      return MATERIAL_PROFILES[1] // Metal Roofing (best energy efficiency + lifespan)
    case 'budget':
      return MATERIAL_PROFILES[3] // Roof Coatings
  }
}

/**
 * Calculate cost per year of ownership for a given material estimate.
 */
export function costPerYear(totalCost: number, lifespanYears: number): number {
  if (lifespanYears <= 0) return 0
  return Math.round(totalCost / lifespanYears)
}
