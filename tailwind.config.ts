
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
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(0 0% 20%)', // Lighter border
        input: 'hsl(0 0% 20%)', // Lighter input
        ring: 'hsl(240 3.7% 25%)', // Lighter ring
        background: 'hsl(240 10% 10%)', // Lighter background
        foreground: 'hsl(0 0% 98%)', // Light text
        primary: {
          DEFAULT: 'hsl(240 5.9% 90%)', // Light primary
          foreground: 'hsl(240 10% 3.9%)' // Dark primary text
        },
        secondary: {
          DEFAULT: 'hsl(240 3.7% 25%)', // Lighter secondary
          foreground: 'hsl(0 0% 98%)' // Light secondary text
        },
        destructive: {
          DEFAULT: 'hsl(0 62.8% 40.6%)', // Lighter red for destructive actions
          foreground: 'hsl(0 0% 98%)'
        },
        muted: {
          DEFAULT: 'hsl(240 3.7% 25%)', // Lighter muted
          foreground: 'hsl(240 5% 70%)' // Lighter muted text
        },
        accent: {
          DEFAULT: 'hsl(240 3.7% 25%)', // Lighter accent
          foreground: 'hsl(0 0% 98%)' // Light accent text
        },
        popover: {
          DEFAULT: 'hsl(240 10% 10%)', // Lighter popover
          foreground: 'hsl(0 0% 98%)' // Light popover text
        },
        card: {
          DEFAULT: 'hsl(240 10% 10%)', // Lighter card
          foreground: 'hsl(0 0% 98%)' // Light card text
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        cosmic: {
          DEFAULT: '#9179BD', // Lighter cosmic
          dark: '#2A2F3C', // Lighter cosmic dark
          light: '#E2D6FF', // Lighter cosmic light
          accent: '#aa97ff', // Lighter cosmic accent
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
