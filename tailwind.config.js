/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#D1D1D1",
        theme: "#37B42F",
      },
      width: { basic: "50rem" },
      fontFamily: { sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans] },
    },
  },
  plugins: [],
};
