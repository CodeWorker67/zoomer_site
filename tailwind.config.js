/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        zoomer: {
          neon: '#3cff7a',
          'neon-bright': '#8fffab',
          'neon-dim': '#12a85c',
          green: '#39ff6e',
          cyan: '#4ae8c4',
          dark: '#080b0e',
          'dark-alt': '#0a0e14',
          card: '#0f1419',
          border: 'rgba(57, 255, 120, 0.1)',
          muted: '#6b7280',
          'muted-soft': '#8a93a3',
        },
        accent: '#3cff7a',
        success: '#39ff6e',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'card': '28px',
        'btn': '14px',
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(57, 255, 120, 0.1), 0 24px 48px rgba(0, 0, 0, 0.5), 0 0 80px rgba(57, 255, 100, 0.05)',
        'neon': '0 4px 24px rgba(57, 255, 120, 0.32), 0 0 0 1px rgba(255, 255, 255, 0.14) inset',
        'neon-hover': '0 6px 32px rgba(57, 255, 120, 0.42), 0 0 0 1px rgba(255, 255, 255, 0.16) inset',
        'glow': '0 0 20px rgba(57, 255, 120, 0.3)',
        'glow-lg': '0 0 40px rgba(57, 255, 120, 0.6)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'bg-shimmer': 'bgShimmer 22s ease-in-out infinite',
        'title-shimmer': 'titleShimmer 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(57, 255, 120, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(57, 255, 120, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        bgShimmer: {
          '0%, 100%': { backgroundPosition: '0% 40%' },
          '35%': { backgroundPosition: '100% 55%' },
          '65%': { backgroundPosition: '85% 20%' },
        },
        titleShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
