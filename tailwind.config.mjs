import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', '-apple-system', 'BlinkMacSystemFont', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        serif:   ['"Playfair Display"', 'Georgia', '"Source Han Serif SC"', '"Songti SC"', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        columbia: {
          navy:  '#0B2C56',
          blue:  '#5B9BD5',
          light: '#E8F3FC',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #061828 0%, #0B2C56 50%, #13436e 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  safelist: [
    // difficulty badge colours — used dynamically via JS object, must be safelisted
    'bg-emerald-500/70', 'border-emerald-300/30',
    'bg-sky-500/70',     'border-sky-300/30',
    'bg-violet-600/70',  'border-violet-300/30',
    'bg-emerald-500/80', 'border-emerald-300/40',
    'bg-sky-500/80',     'border-sky-300/40',
    'bg-violet-600/80',  'border-violet-300/40',
  ],
  plugins: [typography],
};
