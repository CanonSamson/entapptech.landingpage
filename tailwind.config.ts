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
        "divider-300": "var(--divider300)",
        secondary: "var(--secondary)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero-bg': "url('/images/hero-image.png')",
        'stats-bg': "url('/images/stats-bg.png')",
        'stats-mbg': "url('/images/stats-bg-m.png')",
      },
      fontFamily: {
        openSans: "var(--font-openSans)",
        montserrat: "var(--font-montserrat)",
        inter: "var(-font-inter)"

      }
    },
  },
  plugins: [],
} satisfies Config;
