/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Anton", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primaryGreen: "#00e3a5",
        primaryPurple: "#a282ff",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
