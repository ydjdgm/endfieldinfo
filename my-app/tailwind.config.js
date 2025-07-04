// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], // 👈 이 부분 확인
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};