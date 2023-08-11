/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      begron: '#EEEEEE',
      primer: '#3DA9FC',
      second: '#094067',
      birumuda: '#7ABEEE',
      birumuda2: '#90B4CE',
      dark: '#5F6C7B',
      text: '#3B3B3B',
      white: '#FFFFFE',
    },
  },
  plugins: [require('daisyui')],
};
