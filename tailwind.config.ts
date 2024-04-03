import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1190px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      flex: {
        1: '0 0 100%',
        2: '0 0 50%',
        3: '0 0 33.333333%',
      },
    },
  },
};
export default config;
