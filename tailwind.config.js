/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-slate-grey': 'hsl(234, 29%, 20%)',
        tomato: 'hsl(4, 100%, 67%)',
        'charcoal-grey': 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
        white: 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        signup_desktop:
          "url('../src/assets/images/illustration-sign-up-desktop.svg')",
        signup_mobile:
          "url('../src/assets/images/illustration-sign-up-mobile.svg')",
        'gradient-button': 'linear-gradient(204deg, #FF6A3A 0%, #FF527B 100%)',
      },
      listStyleImage: {
        'icon-success': "url('../src/assets/images/icon-list.svg')",
      },
      boxShadow: {
        'orange-btn': '0px 16px 32px 0px rgba(255, 97, 85, 0.50)',
      },
    },
  },
  plugins: [],
};
