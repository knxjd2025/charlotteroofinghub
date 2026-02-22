// Type definitions for Charlotte Roofing Hub

export interface Company {
  id: string
  name: string
  slug: string
  description?: string | null
  phone?: string | null
  email?: string | null
  website?: string | null
  address?: string | null
  city: string
  state: string
  zipCode?: string | null
  googleRating?: number | null
  reviewCount?: number | null
  services: string[]
  materials: string[]
  isFounder: boolean
  isContributor: boolean
  isVerified: boolean
  logoUrl?: string | null
  bbbRating?: string | null
  bbbAccredited?: boolean | null
  bbbUrl?: string | null
  yearsInBusiness?: number | null
  createdAt: Date
  updatedAt: Date
}

export interface Job {
  id: string
  title: string
  description: string
  type: string
  payRange?: string | null
  companyId: string
  company?: Company
  location: string
  isApproved: boolean
  createdAt: Date
  expiresAt?: Date | null
}

export interface Crew {
  id: string
  name: string
  type: string
  phone: string
  email: string
  experience?: string | null
  skills: string[]
  bio?: string | null
  city: string
  isAvailable: boolean
  isApproved: boolean
  createdAt: Date
  updatedAt: Date
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string | null
  category?: string | null
  tags: string[]
  author: string
  imageUrl?: string | null
  isPublished: boolean
  publishedAt?: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface FAQ {
  question: string
  answer: string
}

export interface MaterialInfo {
  name: string
  avgCostPerSqFt: string
  lifespan: string
  bestFor: string
  description: string
}

export type CrewType = 'sales-rep' | 'crew-leader' | 'installer' | 'laborer' | 'foreman'
export type JobType = 'full-time' | 'part-time' | 'contract' | 'commission'
export type ServiceType = 'residential' | 'commercial' | 'repairs' | 'inspections' | 'gutters'

// Instant Roof Estimate Types

export interface RoofSegment {
  pitchDegrees: number
  azimuthDegrees: number
  stats: {
    areaMeters2: number
    sunshineQuantiles: number[]
    groundAreaMeters2: number
  }
}

export interface SolarData {
  solarPotential: {
    maxArrayPanelsCount: number
    panelCapacityWatts: number
    panelHeightMeters: number
    panelWidthMeters: number
    panelLifetimeYears: number
    maxArrayAreaMeters2: number
    maxSunshineHoursPerYear: number
    carbonOffsetFactorKgPerMwh: number
    wholeRoofStats: {
      areaMeters2: number
      sunshineQuantiles: number[]
      groundAreaMeters2: number
    }
    buildingStats: {
      areaMeters2: number
      sunshineQuantiles: number[]
      groundAreaMeters2: number
    }
    roofSegmentStats: RoofSegment[]
  }
  imageryDate: {
    year: number
    month: number
    day: number
  }
  imageryProcessedDate: {
    year: number
    month: number
    day: number
  }
  center: {
    latitude: number
    longitude: number
  }
}

export interface PriceRange {
  low: number
  mid: number
  high: number
}

export interface MaterialEstimate {
  name: string
  pricePerSqFt: { low: number; mid: number; high: number }
  estimate: PriceRange
}

export interface RoofEstimate {
  groundSqFt: number
  roofSqFt: number
  squares: number
  pitchDegrees: number
  pitchRatio: string
  estimate: PriceRange
  materialEstimates: MaterialEstimate[]
  address?: string
  imageryDate?: string
}

export interface LeadData {
  firstName: string
  lastName: string
  phone: string
  email: string
  address: string
  city?: string
  state?: string
  postalCode?: string
  tcpaConsent: boolean
  consentTimestamp: string
}

export interface GHLWebhookPayload {
  firstName: string
  lastName: string
  phone: string
  email: string
  address1: string
  city: string
  state: string
  postalCode: string
  source: string
  tags: string[]
  customField: {
    roof_square_feet: number
    ground_square_feet: number
    roof_squares: number
    roof_pitch: string
    roof_pitch_degrees: number
    imagery_date: string
    shingles_low: number
    shingles_mid: number
    shingles_high: number
    metal_low: number
    metal_mid: number
    metal_high: number
    synthetic_low: number
    synthetic_mid: number
    synthetic_high: number
    coatings_low: number
    coatings_mid: number
    coatings_high: number
    tcpa_consent: string
    consent_timestamp: string
    lead_score: number
  }
}

export interface GeocodeResult {
  lat: number
  lng: number
  formattedAddress: string
  city: string
  state: string
  postalCode: string
}
