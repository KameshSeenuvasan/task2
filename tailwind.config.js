/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {fontFamily: {
      righteous: ["Righteous", "serif"],
      saira: ["Saira", "sans-serif"],
      rowdies: ["Rowdies", "sans-serif"],
      inter: ["Inter", "serif"],
    },
    colors:{
     searchbarcolour: '#4f547b',
    }},
  },
  plugins: [],
}

