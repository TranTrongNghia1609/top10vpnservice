export default function Hero() {
  const stats = [
    { icon: '🔬', value: '50+', label: 'VPNs Tested' },
    { icon: '📅', value: 'July 2026', label: 'Last Updated' },
    { icon: '👨‍💻', value: '10', label: 'Security Experts' },
    { icon: '⭐', value: '4.8/5', label: 'Average Rating' },
  ]

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-brand/5 via-blue-50/30 to-bg-primary pt-16 pb-12 md:pt-24 md:pb-16">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow"></span>
              Updated July 2026 · Expert Tested
            </div>

            <h1 className="text-hero text-text-primary mb-5 text-balance leading-tight">
              Find the{' '}
              <span className="text-brand relative">
                Best VPN
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="#FF4500" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              for 2026
            </h1>

            <p className="text-body text-gray-500 mb-8 text-balance leading-relaxed text-base">
              We tested 50+ VPN services across speed, security, and streaming — so you don&apos;t have to.
              Get expert picks, real data, and exclusive deals updated for 2026.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['No-Logs Verified', 'Security Audited', 'Speed Tested', 'Streaming Verified'].map((tag) => (
                <span key={tag} className="text-xs font-medium text-gray-600 bg-white border border-border-soft px-3 py-1.5 rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#compare" id="hero-cta-primary" className="btn-cta text-base px-8 py-3">
                🔥 See Top 10 VPNs
              </a>
              <a href="#faq" id="hero-cta-secondary" className="btn-outline text-base px-8 py-3">
                How We Test →
              </a>
            </div>
          </div>

          {/* Right: Animated Shield */}
          <div className="hidden md:flex items-center justify-center animate-fade-in-up animation-delay-200">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-brand/20 rounded-full blur-3xl scale-110 animate-pulse-slow" />
              {/* Main shield SVG */}
              <div className="relative animate-shield-float">
                <svg width="260" height="300" viewBox="0 0 260 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Shield body */}
                  <path d="M130 10L20 55V140C20 205 70 265 130 285C190 265 240 205 240 140V55L130 10Z"
                    fill="url(#shieldGrad)" />
                  {/* Shield border */}
                  <path d="M130 20L30 62V140C30 200 75 256 130 274C185 256 230 200 230 140V62L130 20Z"
                    fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
                  {/* Checkmark */}
                  <path d="M90 148L115 173L170 118"
                    stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Inner glow overlay */}
                  <path d="M130 10L20 55V140C20 205 70 265 130 285C190 265 240 205 240 140V55L130 10Z"
                    fill="url(#shieldInner)" opacity="0.4" />
                  <defs>
                    <linearGradient id="shieldGrad" x1="130" y1="10" x2="130" y2="285" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#1E3A8A" />
                    </linearGradient>
                    <linearGradient id="shieldInner" x1="130" y1="10" x2="260" y2="285" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating badges */}
                <div className="absolute -right-8 top-8 bg-white rounded-xl shadow-card px-3 py-2 flex items-center gap-2 border border-border-soft">
                  <span className="text-rating text-lg">⭐</span>
                  <div>
                    <div className="text-xs font-bold text-text-primary">9.8/10</div>
                    <div className="text-xs text-gray-400">NordVPN</div>
                  </div>
                </div>
                <div className="absolute -left-10 bottom-16 bg-white rounded-xl shadow-card px-3 py-2 flex items-center gap-2 border border-border-soft">
                  <span className="text-lg">🛡️</span>
                  <div>
                    <div className="text-xs font-bold text-success">Verified Safe</div>
                    <div className="text-xs text-gray-400">No-logs policy</div>
                  </div>
                </div>
                <div className="absolute -right-4 bottom-8 bg-accent text-white rounded-xl shadow-lg px-3 py-2">
                  <div className="text-xs font-bold">-84% OFF</div>
                  <div className="text-xs opacity-90">Surfshark</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-in-up animation-delay-300">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-card border border-border-soft shadow-card p-4 text-center hover:shadow-card-hover transition-shadow duration-300">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="font-bold text-text-primary text-lg leading-tight">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
