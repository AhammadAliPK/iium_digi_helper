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
        // IIUM Official Brand Colors (from Visual Identity System 2021)
        iium: {
          // Primary Corporate Colours
          turquoise: '#00928F', // PANTONE 7716 C - Official IIUM Turquoise
          gold: '#D59F0F',      // PANTONE 7555 C - Official IIUM Gold
          teal: '#00928F',      // Alias for turquoise
          black: '#000000',
          white: '#FFFFFF',

          // Light Product Surface Architecture
          deep: '#FFFFFF',
          surface: '#F8FAFC',
          'surface-raised': '#FFFFFF',

          // Borders & Semantics (light mode)
          'border-subtle': 'rgba(0, 146, 143, 0.15)',
          'border-active': 'rgba(213, 159, 15, 0.3)',
          glass: 'rgba(0, 146, 143, 0.04)',

          // Text States (light mode)
          'text-primary': '#1A202C',
          'text-secondary': '#4A5568',
          'text-muted': '#718096',
          'text-accent': '#D59F0F',

          // Kulliyyah Accent Colours (for thematic usage)
          'kict-green': '#00A850',       // Kulliyyah of ICT
          'kenms-yellow': '#FFF200',     // Kulliyyah of Economics
          'koed-blue': '#005DAC',        // Kulliyyah of Education
          'kirhs-grey': '#CAD1D3',       // Kulliyyah of IRKHS
          'koe-maroon': '#840715',       // Kulliyyah of Engineering
          'kos-orange': '#F6871F',       // Kulliyyah of Science
          'kaed-purple': '#7A2A90',      // Kulliyyah of Architecture
          'kom-pink': '#F177AE',         // Kulliyyah of Medicine
          'kop-cream': '#FFFABE',        // Kulliyyah of Pharmacy
          'kahs-bright-pink': '#EC008C', // Allied Health Sciences
          'kon-peach': '#FFDDB3',        // Kulliyyah of Nursing
          'kod-dark-purple': '#470054',  // Kulliyyah of Dentistry
          'istac-red': '#EE202E',        // ISTAC
          'airol-black': '#231F20'       // Ahmad Ibrahim Kulliyyah of Laws
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
