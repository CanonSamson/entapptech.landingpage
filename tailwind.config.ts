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
        primary: "var(--primary)",
        divider: "var(--divider)",
        secondary: "var(--secondary)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
