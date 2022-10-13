/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}","./pages/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#009AE7',
        secondary:'#FF0084',
      },
      translate:{
      '120':'120%',
      }
    },
  },
  plugins: [],
}
