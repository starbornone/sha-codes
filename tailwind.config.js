const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      "white": "#fff",
      "buttercream": {
        100: "#fdf7f2",
        200: "#f9ebdc",
        300: "#f5dec7",
        400: "#f1cfad",
        500: "#edc297",
        600: "#e19951",
        700: "#bb6e21",
        800: "#754515",
        900: "#2b1a08"
      },
      "grey": {
        100: "#f6f7f8",
        200: "#bac0c9",
        300: "#7e899a",
        400: "#4c5461",
        500: "#1d2025",
        600: "#1b1e22",
        700: "#191b1f",
        800: "#191b1f",
        900: "#16191d"
      },
      "greyish": {
        100: "#f7f7f8",
        200: "#ccd1d6",
        300: "#a2abb4",
        400: "#788591",
        500: "#57616b",
        600: "#474f57",
        700: "#373d44",
        800: "#272b30",
        900: "#171a1c"
      },
      "kobi": {
        50: "#ffffff",
        100: "#fcf3f6",
        200: "#f7dfe7",
        300: "#f1cad7",
        400: "#ebb2c5",
        500: "#e69eb6",
        600: "#d55d85",
        700: "#ae2d58",
        800: "#6d1c37",
        900: "#280b15"
      },
      "oasis": {
        100: "#f1fdfc",
        200: "#bbf6f0",
        300: "#85efe5",
        400: "#4fe8d9",
        500: "#1dddca",
        600: "#17b0a1",
        700: "#12877c",
        800: "#0c5a52",
        900: "#062d29"
      }
    },
    fontFamily: {
      mono: ["Overpass Mono", ...defaultTheme.fontFamily.mono],
      sans: ["Rubik", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      screens: {
        "xl": "1300px",
        "3xl": "1984px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}