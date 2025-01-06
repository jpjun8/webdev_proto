/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "design-page": "url('/src/assets/background-mobile-500w.jpg')",
        "AD-top-banner": "url('/src/assets/AD_top_banner.jpg')",
        "AD-background": "url('/src/assets/AD_background.jpg')",
        "AD-background2": "url('/src/assets/AD_background2.jpg')",
        "AD-company-background": "url('/src/assets/AD_company_background.jpg')",
        "profile-background": "url('/src/assets/profile_background.jpg')",
      },
      scrollBehavior: {
        smooth: "smooth",
      },
      fontFamily: {
        pre: ["Pretendard"],
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
