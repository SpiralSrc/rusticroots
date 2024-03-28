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
        "hero-img": "url('/assets/salon5.jpg')",
        "outside-img": "url('/assets/outside.jpg')",
        "gradient-theme": "linear-gradient(-130deg, #814732d7, #5c2510)",
        "gradient-theme2": "linear-gradient(to bottom, #5c2d1cd7, #9e837a)",
        "gradient-theme3": "linear-gradient(-130deg, #814732, #5c2510)",
      },
      fontFamily: {
        sacramento: ["var(--font-sacramento)"],
        inter: ["var(--font-inter)"],
      },
      boxShadow: {
        "inset-shadow": "inset 0 -3em 3em rgb(0 200 0 / 30%)",
      },
    },
    screens: {
      xxs: "380px",
      xs: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
