/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1440': '1440px',
      },
      fontFamily: {
        HelveticaNeueBD: ['HelveticaNeueBD'],
        HelveticaNeueMD: ['HelveticaNeueMD'],
        HelveticaNeue: ['HelveticaNeue'],
      } 
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-3': {
          textShadow: '1.5px 1.5px 0px rgba(175, 175, 175, 1)',
        },
        '.text-shadow-2': {
          textShadow: '1px 1px 0px rgba(175, 175, 175, 1)',
        },
        '.text-shadow-1': {
          textShadow: '0.75px 0.75px 0px rgba(175, 175, 175, 1)',
        },
      });
    }, 
  ],
}