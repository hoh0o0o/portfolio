/** @type {import('tailwindcss').Config} */
const customColors = {
  main: {
    50: "#FBBB60",
    100: "#3558B6",
    DEFAULT: "#405745",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: customColors,
      fontFamily: {
        albert: ["Albert Sans", "sans-serif"],
        yuGothic: ["游ゴシックボールド", "sans-serif"],
      },
    },
  },
  plugins: [],
};
