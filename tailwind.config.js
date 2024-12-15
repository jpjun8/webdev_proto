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
    },
  },
  plugins: [],
};
