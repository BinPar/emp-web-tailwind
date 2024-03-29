const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs1: '480px',
      xs: '520px',
      xs2: '580px',

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      lg2: '1120px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      xl1: '1400px',
      // => @media (min-width: 1400px) { ... }

      xl2: '1440px',
      // => @media (min-width: 1440px) { ... }
      xl3: '1660px',
      // => @media (min-width: 1660px) { ... }
      xl4: '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      
      content: {
        trianglesRight: ['url("/img/triangles-right.png")'],
        trianglesLeft: ['url("/img/triangles-top-left.png")'],
      },
      gap: {
        '10px': '10px',
      },
      width: {
        '10px': '10px',
      },
      height: {
        '10px': '10px',
      },
      margin: {
        '5px': '5.5px',
        '10px': '10px',
      },
      boxShadow: {
        up: '0 -1px 2px rgba(0,0,0,.1), 0 -2px 4px rgba(0,0,0,.1)',
        profile: '1px 2px 3px rgba(0,0,0,0.1), 2px 2px 6px rgba(0,0,0,0.1)',
        sp1: '0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)',
      },
      colors: {
        primary: '#0074a7',
        primarylight: '#f0f7fa',
        primaryvariant: '#196696',
        secondary: '#eedb4c',
        greencart: '#b0cd46',
        darkGreenCart: '#91ad2d',
        yellowmenu: '#eedb4c',
        lightgray: '#f9f9f9',
        lightmidlegray: '#d2d2d2',
        darkgray: '#828282',
        secondarygray: '#7a94a4',
        promirLight: '#5b9dc6',
        promirDark: '#196692',
        promirHeader: '#338fb9',
        promirGray: '#d5e0e7',
        whiteSmoke: '#fcfcfc',
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
        '2xs': ['0.6rem'],
        '2.5xs': [
          '0.7rem',
          {
            letterSpacing: '0.56',
          },
        ],

        '3xs': [
          '0.49rem',
          {
            letterSpacing: '1.15',
          },
        ],
        '3.5xs': [
          '0.5rem',
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
        '2lg': [
          '17.6px',
          {
            lineHeight: 'normal',
          },
        ],
        '2.5xl': [
          '1.8rem',
          {
            lineHeight: '33px',
          },
        ],
      },
    },
  },
  plugins: [
    require('tailwindcss-aria-attributes'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss'),
    require('autoprefixer'),
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
    plugin(function ({ addVariant, e }) {
      addVariant('grid-view', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => `.${e(`grid-view${separator}${className}`)}[data-grid="true"]`,
        );
      });
      addVariant('group-grid-view', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => `[data-grid="true"] .${e(`group-grid-view${separator}${className}`)}`,
        );
      });
      // addVariant('label-checked', "input[type='checkbox']:checked + label &");
      // addVariant('label-focus', "input[type='checkbox']:focus + label &");
    }),
  ],
};
