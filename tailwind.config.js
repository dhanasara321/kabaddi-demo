/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Anton', 'system-ui', 'sans-serif'],
        heading: ['Oswald', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05070d',
          900: '#0a0e1a',
          800: '#0f1524',
          700: '#161e33',
          600: '#1f2a45',
        },
        flame: {
          400: '#ff7a3c',
          500: '#ff5a1f',
          600: '#e63a0c',
          700: '#b82a08',
        },
        ember: {
          500: '#ff2d2d',
          600: '#e01717',
        },
        electric: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      backgroundImage: {
        'flame-gradient': 'linear-gradient(135deg, #ff7a3c 0%, #ff2d2d 50%, #b82a08 100%)',
        'electric-gradient': 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
        'radial-flame': 'radial-gradient(circle at 50% 40%, rgba(255,90,31,0.35), transparent 60%)',
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow-flame': '0 0 24px rgba(255,90,31,0.45), 0 0 60px rgba(255,45,45,0.25)',
        'glow-electric': '0 0 24px rgba(56,189,248,0.45), 0 0 60px rgba(2,132,199,0.25)',
        'glow-ember': '0 0 30px rgba(224,23,23,0.5)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%) skewX(-12deg)' },
          '100%': { transform: 'translateX(220%) skewX(-12deg)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(255,45,45,0.6)' },
          '70%': { boxShadow: '0 0 0 12px rgba(255,45,45,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255,45,45,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        grainShift: {
          '0%,100%': { transform: 'translate(0,0)' },
          '25%': { transform: 'translate(-4%,2%)' },
          '50%': { transform: 'translate(3%,-3%)' },
          '75%': { transform: 'translate(-2%,4%)' },
        },
        beam: {
          '0%': { opacity: '0.15', transform: 'rotate(0deg) scaleY(1)' },
          '50%': { opacity: '0.4', transform: 'rotate(6deg) scaleY(1.1)' },
          '100%': { opacity: '0.15', transform: 'rotate(0deg) scaleY(1)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        sweep: 'sweep 8s ease-in-out infinite',
        pulseRing: 'pulseRing 2s ease-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        grainShift: 'grainShift 8s steps(4) infinite',
        beam: 'beam 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
