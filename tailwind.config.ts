import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const ElementRotationClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/client/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/server/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F7FAFC",
          dark: "#121A21",
        },
        secondary: {
          light: "#4F7396",
          dark: "#94ADC7",
        },
        button: {
          light: "#E8EDF2",
          dark: "#243647",
        },
        text: {
          light: "#0D141C",
          dark: "#FFFFFF",
        },
        "text-secondary": {
          light: "#4F7396",
          dark: "#94ADC7",
        },
      },
    },
  },
  plugins: [ElementRotationClass],
};
export default config;
