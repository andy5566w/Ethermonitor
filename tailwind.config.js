/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3f3cbb",
        "text-primary": "#3498db",
        "text-secondary": "#77838f",
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio"],
};
