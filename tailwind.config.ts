import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        candela: {
          cream:    "#FDFAF5",
          espresso: "#1A1410",
          tostado:  "#2C1810",
          canela:   "#5C3D2E",
          ambar:    "#C07A2B",
          pergamino:"#F5EDE0",
          avena:    "#E0D0BC",
          arcilla:  "#9B8575",
          lino:     "#F0E8D8",
          carbon:   "#18120E",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans:  ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(52px,8vw,96px)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero":    ["clamp(36px,5vw,60px)",  { lineHeight: "1.1",  letterSpacing: "-0.015em" }],
        "section": ["clamp(28px,3.5vw,44px)",{ lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        "warm-sm": "0 2px 12px rgba(44,24,16,0.07)",
        "warm-md": "0 4px 24px rgba(44,24,16,0.10)",
        "warm-lg": "0 8px 40px rgba(44,24,16,0.14)",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.25,0.46,0.45,0.94)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grain": {
          "0%,100%": { transform: "translate(0,0)" },
          "10%":     { transform: "translate(-2%,-3%)" },
          "30%":     { transform: "translate(2%,2%)" },
          "50%":     { transform: "translate(-1%,3%)" },
          "70%":     { transform: "translate(3%,-1%)" },
          "90%":     { transform: "translate(-2%,1%)" },
        },
      },
      animation: {
        "fade-up":   "fade-up 0.6s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "grain":     "grain 8s steps(10) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
