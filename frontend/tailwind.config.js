/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary':   '#FFFFFF',
        'bg-secondary': '#F8FAFC',
        'text-primary': '#0F172A',
        'brand':        '#1E3A8A',
        'brand-light':  '#2563EB',
        'accent':       '#FF4500',
        'accent-hover': '#E03D00',
        'border-soft':  '#E2E8F0',
        'rating':       '#F59E0B',
        'success':      '#10B981',
        'danger':       '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero':    ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'section': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'card':    ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'body':    ['15px', { lineHeight: '1.5' }],
      },
      borderRadius: {
        'card': '12px',
        'btn':  '8px',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 25px -5px rgba(0,0,0,0.10), 0 4px 6px -2px rgba(0,0,0,0.05)',
        'navbar': '0 1px 3px 0 rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'shield-float': 'shieldFloat 3s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.35s cubic-bezier(0.32,0.72,0,1) forwards',
        'slide-out-right': 'slideOutRight 0.3s cubic-bezier(0.32,0.72,0,1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shieldFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideInRight: {
          '0%':   { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)',    opacity: '1' },
        },
        slideOutRight: {
          '0%':   { transform: 'translateX(0)',    opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
