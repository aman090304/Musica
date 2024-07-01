/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "black",
          },
        },
      },
      animation: {
        typing: "typing 1.5s steps(15) infinite alternate, blink .5s infinite",
      },
      colors:{
        'gus': '#243c5a',
      }
    },
  },
  plugins: [],
};
