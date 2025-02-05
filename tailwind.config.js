/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#FFFAFA",
        gainsborough: "#DCDCDC",
      },
      backgroundImage: {
        "design-page": "url('/src/assets/samples/background-mobile-500w.jpg')",
        "AD-company-background":
          "url('/src/assets/samples/AD_company_background.jpg')",
        "profile-background":
          "url('/src/assets/samples/profile_background.jpg')",
        "AD-CEO-banner":
          "url('/src/assets/design_proto/design_assets/회사 계단 사진.jpg')",
        "AD-company-chart":
          "url('/src/assets/design_proto/design_assets/차트배경이미지.jpg')",
        "city-image":
          "url('/src/assets/design_proto/design_assets/도시이미지.jpg')",
      },
      scrollBehavior: {
        smooth: "smooth",
      },
      fontFamily: {
        pre: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
