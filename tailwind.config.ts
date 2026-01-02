import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cinzel-decorative)', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          1: '#F7E7A1',
          2: '#D6A84A',
          3: '#8B5A12',
        },
        text: {
          DEFAULT: '#F4EEFF',
          2: 'rgba(244, 238, 255, 0.78)',
          muted: 'rgba(244, 238, 255, 0.62)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
