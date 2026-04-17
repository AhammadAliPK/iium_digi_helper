/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './apps/web/src/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1200px'
      }
    },
    extend: {
      colors: {
        // IIUM Official Brand Colors
        iium: {
          teal: '#008670',
          gold: '#CDB067',
          black: '#000000',
          deep: '#030F0D',
          surface: '#081D1A',
          'surface-raised': '#0F2B26',
          'border-subtle': 'rgba(0, 134, 112, 0.2)',
          'border-active': 'rgba(205, 176, 103, 0.4)',
          glass: 'rgba(255, 255, 255, 0.03)',
          'text-primary': '#FFFFFF',
          'text-secondary': 'rgba(255, 255, 255, 0.75)',
          'text-muted': 'rgba(255, 255, 255, 0.45)',
          'text-accent': '#CDB067'
        },
        // Tailwind-compatible theme colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--iium-radius-lg)', // 14px
        md: '10px',
        sm: 'var(--iium-radius-sm)', // 8px
        DEFAULT: 'var(--radius)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Roboto Slab', 'serif'],
        condensed: ['Barlow Condensed', 'sans-serif']
      },
      transitionTimingFunction: {
        'iium-spring': 'cubic-bezier(.34, 1.56, .64, 1)'
      },
      transitionDuration: {
        'iium': '250ms'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
