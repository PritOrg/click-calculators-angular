/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class', // enables dark mode with 'dark' class
  theme: {
    extend: {
      colors: {
        custom: {
          light: {
            background: '#ffffff',
            card: '#f5f5f5',
            primary: '#00796b',
            secondary: '#81c784',
            text: '#333333',
            icon: '#00796b',
            stepper: '#e0f2f1',
            calculation: '#f3e5f5',
            formula: '#e8f5e9'
          },
          dark: {
            background: '#2a2c2c',
            card: '#333333',
            primary: '#00bfa5',
            secondary: '#26a69a',
            text: '#e0e0e0',
            icon: '#00bfa5',
            stepper: '#37474f',
            calculation: '#424242',
            formula: '#033905'
          }
        }
      },
      boxShadow: {
        'custom-light': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 2px 8px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in'
      }
    }
  },
  plugins: [],
}

