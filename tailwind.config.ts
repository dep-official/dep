import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '600px',
      // => Tablet in portrait, Foldable in Portrait (unfolded)
      md: '840px',
      // => Phone in landscape, Tablet in landscape, Foldable in landscape(unfolded), Desktop
      lg: '1200px',
      // => Desktop
      xl: '1600'
      // => Desktop, Ultra-wide
    },
    extend: {
      transitionTimingFunction: {
        'cubic-ease': 'cubic-bezier(.57,.27,.33,.91)',
      },
      backgroundImage: {

      },
      fontFamily: {
        montreal: ["var(--font-montreal)"],
        editorial: ["var(--font-editorial)"],
        lineseed: ["var(--font-lineseed)"],
      },
      colors: {
        gray : '#3a3a3a',
        'black-200' : '#222',
      },
      spacing: {
        base : '50px',
        'base-compact' : '16px',
      }
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      pageIn: {
        '0%': {transform: 'scaleX(0)' },
        '100%': {transform: 'scaleX(1)' },
      },
      pageInHome: {
        '0%' : {transform: 'translateX(-100%)'},
        '100%': {transform: 'translateX(0)'}
      },
      pageOut: {
        '0%': {scale: '0'},
        '100%': {scale: '1'},
      },
      scaleY: {
        '0%' : {transform: 'translateY(100%)'},
        '100%': {transform: 'translateY(0)'}
      }
    },
    animation: {
      fadeIn: 'fadeIn 2s cubic-bezier(.57,.27,.33,.91) forwards',
      pageIn: 'pageIn 500ms cubic-bezier(.57,.27,.33,.91) forwards',
      pageInHome : 'pageInHome 700ms cubic-bezier(.57,.27,.33,.91) forwards',
      pageOut: 'pageOut',
      scaleY : 'scaleY 500ms cubic-bezier(.57,.27,.33,.91) forwards'
    },
  },
  plugins: [],
};
export default config;
