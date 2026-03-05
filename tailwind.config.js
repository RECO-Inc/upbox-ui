import preset from './tailwind-preset.mjs'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  darkMode: ['class'],
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
}
