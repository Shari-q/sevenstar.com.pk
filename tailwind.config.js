/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F172A',
          dark: '#0B132B',
          charcoal: '#1E293B',
          slate: '#334155',
          card: '#FFFFFF',
          cardHover: '#FAFAFA',
          border: '#E2E8F0',
          borderDark: '#CBD5E1',
          gold: '#B89758',
          goldLight: '#DFBA73',
          goldDark: '#8F7138',
          accent: '#C53030', // Refined ruby accent
          accentHover: '#9B2C2C',
          cream: '#FAF7F2',
          surface: '#F8FAFC',
          lightBg: '#F1F5F9'
        }
      },
      fontFamily: {
        sans: ['"Albert Sans"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Albert Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFBA73 0%, #B89758 50%, #8F7138 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
        'luxury-hover': '0 25px 50px -12px rgba(184, 151, 88, 0.25)',
        'glow-gold': '0 0 25px rgba(184, 151, 88, 0.3)',
      }
    },
  },
  plugins: [],
};
