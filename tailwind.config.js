/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1440: "1440px",
      },
      fontFamily: {
        HelveticaNeueBD: ["HelveticaNeueBD"],
        HelveticaNeueMD: ["HelveticaNeueMD"],
        HelveticaNeue: ["HelveticaNeue"],
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0,0,0,0.2)",
      },
      keyframes: {
        moveInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(50px)",
          },
          "80%": {
            transform: "translateX(-5px)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
      },
      animation: { moveInLeft: "moveInLeft 0.5s ease-out" },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-3": {
          textShadow: "1.5px 1.5px 0px rgba(175, 175, 175, 1)",
        },
        ".text-shadow-2": {
          textShadow: "1px 1px 0px rgba(175, 175, 175, 1)",
        },
        ".text-shadow-1": {
          textShadow: "0.75px 0.75px 0px rgba(175, 175, 175, 1)",
        },
      });
    },
  ],
};
