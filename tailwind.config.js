

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#1c1c1f',
        'tertiary': '#353538', // color hover, focus
        'textNav': "#fafaffeb", // color text navbar
        'icon': "#787880" //color icon navbar
      },
    },
    container: {
      center: true
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};