import React from "react";

// logic component: scroll
import { useScroll } from "./scroll";

const BackToTopButton = () => {
  const { showButton } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
