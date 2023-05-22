/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      padding: {
        fifty: "50px",
        Hun: "100px",
      },
      colors: {
        primary: "#FE0181",
        secondary: "#EDAA18",
        green: "#27BC48",
      },
      fontFamily: {
        Baller: ["Ballers_Delight", "cursive"],
      },
      lineHeight: {},
    },
  },
  plugins: [],
};
