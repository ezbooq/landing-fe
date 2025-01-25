import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22AD01",
        secondary: "#FAFAFA",
        black: "#21272A",
        yellow: "#FFAC33",
        lightgreen: "#84EC6B"
      },
    },
  },
  plugins: [],
} satisfies Config;
