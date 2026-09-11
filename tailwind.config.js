/** @type {import('tailwindcss').Config} */

// Workshop design tokens. The palette is committed to a single warm light
// look, so there is no dark variant and no `darkMode` strategy here.
const ink = '#1A1713';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bricolage Grotesque', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Bricolage Grotesque', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        cream:  '#F4EEE1',
        sheet:  '#FFFBF3',
        ink,
        soft:   '#58514A',
        faint:  '#8E867C',
        rule:   '#E4DCCC',
        clay:   '#C4562F',
        olive:  '#667544',
        butter: '#F0C23F',
        sky:    '#9FC0CE',
        lilac:  '#C3B3DA',
        blush:  '#EDB5A5',
      },
      // Flat offset shadows only. No blur, no spread, no colour bleed.
      boxShadow: {
        drop:   `5px 5px 0 ${ink}`,
        'drop-sm': `3px 3px 0 ${ink}`,
        'drop-xs': `1px 1px 0 ${ink}`,
        none: 'none',
      },
      borderRadius: {
        none: '0',
        DEFAULT: '2px',
      },
      keyframes: {
        slide: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 42s linear infinite',
      },
    },
  },
  plugins: [],
};
