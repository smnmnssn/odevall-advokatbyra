import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sandLight: 'oklch(0.93 0.02 85)',
        sand: 'oklch(0.87 0.04 80)',
        clay: 'oklch(0.78 0.06 70)',
        terracotta: 'oklch(0.7 0.08 60)',
        stone: 'oklch(0.6 0.05 50)',
        brownShadow: 'oklch(0.48 0.04 45)',
      },
    },
  },
  plugins: [],
};

export default config;
