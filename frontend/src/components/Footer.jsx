export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-text-primary text-white">
      {/* Main Footer */}
      <div className="max-w mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 6V11C3 16 7 20.5 12 22C17 20.5 21 16 21 11V6L12 2Z" fill="white" opacity="0.9" />
                  <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-white text-lg leading-none block">VPNRank</span>
                <span className="text-xs text-gray-400 leading-none">2026 Edition</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Independent VPN reviews and rankings by a team of 10 cybersecurity experts.
              We test, compare, and rank the best VPNs so you can browse safely.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {['Expert Tested', 'Unbiased Reviews', 'Updated 2026'].map((badge) => (
                <span key={badge} className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Best VPNs 2026', href: '#compare' },
                { label: 'VPN Deals', href: '#compare' },
                { label: 'How We Test', href: '#faq' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Privacy Policy', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top VPNs */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Top VPNs</h4>
            <ul className="space-y-2">
              {['NordVPN', 'ExpressVPN', 'Surfshark', 'CyberGhost', 'ProtonVPN'].map((vpn) => (
                <li key={vpn}>
                  <a href="#compare" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {vpn} Review
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-500 leading-relaxed text-center">
            <strong className="text-gray-400">Affiliate Disclosure:</strong> VPNRank.com participates in affiliate programs.
            We may earn a commission when you click our links and make a purchase, at no extra cost to you.
            This does not influence our rankings — all reviews are based on independent testing.
            Prices and deals are subject to change. © {currentYear} VPNRank. All rights reserved.
          </p>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div id="sticky-mobile-cta" className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-white border-t border-border-soft shadow-lg px-4 py-3 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs text-gray-500">Best deal today:</div>
            <div className="text-sm font-bold text-text-primary">NordVPN – 77% OFF</div>
          </div>
          <a
            href="#compare"
            id="sticky-cta-btn"
            className="btn-cta text-sm py-2.5 px-5 flex-shrink-0"
          >
            🔥 Get Deal
          </a>
        </div>
      </div>
    </footer>
  )
}
