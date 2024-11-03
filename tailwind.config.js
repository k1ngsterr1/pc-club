/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#EBFF00",
        light: "#FFFFFF",
        secondary: "#300060",
        gray: "#FFFFFF66",
        dark: "#252525",
      },
    },
  },
  plugins: [],
};
