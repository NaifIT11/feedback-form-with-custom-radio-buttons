import { builtinModules } from "module";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--clr-primary-btn)",
        white: "var(--clr-white)",
        red: "var(--clr-red)",
        gray: "var(--clr-gray)",
        "blue-300": "var(--clr-blue-300)",
        "blue-600": "var(--clr-blue-600)",
        "blue-900": "var(--clr-blue-900)",
        "white-200": "var(--clr-white-200)",
        "white-400": "var(--clr-white-400)"
      },
    },
  },
  plugins: [],
};
export default config;
