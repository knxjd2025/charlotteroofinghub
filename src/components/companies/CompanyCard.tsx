import { MapPin, CheckCircle, Building2, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import StarRating from '@/components/shared/StarRating'
import type { Company } from '@/types'

interface CompanyCardProps {
  company: Company
  rank?: number
}

export default function CompanyCard({ company, rank }: CompanyCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden card-hover border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo/Initial */}
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            {company.logoUrl ? (
              <img src={company.logoUrl} alt={company.name} className="w-12 h-12 object-contain" />
            ) : (
              <span className="text-xl font-bold text-primary">
                {company.name.charAt(0)}
              </span>
            )}
          </div>

          {/* Name and Rating */}
          <div className="flex-grow min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-lg text-gray-900 truncate">
                {rank && <span className="text-primary mr-1">#{rank}</span>}
                {company.name}
              </h3>
              {company.isVerified && (
                <span title="Verified">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                </span>
              )}
            </div>
            <StarRating
              rating={company.googleRating || 0}
              reviewCount={company.reviewCount ?? undefined}
              size="sm"
            />
          </div>
        </div>

        {/* Founder / Contributor indicator */}
        {company.isFounder && (
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Founder</span>
          </div>
        )}
        {company.isContributor && (
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Local Contributor</span>
          </div>
        )}

        {/* Location & BBB */}
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{company.city}, {company.state} {company.zipCode}</span>
          </div>
          {company.bbbRating && (
            <div className="flex items-center gap-1 text-xs font-medium" title={`BBB ${company.bbbAccredited ? 'Accredited' : 'Rated'} - ${company.bbbRating}`}>
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-blue-700">BBB {company.bbbRating}</span>
            </div>
          )}
        </div>

        {/* Services Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {company.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium capitalize"
            >
              {service}
            </span>
          ))}
          {company.services.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
              +{company.services.length - 3} more
            </span>
          )}
        </div>

        {/* Materials */}
        {company.materials.length > 0 && (
          <div className="mb-4">
            <span className="text-xs text-gray-500 block mb-1">Specializes in:</span>
            <div className="flex flex-wrap gap-1">
              {company.materials.slice(0, 4).map((material) => (
                <span
                  key={material}
                  className="px-2 py-0.5 bg-primary/5 text-primary rounded text-xs capitalize"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2 border-t border-gray-100">
          <Link
            href={`/companies/${company.slug}`}
            className="block w-full text-center py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-light hover:shadow-md hover:shadow-primary/20 transition-all duration-200 text-sm"
          >
            View Profile
          </Link>
        </div>
      </div>
    </article>
  )
}
