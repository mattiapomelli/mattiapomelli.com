const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        main: ['Nunito Sans', ...fontFamily.sans],
        secondary: ['Inter', ...fontFamily.sans],
      },
      fontSize: {
        '4.5xl': ['2.5rem', '2.5rem'],
      },
      colors: {
        'main-blue': '#086DFF',
        'main-light-blue': '#72CAF3',
        'light-blue-gray': '#EDF2F7',
        'main-black': '#343A40',
        'dark-gray': '#575757',
        'dark-blue-600': '#151f28',
        'dark-blue-800': '#0E141B',
      },
      gridTemplateColumns: {
        autofill: 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              // links color
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            'code::before': false, // hide backticks from inline code
            'code::after': false,
            'blockquote p:first-of-type::before': false, // remove quotation marks in blockquotes
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.600'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4,strong': {
              color: 'white',
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              // list dots color
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
