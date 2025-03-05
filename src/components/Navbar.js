import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// logic component: scroll
import { useScroll } from "../components/scroll";

// Icon
import { ChevronRightIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredGroup, setHoveredGroup] = useState(null);

  const { isScrolled } = useScroll();

  const handleMouseEnter = (group) => {
    setHoveredGroup(group);
  };

  const handleMouseLeave = () => {
    setHoveredGroup(null);
  };

  // Section Navigation
  const [activeSection, setActiveSection] = useState("");
  const [sectionIds, setSectionIds] = useState([]);
  const location = useLocation();

  // Dynamically get the section IDs based on the page
  useEffect(() => {
    // Function to get the section IDs based on the page
    const getSectionIds = () => {
      const sections = document.querySelectorAll("section");
      const ids = Array.from(sections).map((section) => section.id);
      setSectionIds(ids);
    };

    // Re-fetch section IDs every time the route changes
    getSectionIds();
  }, [location]);

  // Handle hash change and scroll to corresponding section
  useEffect(() => {
    const onHashChange = () => {
      const sectionId = window.location.hash.slice(1);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const offset = 150;
        const scrollToPosition = sectionElement.offsetTop - offset;

        sectionElement.scrollIntoView({
          top: scrollToPosition,
          behavior: "smooth",
        });
      }
    };

    // Listen for hash changes
    window.addEventListener("hashchange", onHashChange);

    // Handle the case when the page is loaded with a hash
    if (window.location.hash) {
      onHashChange();
    }

    // Cleanup event listener when the page is loaded with a hash
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, // Adjust this for when the section is considered "in view"
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sectionIds]);

  return (
    <div className="relative">
      {/* Sticky Navigation Bar */}
      {isScrolled ? (
        <div
          className={`fixed top-0 w-full bg-snow text-black p-4 shadow-md transition-opacity duration-300 opacity-100 z-50 flex flex-row items-center justify-start space-x-8`}
          data-aos="fade-down"
        >
          <Link to="/">
            <img
              src={require("../assets/logo/png/4.png")}
              alt="Link to Home page"
              className="logo top-4 left-4 z-50 rounded max-w-[120px] h-auto"
              onClick={() => setIsOpen(false)}
            />
          </Link>
          {/* Dynamically create links based on the current section IDs */}
          <div className="flex space-x-6 text-2xl">
            {sectionIds.map((id) => (
              <Link
                key={id}
                to={`#${id}`}
                className={`flex items-center space-x-2 ${
                  activeSection === id ? "text-red-500" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>{id}</span>
                <ChevronRightIcon className="w-8 h-6" />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`fixed top-0 w-full bg-snow text-black p-4 shadow-md transition-opacity duration-300 opacity-0 z-50 flex flex-row items-center justify-start`}
          style={{ minHeight: "64px", visibility: "hidden" }}
          data-aos="fade-out"
        >
          {/* Empty or just transparent space */}
        </div>
      )}

      {/* Navigation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-4 z-50 bg-inherit text-white px-4 py-2 rounded-lg"
      >
        {isOpen ? (
          // Close Icon (X)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="red"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="red"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Full-Page Navigation Pange */}
      <div
        className={`fixed inset-0 bg-black text-white flex flex-row justify-center transition-all duration-[1000ms] ease-in-out p-4 pt-32 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } z-20`}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-xl">
          {/* Column 1 */}
          <div
            onMouseEnter={() => handleMouseEnter("column1")}
            onMouseLeave={handleMouseLeave}
            className={`transition-all duration-75 ease-in-out ${
              hoveredGroup === "column2" ||
              hoveredGroup === "column3" ||
              hoveredGroup === "column4" ||
              hoveredGroup === "column5"
                ? "text-gray-500"
                : ""
            }`}
          >
            <ul className="space-y-4">
              <li>
                <Link
                  to="/ad"
                  className="px-3 py-2 rounded-md text-6xl font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  AD
                </Link>
              </li>
              <div className="flex flex-row md:flex-col">
                <li>
                  <Link
                    to="/ad#CEO"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    CEO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ad#company"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    Company
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          {/* Column 2 */}
          <div
            onMouseEnter={() => handleMouseEnter("column2")}
            onMouseLeave={handleMouseLeave}
            className={`transition-all duration-75 ease-in-out ${
              hoveredGroup === "column1" ||
              hoveredGroup === "column3" ||
              hoveredGroup === "column4" ||
              hoveredGroup === "column5"
                ? "text-gray-500"
                : ""
            }`}
          >
            <ul className="space-y-4">
              <li>
                <Link
                  to="/solution"
                  className="px-3 py-2 rounded-md text-6xl font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Solution
                </Link>
              </li>
              <div className="flex flex-row md:flex-col">
                <li>
                  <Link
                    to="/solution#nstore"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    N Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solution#cstore"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    C Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solution#kshopping"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    K Shopping
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solution#nplace"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    N Place
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solution#instagram"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solution#youtube"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    Youtube
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          {/* Column 3 */}
          <div
            onMouseEnter={() => handleMouseEnter("column3")}
            onMouseLeave={handleMouseLeave}
            className={`transition-all duration-75 ease-in-out ${
              hoveredGroup === "column1" ||
              hoveredGroup === "column2" ||
              hoveredGroup === "column4" ||
              hoveredGroup === "column5"
                ? "text-gray-500"
                : ""
            }`}
          >
            <ul className="space-y-4">
              <li>
                <Link
                  to="/reference"
                  className="px-3 py-2 rounded-md text-6xl font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Reference
                </Link>
              </li>
              <div className="flex flex-row md:flex-col">
                <li>
                  <Link
                    to="/reference#store"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reference#place"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    Place
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reference#others"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    Others
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          {/* Column 4 */}
          <div
            onMouseEnter={() => handleMouseEnter("column4")}
            onMouseLeave={handleMouseLeave}
            className={`transition-all duration-75 ease-in-out ${
              hoveredGroup === "column1" ||
              hoveredGroup === "column2" ||
              hoveredGroup === "column3" ||
              hoveredGroup === "column5"
                ? "text-gray-500"
                : ""
            }`}
          >
            <ul className="space-y-4">
              <li>
                <Link
                  to="/recruiting"
                  className="px-3 py-2 rounded-md text-6xl font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Recruiting
                </Link>
              </li>
              <div className="flex flex-row md:flex-col">
                <li>
                  <Link
                    to="/recruiting#adgasan"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    AD 가산본사
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recruiting#adchungra"
                    className="px-3 py-2 rounded-md text-2xl/loose font-medium hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    AD 청라지사
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          {/* Column 5 */}
          <div
            onMouseEnter={() => handleMouseEnter("column5")}
            onMouseLeave={handleMouseLeave}
            className={`transition-all duration-75 ease-in-out ${
              hoveredGroup === "column1" ||
              hoveredGroup === "column2" ||
              hoveredGroup === "column3" ||
              hoveredGroup === "column4"
                ? "text-gray-500"
                : ""
            }`}
          >
            <ul className="space-y-4">
              <li>
                <Link
                  to="/inquiry"
                  className="px-3 py-2 rounded-md text-6xl font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Inquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
