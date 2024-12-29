import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderPrimary: "var(--primary-border-color)",
      },
      screens: {
        "custom-740": "740px", // Screen for mobile-responsive nav
        "custom-420": "420px", // Screen for mobile-responsive keySpan
        "custom-960": "960px", // NOTE: MIGHT ONLY BE USED IN PROJECTS PAGE TO MAKE GRID RESPONSIVE
        "custom-3840": "3840px", // Screen for bigger displays
      },
    },
  },
  plugins: [],
} satisfies Config;
