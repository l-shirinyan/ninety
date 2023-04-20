const { Poppins } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'text-gradient': 'radial-gradient(var(126.39deg, #2AE7BC 4.16%, #09A6F0 45.29%, #9669FD 87.92%), #FFFFFF;))',
      },
      colors: {
        'primary': '#8E6DFD',
        'titles-gradient': `linear-gradient(126.39deg, #2AE7BC 4.16%, #09A6F0 45.29%, #9669FD 87.92%), #2AE7BC;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;`,
      },
    },
  },
  plugins: [],
}
