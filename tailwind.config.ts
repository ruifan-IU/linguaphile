import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'coffee',
      'aqua',
      'forest',
      'halloween',
      'lofi',
      'synthwave',
      'black',
      'cyberpunk',
      'retro',
      'valentine',
      'wireframe',
      'dracula',
    ],
  },
};
export default config;
