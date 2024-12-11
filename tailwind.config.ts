import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      mdlg: "1024px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        hero: "var(--font-hero)",
        eyebrow: "var(--font-eyebrow)",
      },
      colors: {
        dark: "#232A3C",
        medium: "#293245",
      },
      backgroundImage: {
        "diagonal-gradient":
          "linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2)",
      },
    },
  },
  plugins: [],
};
export default config;
