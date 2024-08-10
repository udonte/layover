/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "layover-blue": "#256FFF",
        "layover-gray-500": "#37454D",
        "layover-black": "#040707",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        montserratAlternates: ["Montserrat Alternates", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
