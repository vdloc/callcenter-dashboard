/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "delft-blue": "#2e384d",
        "light-slate-gray": "#8798ad",
        "cadet-blue": "#b0bac9",
        "link-water": "#E0E7FF",
        "lavender-web": "rgba(224, 231, 255, 0.2)",
        "blue-ribbon": "#2E5BFF",
      },
      dropShadow: {
        input: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
