import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
        dark: {
          primary: "#181920",
          secondary: "#252a34",
          highlight: "#b5ddd8",
          primaryText: "#ffffff",
          secondaryText: "#A0A0A0",
          success: "#2ecc71",
          warning: "#f1c40f",
          error: "#e74c3c",
        },
        light: {
          primary: "#F9FAFB",
          secondary: "#FFFFFF",
          highlight: "#008080",
          primaryText: "#1F2937",
          secondaryText: "#6B7280",
          success: "#27ae60",
          warning: "#f39c12",
          error: "#c0392b",
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
