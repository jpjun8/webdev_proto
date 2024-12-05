import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

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
      <div className="container mx-auto flex justify-between items-center px-4 py-8">
        
        <div className="logo text-black font-bold text-2xl">
          <Link to="/">MyCompany</Link>
        </div>

        <div className="">
          <Link to="/">Testing</Link>
        </div>

        {/* Desktop navigation */}
        <div className="nav-links flex space-x-6 text-black ml-auto font-bold">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-lg hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-lg hover:text-gray-300">
                About
              </Link>
            </li>
            <li
              className="dropdown relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="dropdown-toggle text-lg cursor-pointer hover:text-gray-300">
                Services
              </span>
              {isDropdownOpen && (
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
              <Link to="/contact" className="text-lg hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i
            className={`fas ${
              isMobileMenuOpen ? "fa-times" : "fa-bars"
            } text-2x1`}
          ></i>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block text-lg text-white hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-lg text-white hover:text-gray-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block text-lg text-white hover:text-gray-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-lg text-white hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
