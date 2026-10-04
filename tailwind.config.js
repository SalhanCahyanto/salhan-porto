/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#050508',
          neonBlue: '#00f0ff',
          neonPurple: '#b026ff',
          glass: 'rgba(20, 20, 30, 0.6)',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 10px #00f0ff, 0 0 20px rgba(0, 240, 255, 0.4)',
        'neon-purple': '0 0 10px #b026ff, 0 0 20px rgba(176, 38, 255, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to right bottom, rgba(0, 240, 255, 0.05), rgba(176, 38, 255, 0.05))',
      },
      keyframes: {
        scan: {
          '0%, 100%': { top: '0%' },
          '50%': { top: '100%' },
        }
      },
      animation: {
        scan: 'scan 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
