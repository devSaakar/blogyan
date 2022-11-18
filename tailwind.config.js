/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}","./pages/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#98D8F8',
        secondary:'#B1AFFF',
      },
      translate:{
      '120':'120%',
      },
      rotate:{
        18:'18deg',
        24:'24deg',
        36:'36deg',
      }
    },
  },
  plugins: [],
}
