// Estimate export and sharing utilities

import { RoofEstimate, MaterialEstimate } from '@/types'
import { formatCurrency, formatNumber } from './calculations'

/**
 * Generate a plain text summary of the estimate for sharing/print.
 */
export function generateTextSummary(estimate: RoofEstimate): string {
  const lines: string[] = [
    '═══════════════════════════════════════════',
    '         CHARLOTTE ROOFING HUB',
    '         Instant Roof Estimate',
    '═══════════════════════════════════════════',
    '',
  ]

  if (estimate.address) {
    lines.push(`Property: ${estimate.address}`)
  }
  if (estimate.imageryDate) {
    lines.push(`Imagery Date: ${estimate.imageryDate}`)
  }

  lines.push('')
  lines.push('─── Roof Measurements ───')
  lines.push(`  Roof Area:    ${formatNumber(estimate.roofSqFt)} sq ft`)
  lines.push(`  Ground Area:  ${formatNumber(estimate.groundSqFt)} sq ft`)
  lines.push(`  Roof Pitch:   ${estimate.pitchRatio}`)
  lines.push(`  Squares:      ${estimate.squares}`)
  lines.push('')
  lines.push('─── Material Estimates ───')

  for (const material of estimate.materialEstimates) {
    lines.push(`  ${material.name}:`)
    lines.push(`    Low:  ${formatCurrency(material.estimate.low)}`)
    lines.push(`    Mid:  ${formatCurrency(material.estimate.mid)}`)
    lines.push(`    High: ${formatCurrency(material.estimate.high)}`)
    lines.push(`    (${formatCurrency(material.pricePerSqFt.low)}-${formatCurrency(material.pricePerSqFt.high)}/sq ft)`)
    lines.push('')
  }

  lines.push('─── Disclaimer ───')
  lines.push('This is an automated estimate based on satellite')
  lines.push('imagery. Final pricing may vary based on material')
  lines.push('selection, roof complexity, and local factors.')
  lines.push('')
  lines.push('CharlotteRoofingHub.com')

  return lines.join('\n')
}

/**
 * Encode estimate data as a URL-safe base64 string for sharing.
 */
export function encodeEstimateForShare(estimate: RoofEstimate): string {
  const minimal = {
    a: estimate.address || '',
    r: estimate.roofSqFt,
    g: estimate.groundSqFt,
    p: estimate.pitchRatio,
    s: estimate.squares,
    e: {
      l: estimate.estimate.low,
      m: estimate.estimate.mid,
      h: estimate.estimate.high,
    },
  }

  const json = JSON.stringify(minimal)
  if (typeof window !== 'undefined') {
    return btoa(json)
  }
  return Buffer.from(json).toString('base64')
}

/**
 * Decode a shared estimate string back into partial estimate data.
 */
export function decodeEstimateFromShare(encoded: string): {
  address: string
  roofSqFt: number
  groundSqFt: number
  pitchRatio: string
  squares: number
  estimate: { low: number; mid: number; high: number }
} | null {
  try {
    let json: string
    if (typeof window !== 'undefined') {
      json = atob(encoded)
    } else {
      json = Buffer.from(encoded, 'base64').toString('utf-8')
    }
    const data = JSON.parse(json)
    return {
      address: data.a || '',
      roofSqFt: data.r,
      groundSqFt: data.g,
      pitchRatio: data.p,
      squares: data.s,
      estimate: { low: data.e.l, mid: data.e.m, high: data.e.h },
    }
  } catch {
    return null
  }
}

/**
 * Calculate the savings of one material vs another.
 */
export function calculateMaterialSavings(
  material1: MaterialEstimate,
  material2: MaterialEstimate
): { lowSavings: number; midSavings: number; highSavings: number; percentSavings: number } {
  return {
    lowSavings: material2.estimate.low - material1.estimate.low,
    midSavings: material2.estimate.mid - material1.estimate.mid,
    highSavings: material2.estimate.high - material1.estimate.high,
    percentSavings: material2.estimate.mid > 0
      ? Math.round(((material2.estimate.mid - material1.estimate.mid) / material2.estimate.mid) * 100)
      : 0,
  }
}
