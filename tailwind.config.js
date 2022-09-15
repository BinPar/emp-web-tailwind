const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0074a7',
        primaryvariant: '#196696',
        secondary: '#eedb4c',
        lightgray: '#f9f9f9',
        secondarygray: '#7a94a4'
      },
      screens: {
      },
      fontFamily: {
        'sans': ['Muli', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': ['0.6rem', {
          letterSpacing: '1.15',
        }],
      }
    },
  },
  plugins: [
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
