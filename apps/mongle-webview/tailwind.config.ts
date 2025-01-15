import { Config } from 'tailwindcss';
import baseConfig from '@mgmg/ui/tailwind';

const config: Config = {
  ...baseConfig,
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/ui/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;
