/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': {
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #f0f, 0 0 82px #f0f, 0 0 92px #f0f, 0 0 102px #f0f, 0 0 151px #f0f',
          },
          '50%': {
            textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 18px #fff, 0 0 38px #f0f, 0 0 73px #f0f, 0 0 80px #f0f, 0 0 94px #f0f, 0 0 140px #f0f',
          },
        },
      },
    },
  },
  plugins: [],
} 