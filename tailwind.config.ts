import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "electric-black": "#0A0E1A",
        "electric-dark": "#0D1829",
        "electric-blue": {
          900: "#0F1F3D",
          800: "#1A2F5A",
          600: "#2563EB",
          400: "#3B82F6",
        },
        "electric-cyan": "#06B6D4",
        "electric-white": "#F8FAFC",
        "electric-glow": "#60A5FA",
        "warning-yellow": "#FCD34D",
        "success-green": "#10B981",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        "electric-gradient": "linear-gradient(135deg, #0F1F3D 0%, #0A0E1A 100%)",
        "blue-gradient": "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
        "glow-gradient": "radial-gradient(ellipse at center, rgba(37,99,235,0.3) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "electric-border": "electric-border 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "lightning": "lightning 0.3s ease-out forwards",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px #2563EB, 0 0 10px #2563EB" },
          "50%": { boxShadow: "0 0 20px #2563EB, 0 0 40px #06B6D4, 0 0 60px #60A5FA" },
        },
        "electric-border": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "lightning": {
          "0%": { opacity: "0", transform: "scaleY(0)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "scaleY(1)" },
        },
      },
      boxShadow: {
        "electric": "0 0 20px rgba(37, 99, 235, 0.5)",
        "electric-lg": "0 0 40px rgba(37, 99, 235, 0.6), 0 0 80px rgba(6, 182, 212, 0.3)",
        "glow-blue": "0 0 15px rgba(96, 165, 250, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
