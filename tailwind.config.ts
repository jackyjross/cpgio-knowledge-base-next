import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Override gray scale to be inverted for dark theme
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#cbd5e1',  // Inverted for dark theme
          700: '#e2e8f0',  // Inverted for dark theme
          800: '#f1f5f9',  // Inverted for dark theme
          900: '#f8fafc',  // Inverted for dark theme
        },
        primary: {
          50: 'rgba(59, 130, 246, 0.05)',
          100: 'rgba(59, 130, 246, 0.1)',
          200: 'rgba(59, 130, 246, 0.2)',
          300: 'rgba(59, 130, 246, 0.3)',
          400: 'rgba(59, 130, 246, 0.4)',
          500: '#3b82f6',
          600: '#0066cc',
          700: '#0052a3',
        },
        accent: {
          blue: '#3b82f6',
          teal: '#14b8a6',
          orange: '#f97316',
          purple: '#a855f7',
        },
        cpg: {
          blue: "#0056b3",
          dark: "#0a192f",
          glass: "rgba(255, 255, 255, 0.05)",
        },
      },
      backgroundImage: {
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #0056b3 0deg, #a855f7 180deg, #0056b3 360deg)",
        "mesh": "radial-gradient(at 40% 20%, hsla(228,100%,74%,0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.1) 0px, transparent 50%)",
      },
      animation: {
        "blob": "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
