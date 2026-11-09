/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF7F0",
          100: "#D7ECDD",
          200: "#AFD8BC",
          300: "#7DBE92",
          400: "#4A9F66",
          500: "#2E8B47",
          600: "#1E7A34",
          700: "#17642B",
          800: "#124F23",
          900: "#0E3B1B",
          950: "#082612",
        },
        yolk: {
          100: "#FDF1D2",
          200: "#FBE3A6",
          300: "#F8D57A",
          400: "#F4C14B",
          500: "#F2B11B",
          600: "#D99410",
        },
        earth: {
          600: "#7A4A18",
          700: "#5A3720",
          800: "#4C2D12",
          900: "#3B2415",
          950: "#24160C",
        },
        cream: "#FAF6EE",
        sand: "#F2EADC",
        ink: "#1C1A17",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(28,26,23,0.04), 0 8px 24px -8px rgba(28,26,23,0.10)",
        lift: "0 2px 4px rgba(28,26,23,0.04), 0 24px 48px -16px rgba(28,26,23,0.22)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "pop-in": {
          from: { opacity: "0", transform: "scale(.96) translateY(8px)" },
          to: { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        "fade-in": "fade-in .25s ease-out both",
        "pop-in": "pop-in .35s cubic-bezier(.2,.8,.2,1) both",
      },
    },
  },
  plugins: [],
};
