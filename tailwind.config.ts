import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        background: "#F1F0FB", // Soft Gray
        foreground: "#333333", // Dark Gray for text
        cosmic: {
          DEFAULT: "#6A5ACD", // Soft Indigo
          dark: "#F1F1F1", // Light Gray
          light: "#9179BD", // Soft Purple
          accent: "#33C3F0", // Sky Blue
        },
        sidebar: {
          DEFAULT: "#FFFFFF", // Pure White
          foreground: "#333333", // Dark Gray
          primary: "#6A5ACD", // Soft Indigo
          'primary-foreground': "#FFFFFF", // White
          accent: "#33C3F0", // Sky Blue
          border: "#E0E0E0", // Light Gray Border
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'pulse-star': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'pulse-star': 'pulse-star 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to right bottom, #2A2F3C, #43375F)', // Lighter gradient
        'star-field': 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', // Brighter stars
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
