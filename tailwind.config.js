/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      // 🔤 FONTS
      fontFamily: {
        heading: ["Poppins", "Playfair Display", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },

        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        // 🎬 CINEMATIC SHINE
        shine: {
          "0%": {
            transform: "translateX(-120%) skewX(-20deg)",
            opacity: "0",
          },
          "30%": { opacity: "0.8" },
          "100%": {
            transform: "translateX(220%) skewX(-20deg)",
            opacity: "0",
          },
        },
      },

      animation: {
        // 🔥 ULTRA SMOOTH SLOW SCROLL
        "scroll-left": "scrollLeft 60s ease-in-out infinite",
        "scroll-right": "scrollRight 60s ease-in-out infinite",

        fadeInUp: "fadeInUp 1.2s ease-out forwards",

        // ✨ SHINE EFFECT
        shine: "shine 5s ease-in-out infinite",
      },

    },
  },
  plugins: [],
};