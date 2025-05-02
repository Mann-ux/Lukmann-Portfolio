/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        background: '#0F172A',
        primary: "#38bdf8",
        dark: "#eef2ff",
        secondary: "#4C6D8C",
        darklight: "#334155",
        accent: "#10B981",
        cta: "#1D4ED8",
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
