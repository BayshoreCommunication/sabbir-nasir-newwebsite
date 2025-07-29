import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baskervville: ["var(--font-baskervville)", "serif"],
        acumin: ["var(--font-acumin)", "sans-serif"],
        lumios: ["var(--font-lumios)", "cursive"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.2", fontWeight: "700" }], // Bold
        h2: ["36px", { lineHeight: "1.3", fontWeight: "600" }], // Semi-Bold
        h3: ["28px", { lineHeight: "1.3", fontWeight: "500" }], // Semi-Bold
        body: ["16px", { lineHeight: "1.75", fontWeight: "400" }], // Regular
        caption: ["14px", { lineHeight: "1.5", fontWeight: "400" }], // Regular
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      colors: {
        "deep-indigo": "#2C3E50",
        "charcoal-black": "#2E2E2E",
        "charcoal-black-60": "rgba(46, 46, 46, 0.6)",
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#B65D38", // primary-one
            secondary: "#7CA4A9", // primary-two
            background: "#D9CDBF", // secondary-one
            foreground: "#EBEAE8", // secondary-two
          },
        },
      },
    }),
  ],
};
export default config;
