import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#7dd3fc',

          secondary: '#fda4af',

          accent: '#752bff',

          neutral: '#120400',

          'base-100': '#f1f5ed',

          info: '#1e40af',

          success: '#10b981',

          warning: '#fde047',

          error: '#ef4444',
        },
      },
    ],
  },
};
export default config;
