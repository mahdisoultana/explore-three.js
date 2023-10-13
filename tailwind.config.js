/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Tektur: ['Tektur', 'sans-serif'],
        Kalam: ['Kalam', 'cursive'],

        Cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
