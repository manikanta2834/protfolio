/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#030712', // deep slate/black
          card: 'rgba(17, 24, 39, 0.75)', // glassmorphism card background
          border: 'rgba(255, 255, 255, 0.06)',
          text: {
            primary: '#f3f4f6',
            secondary: '#9ca3af',
            muted: '#6b7280',
          },
          neon: {
            cyan: '#06b6d4',
            purple: '#a855f7',
            blue: '#3b82f6',
            green: '#10b981',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Orbitron', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.15)',
        'glow-purple': '0 0 15px rgba(168, 85, 247, 0.15)',
        'glow-green': '0 0 15px rgba(16, 185, 129, 0.15)',
        'glow-border': '0 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 2px rgba(6, 182, 212, 0.3))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
