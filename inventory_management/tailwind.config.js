/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [
    "bg-brand-green-1000",
    "bg-brand-red-1000",
    "bg-brand-yellow-1000",
    "bg-brand-green-1002",
    "bg-brand-green-1001",
    "bg-brand-yellow-1001",
    "bg-brand-purple-1000",
    "hover:bg-brand-green-1000",
    "hover:bg-brand-red-1000",
    "hover:bg-brand-yellow-1000",
    "hover:bg-brand-green-1002",
    "hover:bg-brand-green-1001",
    "hover:bg-brand-yellow-1001",
    "hover:bg-brand-purple-1000",
    "fill-brand-green-1000",
    "fill-brand-red-1000",
    "fill-brand-yellow-1000",
    "fill-brand-green-1001",
  ],
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

        brand: {
          background: {
            primary: "#F4F5F6",
            secondary: "#F8F8FA",
          },
          red: {
            1000: "#FE4C4A",
          },
          green: {
            1000: "#7AC14D",
            1001: "#B3D99B",
            1002: "#67AA3C",
          },
          yellow: {
            1000: "#ECDE7C",
            1001: "#EFD652",
          },
          purple: {
            1000: "#9640BE",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
