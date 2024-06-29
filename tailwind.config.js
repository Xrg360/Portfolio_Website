/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primarybg: '#F4F9FC',
        textcolor: "#302861",
        aboutmebg: "#F7F8F9",
        greenaccent: "#57CC99",
        blue1: "#0077B6",
        blueaccent: "#00B4D8",
        redaccent: "#E1AFD1",
        myworkng: "#FFF7F7",
      },
    },
  },
  plugins: [],
};
