// 잠깐 보류 -- ㅈ버그 걸림

import React, { useState, useEffect, useRef } from "react";

const employees = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "Strive for progress, not perfection.",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote: "Success is a journey, not a destination.",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote: "The best way to predict the future is to create it.",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote: "Dream big, work hard.",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote: "Believe you can and you’re halfway there.",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    quote: "Believe you can and you’re halfway there.",
  },
  {
    id: 7,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote: "Believe you can and you’re halfway there.",
  },
  {
    id: 8,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    quote: "Believe you can and you’re halfway there.",
  },
  // Add more employees as needed
];

const HorizontalMenu = () => {
  const [, setScrollIndex] = useState(0);
  const menuRef = useRef(null);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % employees.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

//   // Scroll to the item based on the index
//   useEffect(() => {
//     console.log("scrollIndex changed:", scrollIndex);

//     if (menuRef.current) {
//       const menuItem = menuRef.current.children[scrollIndex];
//       if (menuItem) {
//         menuRef.current.scrollLeft = menuItem.offsetLeft;
//         console.log("Scrolled to:", menuItem);
//       }
//     }
//   }, [scrollIndex]);

  // Handle left/right arrow navigation
  const handleArrowClick = (direction) => {
    setScrollIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? employees.length - 1 : prevIndex - 1;
      } else {
        return (prevIndex + 1) % employees.length;
      }
    });
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Left Arrow */}
      <button
        className="absolute left-0 p-2 text-black bg-gray-500 rounded-full hover:bg-gray-700"
        onClick={() => handleArrowClick("left")}
      >
        &#8592;
      </button>

      {/* Menu */}
      <div className="overflow-hidden px-4" style={{ maxWidth: "100%" }}>
        <div className="flex space-x-6 animation-scroll" ref={menuRef}
        style={{
            animation: 'scroll 25s linear infinite'
        }}>
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex flex-col items-center"
              style={{ minWidth: "200px" }}
            >
              <img
                src={employee.image}
                alt={`Employee ${employee.id}`}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <p className="text-center text-white">{employee.quote}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 p-2 text-white bg-gray-500 rounded-full hover:bg-gray-700"
        onClick={() => handleArrowClick("right")}
      >
        &#8594;
      </button>
    </div>
  );
};

export default HorizontalMenu;
