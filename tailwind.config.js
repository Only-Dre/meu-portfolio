/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0f0',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',  // Main Color
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',   
          900: '#000000',    
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'dynamic-hero': 'clamp(3rem, 8vw, 6rem)',
        'dynamic-lg': 'clamp(2rem, 5vw, 3.5rem)',
        'dynamic-md': 'clamp(1.5rem, 4vw, 2.5rem)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-salmão': 'pulse-salmão 2s ease-in-out infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
        'text-glow': 'text-glow 2s ease-in-out infinite alternate',
        'orbit': 'orbit 20s linear infinite',
        'particle-float': 'particle-float 6s ease-in-out infinite',
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        'pulse-salmão': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(244, 63, 94, 0.4)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 60px rgba(244, 63, 94, 0.8), 0 0 100px rgba(244, 63, 94, 0.4)',
            transform: 'scale(1.05)'
          },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(200%) rotate(45deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'text-glow': {
          '0%': { 
            textShadow: '0 0 10px rgba(244, 63, 94, 0.5), 0 0 20px rgba(244, 63, 94, 0.3)'
          },
          '100%': { 
            textShadow: '0 0 20px rgba(244, 63, 94, 0.8), 0 0 40px rgba(244, 63, 94, 0.6), 0 0 60px rgba(244, 63, 94, 0.4)'
          },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-15px) translateX(10px)' },
          '66%': { transform: 'translateY(5px) translateX(-5px)' },
        },
        'neon-glow': {
          '0%': { 
            filter: 'drop-shadow(0 0 5px rgba(244, 63, 94, 0.7))',
            opacity: '0.8'
          },
          '100%': { 
            filter: 'drop-shadow(0 0 20px rgba(244, 63, 94, 1))',
            opacity: '1'
          },
        }
      },
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
      },
      backdropBlur: {
        'xs': '2px',
        'lg': '40px',
      },
      boxShadow: {
        'salmão-glow': '0 0 50px rgba(244, 63, 94, 0.3)',
        'salmão-glow-lg': '0 0 100px rgba(244, 63, 94, 0.5)',
        'neon': '0 0 10px rgba(244, 63, 94, 0.8), 0 0 20px rgba(244, 63, 94, 0.6)',
      }
    },
  },
  plugins: [],
}
