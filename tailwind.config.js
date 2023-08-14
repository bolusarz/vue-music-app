/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'panel-tint': 'var(--vt-c-black-mute)',
        'active-link': 'var(--vt-c-red)',
        'white-mute': 'var(--vt-c-white-mute)',
        'neutral-black-blue': '#2E3A59'
      }
    }
  },
  plugins: []
}
