import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Schwoop brand colors
        "midnight-indigo": "#1E1F4A",
        "matcha-green": "#86BA90",
        "orchid-purple": "#B57EDC",
        "warm-apricot": "#F9B87F",
        "powder-blue": "#A8D8EA",
        "mint-green": "#86BA90",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(181, 126, 220, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(181, 126, 220, 0.6)" },
        },
        "glow-green": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(134, 186, 144, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(134, 186, 144, 0.6)" },
        },
        "particle-float": {
          "0%": { transform: "translateY(0px) translateX(0px)", opacity: "0.3" },
          "33%": { transform: "translateY(-10px) translateX(5px)", opacity: "0.7" },
          "66%": { transform: "translateY(-5px) translateX(-3px)", opacity: "0.5" },
          "100%": { transform: "translateY(0px) translateX(0px)", opacity: "0.3" },
        },
        "button-pulse": {
          "0%, 90%, 100%": { transform: "scale(1)", opacity: "1" },
          "5%": { transform: "scale(1.05)", opacity: "0.9" },
          "10%": { transform: "scale(1)", opacity: "1" },
        },
        "header-bounce": {
          "0%, 90%, 100%": { transform: "translateY(0px)" },
          "5%": { transform: "translateY(-8px)" },
          "10%": { transform: "translateY(0px)" },
        },
        "input-shimmer": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "cursor-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "confetti-burst": {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "1" },
          "50%": { transform: "scale(1.2) rotate(180deg)", opacity: "0.8" },
          "100%": { transform: "scale(0.8) rotate(360deg)", opacity: "0" },
        },
        "confetti-fall": {
          "0%": { transform: "translateY(-20px) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100px) rotate(720deg)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 2s ease-in-out infinite",
        shimmer: "shimmer 2.6s ease-in-out infinite",
        "bounce-slow": "bounce 2s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "glow-green": "glow-green 3s ease-in-out infinite",
        "particle-float": "particle-float 4s ease-in-out infinite",
        "button-pulse": "button-pulse 7s ease-in-out infinite",
        "header-bounce": "header-bounce 10s ease-in-out infinite",
        "input-shimmer": "input-shimmer 2s ease-in-out infinite",
        "cursor-blink": "cursor-blink 1s ease-in-out infinite",
        "confetti-burst": "confetti-burst 1.5s ease-out forwards",
        "confetti-fall": "confetti-fall 2s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
