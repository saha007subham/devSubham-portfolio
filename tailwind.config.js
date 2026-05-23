/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          cyan: "#00D9FF",
          blue: "#3B82F6",
          violet: "#8B5CF6",
          dark: "#0F172A",
          light: "#F8FAFC",
        },
        brand: {
          bg: "#FAF9F6", // Alabaster/soft white
          card: "rgba(255, 255, 255, 0.45)",
          border: "rgba(255, 255, 255, 0.6)",
        }
      },
      fontFamily: {
        sans: ["Satoshi", "Inter", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      animation: {
        "float-slow": "float 10s ease-in-out infinite",
        "float-delayed": "floatDelayed 12s ease-in-out infinite",
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "grid-scroll": "gridScroll 24s linear infinite",
        "spin-slow": "spin 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        floatDelayed: {
          "0%, 100%": { transform: "translateY(-15px) rotate(2deg)" },
          "50%": { transform: "translateY(15px) rotate(-2deg)" },
        },
        gridScroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(40px)" },
        }
      },
      boxShadow: {
        "glass-sm": "0 2px 10px 0 rgba(31, 38, 135, 0.04)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.06)",
        "glass-lg": "0 12px 48px 0 rgba(31, 38, 135, 0.08)",
        "glow-cyan": "0 0 25px 0 rgba(0, 217, 255, 0.25)",
        "glow-blue": "0 0 25px 0 rgba(59, 130, 246, 0.2)",
        "glow-violet": "0 0 25px 0 rgba(139, 92, 246, 0.18)",
      },
      backdropBlur: {
        "glass": "16px",
        "glass-lg": "24px",
      }
    },
  },
  plugins: [],
}
