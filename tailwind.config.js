/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode: "class", 
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        meteor: 'meteor 5s linear infinite',
        gridPulse: 'gridPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        meteor: {
          '0%': {
            transform: 'rotate(215deg) translateX(0)',
            opacity: '1',
          },
          '70%': {
            opacity: '1',
          },
          '100%': {
            transform: 'rotate(215deg) translateX(-400px)',
            opacity: '0',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius, 0.5rem)',
        md: 'calc(var(--radius, 0.5rem) - 2px)',
        sm: 'calc(var(--radius, 0.5rem) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background, 0 0% 100%))',
        foreground: 'hsl(var(--foreground, 222.2 47.4% 11.2%))',
        card: {
          DEFAULT: 'hsl(var(--card, 0 0% 100%))',
          foreground: 'hsl(var(--card-foreground, 222.2 47.4% 11.2%))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover, 0 0% 100%))',
          foreground: 'hsl(var(--popover-foreground, 222.2 47.4% 11.2%))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary, 240 100% 50%))',
          foreground: 'hsl(var(--primary-foreground, 0 0% 100%))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary, 240 5% 90%))',
          foreground: 'hsl(var(--secondary-foreground, 222.2 47.4% 11.2%))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted, 240 4.8% 95.9%))',
          foreground: 'hsl(var(--muted-foreground, 240 3.8% 46.1%))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent, 240 4.8% 95.9%))',
          foreground: 'hsl(var(--accent-foreground, 240 5.9% 10%))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive, 0 100% 50%))',
          foreground: 'hsl(var(--destructive-foreground, 0 0% 100%))',
        },
        border: 'hsl(var(--border, 240 5.9% 90%))',
        input: 'hsl(var(--input, 240 5.9% 90%))',
        ring: 'hsl(var(--ring, 240 4.9% 83.9%))',
        chart: {
          1: 'hsl(var(--chart-1, 200 100% 50%))',
          2: 'hsl(var(--chart-2, 160 100% 50%))',
          3: 'hsl(var(--chart-3, 120 100% 50%))',
          4: 'hsl(var(--chart-4, 80 100% 50%))',
          5: 'hsl(var(--chart-5, 40 100% 50%))',
        },
      },
    },
  },
  plugins: [("tailwindcss-animate")],
};
