function StarRating({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill={i < full ? '#F59E0B' : i === full && half ? 'url(#halfStar)' : '#E5E7EB'}
            stroke={i < full || (i === full && half) ? '#F59E0B' : '#D1D5DB'}
            strokeWidth="1"
          />
          {i === full && half && (
            <defs>
              <linearGradient id="halfStar">
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
          )}
        </svg>
      ))}
    </div>
  )
}

export default function TableRow({ vpn, rank, onReview }) {
  return (
    <>
      {/* ===== DESKTOP ROW (md+) ===== */}
      <div
        id={`vpn-row-${vpn.id}`}
        className={`hidden md:grid md:grid-cols-[60px_1fr_100px_90px_90px_120px_140px] items-center gap-4 px-5 py-4 border-b border-border-soft last:border-b-0 hover:bg-blue-50/40 transition-colors duration-200 relative group ${
          vpn.isBestChoice ? 'bg-blue-50/30' : 'bg-white'
        }`}
      >
        {/* Rank */}
        <div className="flex flex-col items-center">
          {vpn.isBestChoice ? (
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base">#{rank}</span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-300">#{rank}</span>
          )}
        </div>

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0"
            style={{ backgroundColor: vpn.logoColor }}
          >
            {vpn.logoFallback.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="font-semibold text-text-primary text-sm">{vpn.name}</div>
            <div className="text-xs text-gray-400 mt-0.5">{vpn.tagline}</div>
            <div className="flex items-center gap-1 mt-1">
              <StarRating rating={vpn.rating} />
              <span className="text-xs text-gray-400">({(vpn.reviews / 1000).toFixed(1)}k)</span>
            </div>
          </div>
        </div>

        {/* Score */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-brand">{vpn.score}</span>
          <div className="score-bar w-16 mt-1">
            <div className="score-bar-fill" style={{ width: `${(vpn.score / 10) * 100}%` }} />
          </div>
          <span className="text-xs text-gray-400 mt-0.5">/ 10</span>
        </div>

        {/* Speed */}
        <div className="text-center">
          <div className="font-semibold text-text-primary text-sm">{vpn.speed}</div>
          <div className="text-xs text-gray-400">Speed</div>
        </div>

        {/* Servers */}
        <div className="text-center">
          <div className="font-semibold text-text-primary text-sm">{vpn.servers}</div>
          <div className="text-xs text-gray-400">{vpn.countries} countries</div>
        </div>

        {/* Price */}
        <div className="text-center">
          <div className="font-bold text-text-primary text-base">{vpn.priceMonthly}<span className="text-xs text-gray-400 font-normal">/mo</span></div>
          <div className="text-xs text-gray-400 line-through">{vpn.originalPrice}</div>
          <span className="badge bg-accent/10 text-accent text-[10px] px-2 py-0.5 mt-0.5 font-bold">
            {vpn.discount}
          </span>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href={vpn.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`cta-visit-${vpn.id}`}
            className="btn-cta w-full text-xs py-2 px-3 justify-center"
          >
            Get Deal →
          </a>
          <button
            id={`cta-review-${vpn.id}`}
            onClick={() => onReview(vpn)}
            className="text-xs text-brand hover:text-brand-light font-medium transition-colors"
          >
            Read Review
          </button>
        </div>

        {/* Best Choice ribbon */}
        {vpn.isBestChoice && (
          <div className="absolute top-0 left-0 overflow-hidden w-20 h-20 pointer-events-none">
            <div className="absolute -top-1 -left-1 bg-accent text-white text-[9px] font-bold px-5 py-0.5 rotate-[-45deg] origin-bottom-right translate-y-4 -translate-x-2 shadow-sm">
              BEST
            </div>
          </div>
        )}
      </div>

      {/* ===== MOBILE CARD (< md) ===== */}
      <div
        id={`vpn-card-mobile-${vpn.id}`}
        className={`md:hidden card mx-0 mb-3 relative overflow-hidden ${
          vpn.isBestChoice ? 'border-brand border-2' : ''
        }`}
      >
        {vpn.isBestChoice && (
          <div className="bg-brand text-white text-xs font-bold px-4 py-1 text-center tracking-wide">
            🏆 #1 BEST CHOICE 2026
          </div>
        )}
        <div className="p-4">
          <div className="flex items-start gap-3 mb-4">
            {/* Logo */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0"
              style={{ backgroundColor: vpn.logoColor }}
            >
              {vpn.logoFallback.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-text-primary text-base">{vpn.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">{vpn.tagline}</p>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <span className="text-2xl font-bold text-brand">{vpn.score}</span>
                  <span className="text-xs text-gray-400 block">/ 10</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-1.5">
                <StarRating rating={vpn.rating} />
                <span className="text-xs text-gray-400">({(vpn.reviews / 1000).toFixed(1)}k reviews)</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-bg-secondary rounded-lg p-2.5 text-center">
              <div className="font-bold text-sm text-text-primary">{vpn.speed}</div>
              <div className="text-xs text-gray-400">Speed</div>
            </div>
            <div className="bg-bg-secondary rounded-lg p-2.5 text-center">
              <div className="font-bold text-sm text-text-primary">{vpn.servers}</div>
              <div className="text-xs text-gray-400">Servers</div>
            </div>
            <div className="bg-bg-secondary rounded-lg p-2.5 text-center">
              <div className="font-bold text-sm text-text-primary">{vpn.countries}</div>
              <div className="text-xs text-gray-400">Countries</div>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-text-primary">{vpn.priceMonthly}</span>
                <span className="text-xs text-gray-400">/mo</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-xs text-gray-400 line-through">{vpn.originalPrice}</span>
                <span className="badge bg-accent/10 text-accent text-[10px] px-2 py-0.5 font-bold">{vpn.discount}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 items-end">
              <a
                href={vpn.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`cta-mobile-visit-${vpn.id}`}
                className="btn-cta text-sm py-2 px-4"
              >
                Get Deal →
              </a>
              <button
                id={`cta-mobile-review-${vpn.id}`}
                onClick={() => onReview(vpn)}
                className="text-xs text-brand font-medium hover:text-brand-light transition-colors"
              >
                Read Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
