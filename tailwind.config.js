/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3f3cbb",
        "text-primary": "#3498db",
        "text-primary-hover": "#1d6fa5",
        "text-secondary": "#77838f",
        "block-color": "rgba(119,131,143,.1)",
        "label-second-color": "rgba(119,131,143,.1)",
        "label-text-second-color": "#77838f",
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio"],
};
