module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'crimson-red': '#CE4040',
      },
      backgroundImage: {
        'email-input': "url('~/src/assets/mail.svg')",
        'pw-input': "url('~/src/assets/lock.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
