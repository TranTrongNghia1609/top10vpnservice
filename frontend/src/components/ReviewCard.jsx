import { useEffect, useState } from 'react'

export default function ReviewCard({ vpn, onClose }) {
  const [closing, setClosing] = useState(false)

  // Trigger slide-out animation before unmounting
  const handleClose = () => {
    setClosing(true)
    setTimeout(onClose, 280)
  }

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = 'unset'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!vpn) return null

  return (
    <div
      id="review-drawer-overlay"
      className={`fixed inset-0 z-50 flex justify-end transition-colors duration-300 ${closing ? 'bg-black/0' : 'bg-black/50 backdrop-blur-sm'}`}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      {/* Drawer Panel */}
      <div
        id="review-drawer"
        className={`relative bg-white h-full w-full max-w-md shadow-2xl flex flex-col overflow-hidden
          ${closing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}
      >
        {/* Header */}
        <div className="flex-shrink-0 border-b border-border-soft px-5 py-4 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow"
              style={{ backgroundColor: vpn.logoColor }}
            >
              {vpn.logoFallback.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h2 className="font-bold text-text-primary text-lg leading-tight">{vpn.name} Review 2026</h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-xl font-bold text-brand">{vpn.score}</span>
                <span className="text-xs text-gray-400">/ 10 Overall Score</span>
              </div>
            </div>
          </div>
          <button
            id="drawer-close-btn"
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-text-primary transition-colors flex-shrink-0"
            aria-label="Close review"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
          {/* Tagline */}
          <p className="text-gray-500 text-sm italic border-l-2 border-accent pl-3">&quot;{vpn.tagline}&quot;</p>

          {/* ── Category Ratings ── */}
          {vpn.categoryRatings && (
            <div className="bg-bg-secondary rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-text-primary text-base">Overall Rating: {vpn.score}/10</h3>
                <span className="text-[10px] text-gray-400 bg-white border border-border-soft rounded-full px-2 py-0.5">
                  Last Tested: {vpn.lastTested}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {vpn.categoryRatings.map((cat) => (
                  <div key={cat.label} className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-text-primary w-36 flex-shrink-0">{cat.label}</span>
                    <div className="flex-1 h-2 bg-white rounded-full overflow-hidden border border-border-soft">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${(cat.score / 10) * 100}%`,
                          background: cat.score >= 9 ? '#1E3A8A' : cat.score >= 8 ? '#2563EB' : '#60A5FA',
                        }}
                      />
                    </div>
                    <span className="text-xs font-bold text-brand w-10 text-right flex-shrink-0">{cat.score}/10</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-3">
                To learn more, read our{' '}
                <a href="#faq" className="text-brand hover:underline" onClick={() => { }}>VPN testing methodology</a>.
              </p>
            </div>
          )}

          {/* Pros & Cons */}
          <div className="space-y-3">
            <div className="bg-success/5 border border-success/20 rounded-xl p-4">
              <h3 className="font-bold text-success text-base mb-2.5 flex items-center gap-1.5">
                <span>✅</span> Pros
              </h3>
              <ul className="space-y-1.5">
                {vpn.pros.map((pro, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                    <span className="text-success mt-0.5 flex-shrink-0 font-bold">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-danger/5 border border-danger/20 rounded-xl p-4">
              <h3 className="font-bold text-danger text-base mb-2.5 flex items-center gap-1.5">
                <span>❌</span> Cons
              </h3>
              <ul className="space-y-1.5">
                {vpn.cons.map((con, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                    <span className="text-danger mt-0.5 flex-shrink-0 font-bold">−</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-semibold text-text-primary text-base mb-2.5">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              {vpn.features.map((feature) => (
                <span key={feature} className="badge bg-brand/10 text-brand text-xs px-3 py-1 font-medium rounded-full">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* ── Pricing Plans & Details Table ── */}
          {vpn.details && (
            <div>
              <h3 className="font-semibold text-text-primary text-base mb-2.5">Plans & Details</h3>
              <div className="rounded-xl overflow-hidden border border-border-soft divide-y divide-border-soft text-xs">
                {/* Pricing Plans */}
                <div className="flex bg-bg-secondary">
                  <span className="font-semibold text-text-primary w-36 flex-shrink-0 px-3 py-3">Pricing Plans</span>
                  <div className="px-3 py-3 flex flex-col gap-0.5">
                    {vpn.details.pricingPlans.map((p, i) => (
                      <span key={i} className={`${i > 0 ? 'line-through text-gray-400' : 'text-text-primary font-medium'}`}>{p}</span>
                    ))}
                  </div>
                </div>
                {/* Money-Back */}
                <div className="flex bg-white">
                  <span className="font-semibold text-text-primary w-36 flex-shrink-0 px-3 py-2.5">Money-Back</span>
                  <span className="px-3 py-2.5 text-gray-600">{vpn.moneyBack} guarantee</span>
                </div>
                {/* Countries */}
                <div className="flex bg-bg-secondary">
                  <span className="font-semibold text-text-primary w-36 flex-shrink-0 px-3 py-2.5">Countries</span>
                  <span className="px-3 py-2.5 text-gray-600">{vpn.countries}</span>
                </div>
                {/* Servers */}
                <div className="flex bg-white">
                  <span className="font-semibold text-text-primary w-36 flex-shrink-0 px-3 py-2.5">Servers</span>
                  <span className="px-3 py-2.5 text-gray-600">{vpn.servers}</span>
                </div>
                {/* Logging Policy */}
                <div className="flex bg-bg-secondary">
                  <span className="font-semibold text-text-primary w-36 flex-shrink-0 px-3 py-2.5">Logging Policy</span>
                  <span className="px-3 py-2.5 text-gray-600">{vpn.details.loggingPolicy}</span>
                </div>
                {/* Jurisdiction */}
                <div className="flex bg-white">
                  <span className="font-semibold text-text-primary w-36 flex-shrink-0 px-3 py-2.5">Jurisdiction</span>
                  <span className="px-3 py-2.5 text-gray-600">{vpn.details.jurisdiction}</span>
                </div>
                {/* Owner */}
                <div className="flex bg-bg-secondary">
                  <span className="font-semibold text-text-primary w-36 flex-shrink-0 px-3 py-2.5">Owner</span>
                  <span className="px-3 py-2.5 text-gray-600">{vpn.details.owner}</span>
                </div>
                {/* Support */}
                <div className="flex bg-white">
                  <span className="font-semibold text-text-primary w-36 flex-shrink-0 px-3 py-2.5">Support</span>
                  <span className="px-3 py-2.5 text-gray-600">{vpn.details.support}</span>
                </div>
                {/* Simultaneous Connections */}
                <div className="flex bg-bg-secondary">
                  <span className="font-semibold text-text-primary w-36 flex-shrink-0 px-3 py-2.5">Connections</span>
                  <span className="px-3 py-2.5 text-gray-600">
                    {vpn.simultaneousConnections === 999 ? 'Unlimited' : vpn.simultaneousConnections}
                  </span>
                </div>
                {/* Compatible With */}
                <div className="flex bg-white items-center">
                  <span className="font-semibold text-text-primary w-36 flex-shrink-0 px-3 py-3">Compatible with</span>
                  <div className="px-3 py-2 flex flex-wrap gap-3">
                    {vpn.details.platforms.map((platform) => {
                      const svgMap = {
                        Windows: '/icons/windows.svg',
                        Mac:     '/icons/mac.svg',
                        iOS:     '/icons/ios.svg',
                        Android: '/icons/android.svg',
                        Linux:   '/icons/linux.svg',
                      }
                      const src = svgMap[platform]
                      return (
                        <div key={platform} className="flex flex-col items-center gap-1">
                          {src ? (
                            <img
                              src={src}
                              alt={platform}
                              width={28}
                              height={28}
                              className="object-contain"
                            />
                          ) : (
                            <span className="text-xl">💻</span>
                          )}
                          <span className="text-[10px] text-gray-400">{platform}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer CTA */}
        <div className="flex-shrink-0 border-t border-border-soft bg-white px-5 py-4 space-y-3">
          <a
            href={vpn.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`drawer-cta-${vpn.id}`}
            className="btn-cta w-full justify-center py-3 text-base"
          >
            🔥 Get {vpn.name} – {vpn.discount}
          </a>
          <p className="text-xs text-gray-400 text-center">
            {vpn.moneyBack} money-back guarantee · No questions asked
          </p>
        </div>
      </div>
    </div>
  )
}
