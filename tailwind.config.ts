import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1A2A44",
        royal: "#2B5FBF",
        silver: "#C0C9D6",
      },
    },
  },
  plugins: [],
} satisfies Config;
