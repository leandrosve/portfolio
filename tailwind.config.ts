import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.75s ease-in-out forwards',
        fadeInFast: 'fadeIn .4s ease-in-out forwards',
        'content-show': 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);',
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        primary: {
          50: 'hsl(var(--color-primary-50) / <alpha-value>)',
          100: 'hsl(var(--color-primary-100) / <alpha-value>)',
          200: 'hsl(var(--color-primary-200) / <alpha-value>)',
          300: 'hsl(var(--color-primary-300) / <alpha-value>)',
          400: 'hsl(var(--color-primary-400) / <alpha-value>)',
          500: 'hsl(var(--color-primary-500) / <alpha-value>)',
          600: 'hsl(var(--color-primary-600) / <alpha-value>)',
          700: 'hsl(var(--color-primary-700) / <alpha-value>)',
          800: 'hsl(var(--color-primary-800) / <alpha-value>)',
          900: 'hsl(var(--color-primary-900) / <alpha-value>)',
          950: 'hsl(var(--color-primary-950) / <alpha-value>)',
        },
        content: {
          100: 'hsl(var(--color-content-100) / <alpha-value>)',
          200: 'hsl(var(--color-content-200) / <alpha-value>)',
          300: 'hsl(var(--color-content-300) / <alpha-value>)',
        },
        base: {
          100: 'hsl(var(--color-base-100) / <alpha-value>)',
          200: 'hsl(var(--color-base-200) / <alpha-value>)',
          300: 'hsl(var(--color-base-300) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
