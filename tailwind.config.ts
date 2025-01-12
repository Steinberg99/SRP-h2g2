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
        darkPink: "#CC3351",
        darkestPurple: "#29203F",
        darkPurple: "#434370",
        purple: "#596C9B",
        lightPurple: "#617BAF",
        darkGreen: "#137570",
        green: "#178380",
        lightGreen: "#5FCCB9",
        paper: "#F6EEE3",
      },
      spacing: {
        "26": "104px",
        "105": "420px",
        "128": "32rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
