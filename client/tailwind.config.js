/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    screens: {
      xsm: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        blueColor: "#68D3FA",
        mainBlue: "#184DDF",
        almostWhite: "#FDFCFF",
        darkBlue: "#26416C",
        headerColor: '#008169',
        chatCardColor: "#A9C2E9",

        yellow: '#FFB031',
        formColor: '#F5DA40',

        lightAsh: "#DFE2EA",
        bgColor: '#DEE1E9',
      }
    },
  },
  plugins: [],
}
