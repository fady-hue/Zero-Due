import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0F",
        surface: "#111118",
        card: "#16161F",
        border: "#1E1E2E",
        primary: {
          DEFAULT: "#6C5CE7",
          light: "#8B7FFF",
          dark: "#5A4BD1",
        },
        accent: {
          DEFAULT: "#00CEC9",
          light: "#00E5DF",
        },
        success: "#00B894",
        warning: "#FDCB6E",
        error: "#E17055",
        text: {
          primary: "#F0F0F5",
          secondary: "#8888A0",
          muted: "#4A4A5A",
        },
      },
      fontFamily: {
        sans: ["Inter", "Tajawal", "sans-serif"],
        arabic: ["Tajawal", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #6C5CE7, #00CEC9)",
        "gradient-purple": "linear-gradient(135deg, #6C5CE7, #a855f7)",
        "gradient-dark": "linear-gradient(180deg, #0A0A0F 0%, #111118 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(108,92,231,0.1), rgba(0,206,201,0.05))",
        "grid-pattern": "linear-gradient(rgba(108,92,231,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(108,92,231,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
