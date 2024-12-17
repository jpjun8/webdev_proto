/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "design-page": "url('/src/assets/background-mobile-500w.jpg')",
      },
      scrollBehavior: {
        smooth: "smooth",
      },
      fontFamily: {
        pre: ['Pretendard'],
      },
      // animation: {
      //   scroll: 'scrolling 25s linear infinite',
      // },
      // keyframes: {
      //   scrolling: {
      //     '0%': { transform: 'translateX(0)' },
      //     '100%': { transform: `translateX(-${200 * 8}px)`},
      //   }
      // },
    },
  },
  plugins: [],
};
