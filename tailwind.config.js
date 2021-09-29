module.exports = {
  // mode: 'jit', // doesn't work yet cuz CRA doesn't work with PostCSS 8 yet (https://tailwindcss.com/docs/guides/create-react-app)
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
