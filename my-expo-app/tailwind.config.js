/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}','src/screens/**/*.{js,ts,tsx,jsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors:{
        primary:"#427AA1",
        secondary:"#D9E3EA",
        accent:"#F4A261",
      }
    },
  },
  plugins: [],
};


