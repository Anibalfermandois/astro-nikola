/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#072F47',
        'primary-light': '#0a3d5d',
        accent: '#FBC347',
        'accent-light': '#fad06f',
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              color: '#072F47',
            },
            a: {
              color: '#FBC347',
              '&:hover': {
                color: '#fad06f',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} 