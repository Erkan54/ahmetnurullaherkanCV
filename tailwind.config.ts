import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: "#F5F1E8",
          warm: "#F5F1E8",
          light: "#FBFAF7",
        },
        charcoal: {
          DEFAULT: "rgba(32, 32, 29, 0.9)",
          dark: "#18202A",
        },
        gold: {
          DEFAULT: "#9A8763",
          muted: "#A39170",
          warm: "#B6A27C",
        },
        border: {
          cream: "#DED8CC",
        },
        text: {
          main: "#171717",
          muted: "#625D55",
        },
      },
      maxWidth: {
        container: "1280px",
      },
      letterSpacing: {
        editorial: "-0.03em",
        tightest: "-0.04em",
        meta: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;
