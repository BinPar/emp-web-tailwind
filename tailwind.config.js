const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0074a7',
        primaryvariant: '#196696',
        secondary: '#eedb4c',
        greencart: '#b1d141',
        yellowmenu: '#eedb4c',
        lightgray: '#f9f9f9',
        lightmidlegray: '#d2d2d2',
        darkgray: '#828282',
        secondarygray: '#7a94a4',
      },
      backgroundImage: {
        slide: "url('/img/home.jpeg')",
      },
      screens: {},
      fontFamily: {
        sans: ['Muli', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '1xs': [
          '0.815rem',
          {
            letterSpacing: '1.15px',
          },
        ],
        '2xs': [
          '0.6rem',
          {
            letterSpacing: '1.15',
          },
        ],
        '3xs': [
          '0.49rem',
          {
            letterSpacing: '1.15',
          },
        ],
        '2sm': [
          '0.95rem',
          {
            lineHeight: '1.1rem',
            letterSpacing: '1.5px',
          },
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addVariant }) {
      addVariant('current', "[aria-current='true']&");
    }),
    plugin(function ({ addVariant }) {
      addVariant('pressed', "[aria-pressed='true']&");
    }),
    plugin(function ({ addVariant }) {
      addVariant('aria-selected', "[aria-selected='true']&");
    }),
    plugin(function ({ addVariant }) {
      addVariant('label-checked', "input[type='checkbox']:checked + label &");
    }),
    plugin(function ({ addVariant }) {
      addVariant('label-focus', "input[type='checkbox']:focus + label &");
    }),
  ],
};
