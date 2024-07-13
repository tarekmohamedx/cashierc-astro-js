/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "375px",
      // => @media (min-width: 375px)
      sm: "640px",
      // => @media (min-width: 640px)
      md: "768px",
      // => @media (min-width: 768px)
      lg: "1024px",
      // => @media (min-width: 1024px)
      xl: "1280px",
      // => @media (min-width: 1280px)
      "2xl": "1536px",
      // => @media (min-width: 1536px)
      "3xl": "1920px",
      // => @media (min-width: 1920px)
    },
    extend: {
      colors: {
        primary: "#F59E0B",
        secondary: "#D97706",
        foreground: "#0F172A",
        typography: "#475569",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    flex: {
      33: "0 0 calc(100%/3 - 1.5rem)",
    },
  },
  plugins: [],
};
