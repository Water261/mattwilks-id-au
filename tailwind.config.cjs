/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        webtheme: {
          "primary": "#5eead4",
          "secondary": "#38bdf8",
          "accent": "#1FB2A5",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
}
