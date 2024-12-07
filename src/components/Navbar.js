import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [isSmall, setIsSmall] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full shadow-md transition-all duration-300 ${
        isScrolled ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-2 py-4">
        {/* Logo */}
        <div className="logo text-black font-bold text-2xl">
          <Link to="/">
            <img
              src={require("../assets/logo.webp")}
              alt="Link to Home page"
              className="size-14"
            ></img>
          </Link>
        </div>

        {/* Full Menu Links for Larger Screens */}
        <div
          className={`nav-links flex space-x-6 ml-auto font-bold md:block hidden ${
            isScrolled ? "text-white" : "text-black"
          }`}
        >
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
              >
                About
              </Link>
            </li>
            <li className="dropdown relative">
              <Link
                onClick={toggleDropdown}
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
              >
                Services
              </Link>

              {/* Dropdown menu */}
              {isOpen && (
                <ul className="dropdown-menu absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg font-normal">
                  <li>
                    <Link
                      to="/services/design"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/development"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/marketing"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Marketing
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/blank"
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
              >
                Blank
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsSmall(!isSmall)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right-Side Sliding Pane */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform ${
          isSmall ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSmall(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Close Menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-6">
        <ul className="">
            <li>
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
              >
                About
              </Link>
            </li>
            <li className="dropdown relative">
              <Link
                onClick={toggleDropdown}
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
              >
                Services
              </Link>

              {/* Dropdown menu */}
              {isOpen && (
                <ul className="dropdown-menu absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg font-normal">
                  <li>
                    <Link
                      to="/services/design"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/development"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/marketing"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Marketing
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/blank"
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
              >
                Blank
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
