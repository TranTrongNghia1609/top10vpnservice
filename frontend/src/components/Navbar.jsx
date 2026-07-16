import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      id="navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-navbar'
        : 'bg-white/80 backdrop-blur-sm'
        }`}
    >
      <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" id="nav-logo" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center shadow-md group-hover:bg-brand-light transition-colors duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 6V11C3 16 7 20.5 12 22C17 20.5 21 16 21 11V6L12 2Z" fill="white" opacity="0.9" />
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-brand text-lg leading-none block">VPNRank</span>
              <span className="text-xs text-gray-400 leading-none">2026 Edition</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#compare" id="nav-best-vpns" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">Best VPNs</a>
            <a href="#faq" id="nav-reviews" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">Reviews</a>
            <a href="#compare" id="nav-deals" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">Deals</a>
            <a
              href="#compare"
              id="nav-cta"
              className="btn-cta text-sm px-4 py-2"
            >
              🔥 Best Deals
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-text-primary rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-text-primary rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-text-primary rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-60 pb-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-2 pt-2 border-t border-border-soft">
            <a href="#compare" className="text-sm font-medium text-gray-600 hover:text-brand py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setMenuOpen(false)}>Best VPNs</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-brand py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#compare" className="text-sm font-medium text-gray-600 hover:text-brand py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setMenuOpen(false)}>Deals</a>
            <a href="#compare" className="btn-cta text-sm justify-center mt-1" onClick={() => setMenuOpen(false)}>🔥 Best Deals</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
