import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: "#04251B",
          DEFAULT: "#063B2A",
          800: "#063B2A",
          700: "#0A4E38",
        },
        ingreen: {
          DEFAULT: "#0B6B4F",
          600: "#0B6B4F",
          500: "#108563",
          400: "#1BA37C",
          300: "#38C299",
          100: "#C4EEDB",
          50: "#E8F8F1",
        },
        mint: {
          DEFAULT: "#DDF5EA",
          light: "#F0FAF5",
          dark: "#B8EAD3",
        },
        warm: {
          DEFAULT: "#F8FAF7",
          50: "#FCFDFB",
          100: "#F8FAF7",
          200: "#EFF3EE",
          300: "#E3E9E1",
        },
        charcoal: {
          DEFAULT: "#17211D",
          light: "#24322D",
          dark: "#0F1613",
        },
        mutedText: "#6B7771",
        gold: {
          DEFAULT: "#D7A84B",
          light: "#E5BE6E",
          dark: "#B88A32",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(6, 59, 42, 0.05), 0 20px 40px -15px rgba(6, 59, 42, 0.07)",
        card: "0 4px 20px -2px rgba(6, 59, 42, 0.06), 0 2px 6px -1px rgba(6, 59, 42, 0.03)",
        glass: "0 8px 32px 0 rgba(6, 59, 42, 0.08)",
        floating: "0 20px 50px -10px rgba(6, 59, 42, 0.15), 0 10px 20px -5px rgba(6, 59, 42, 0.08)",
        glow: "0 0 35px rgba(11, 107, 79, 0.25)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
