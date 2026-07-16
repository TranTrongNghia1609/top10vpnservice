import FilterBar from './FilterBar'
import TableRow from './TableRow'
import { useFilter } from '../hooks/useFilter'

export default function CompareTable({ onReview }) {
  const { activeFilter, setActiveFilter, filteredVpns, filters } = useFilter()

  return (
    <section id="compare" className="py-16 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="badge bg-accent/10 text-accent mb-3 text-xs font-bold px-3 py-1">
              🏆 EXPERT RANKED 2026
            </div>
            <h2 className="section-heading">
              Top 10 VPN Services Compared
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Ranked by overall score across speed, security, features & value.
            </p>
          </div>
          <FilterBar
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block card overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-[60px_1fr_100px_90px_90px_120px_140px] gap-4 px-5 py-3 bg-bg-secondary border-b border-border-soft">
            {['Rank', 'VPN Provider', 'Score', 'Speed', 'Servers', 'Price/mo', 'Action'].map((h) => (
              <div key={h} className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center first:text-left">
                {h}
              </div>
            ))}
          </div>

          {/* Rows */}
          <div>
            {filteredVpns.length > 0 ? (
              filteredVpns.map((vpn, index) => (
                <TableRow
                  key={vpn.id}
                  vpn={vpn}
                  rank={index + 1}
                  onReview={onReview}
                />
              ))
            ) : (
              <div className="py-12 text-center text-gray-400">
                <div className="text-4xl mb-3">🔍</div>
                <p className="font-medium">No VPNs found for this category.</p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          {filteredVpns.length > 0 ? (
            filteredVpns.map((vpn, index) => (
              <TableRow
                key={vpn.id}
                vpn={vpn}
                rank={index + 1}
                onReview={onReview}
              />
            ))
          ) : (
            <div className="py-12 text-center text-gray-400">
              <div className="text-4xl mb-3">🔍</div>
              <p className="font-medium">No VPNs found for this category.</p>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          ⚠️ Prices shown are promotional rates for new subscribers. Always verify current pricing on the provider&apos;s website.
          We may earn a commission from affiliate links at no extra cost to you.
        </p>
      </div>
    </section>
  )
}
