import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'cubic-ease': 'cubic-bezier(.57,.27,.33,.91)',
      },
      backgroundImage: {

      },
      fontFamily: {
        montreal: ["var(--font-montreal)"],
        editorial: ["var(--font-editorial)"],
      },
      colors: {
        gray : '#3a3a3a'
      },
      spacing: {
        base : '50px'
      }
    },
    keyframes: {

    },
    animation: {

    },
  },
  plugins: [],
};
export default config;
