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
      blur: {
        "4xl": "64px",
        "5xl": "96px",
      },
      screens: {
        "custom-740": "740px", // Screen for mobile-responsive nav
        "custom-420": "420px", // Screen for mobile-responsive keySpan
      },
    },
  },
  plugins: [],
} satisfies Config;
