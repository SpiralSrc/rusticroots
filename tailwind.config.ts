import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        //   "gradient-conic":
        //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-theme": "linear-gradient(-130deg, #814732d7, #5c2510)",
        "gradient-theme2": "linear-gradient(to bottom, #5c2d1cd7, #9e837a)",
      },
      fontFamily: {
        sacramento: ["var(--font-sacramento)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
