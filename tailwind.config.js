const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        transparent: 'transparent',
        current: 'currentColor',
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        fuchsia: colors.fuchsia,
        slate: colors.slate,
        zinc: colors.zinc,
        'mindworks-85black': '#262626',
        'mindworks-85white': '#d9d9d9',
        'mindworks-gray': '#aaaaaa',
        'mindworks-black': '#171717',
        'mindworks-lightpink': '#D1AAD7',
        'mindworks-pink': '#C88BC4',
        'mindworks-purple': '#7B8FDD',
        'mindworks-skyblue': '#BBDEF2',
        'mindworks-blue': '#8CC3F2',
        
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
