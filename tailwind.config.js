/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blissam: {
          black: '#0B0B0B',
          dark: '#111111',
          surface: '#151515',
          card: '#181818',
          stone: '#E8E6E1',
          stoneDark: '#201F1D',
          white: '#F3F3F0',
          muted: '#7B7B78',
          border: '#222222',
          borderLight: '#333333',
          accent: '#FFFFFF',
          accentRed: '#E63946',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultra-tight': '-0.06em',
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'widest-editorial': '0.25em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
