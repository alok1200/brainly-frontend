/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust as per your project
  ],
  theme: {
    extend: {
      colors: {
        primary300: "#e0e7fe",
        primary500: "#5046e4",
        primary600: "#3e38a7",
      },
    },
  },
  plugins: [],
};
