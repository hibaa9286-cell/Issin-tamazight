/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        amazigh: {
          gold: "#E5A93C",
          "gold-light": "#FCD34D",
          "gold-dark": "#B47C1B",
          blue: "#0077B6",
          "blue-dark": "#0B2545",
          "blue-glow": "#38BDF8",
          green: "#0D9488",
          "green-light": "#34D399",
          red: "#C62828",
          "red-accent": "#EF4444",
          sand: "#F5EBE0",
          darkBg: "#080C14",
          darkCard: "#111827",
          darkBorder: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        tifinagh: ['"Noto Sans Tifinagh"', 'sans-serif'],
        arabic: ['"Cairo"', '"Readex Pro"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'amazigh-gradient': 'linear-gradient(135deg, #0B2545 0%, #080C14 50%, #172554 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(229,169,60,0.15) 0%, rgba(0,0,0,0) 70%)',
        'blue-glow': 'radial-gradient(circle, rgba(0,119,182,0.2) 0%, rgba(0,0,0,0) 70%)',
        'glass-pattern': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'gold-glow': '0 0 25px rgba(229, 169, 60, 0.35)',
        'blue-glow': '0 0 25px rgba(0, 119, 182, 0.35)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
