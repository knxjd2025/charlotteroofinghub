'use client'

import { useState, useEffect } from 'react'
import CompanyCard from './CompanyCard'
import type { Company } from '@/types'

interface ShuffledCompanyGridProps {
  companies: Company[]
  shuffleCount?: number
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function ShuffledCompanyGrid({ companies, shuffleCount = 6 }: ShuffledCompanyGridProps) {
  const [displayCompanies, setDisplayCompanies] = useState(companies)

  useEffect(() => {
    // Shuffle the top N companies, keep the rest in original order
    const topCompanies = shuffleArray(companies.slice(0, shuffleCount))
    const restCompanies = companies.slice(shuffleCount)
    setDisplayCompanies([...topCompanies, ...restCompanies])
  }, [companies, shuffleCount])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayCompanies.map((company, index) => (
        <CompanyCard key={company.id} company={company} rank={index + 1} />
      ))}
    </div>
  )
}
