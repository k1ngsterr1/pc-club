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
        main: "#FF3366",
        light: "#FFCFD7",
        secondary: "#FFF5F8",
        dark: "#282828",
      },
    },
  },
  plugins: [],
};
