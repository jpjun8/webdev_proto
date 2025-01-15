import React, { useState, useEffect } from "react";

const StickyNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {console.log(isScrolled)}
      {isScrolled && (
        <div className="fixed top-0 w-full bg-gray-800 text-white p-4 shadow-md">
          <p>Sticky Navigation Bar</p>
        </div>
      )}
    </div>
  );
};

export default StickyNavBar;
