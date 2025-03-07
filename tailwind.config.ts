import { animate } from "motion/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        infinite_scroll: {
          "100%": { transform: "translate(calc(-50% - 2.5rem))" },
        },
      },
      animation: {
        infinite_scroll: "infinite_scroll 20s linear infinite",
      },
      colors: {
        primary: "#22AD01",
        secondary: "#FAFAFA",
        black: "#21272A",
        yellow: "#FFAC33",
        lightgreen: "#84EC6B",
      },
    },
  },
  plugins: [],
} satisfies Config;
