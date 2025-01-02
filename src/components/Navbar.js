import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredGroup, setHoveredGroup] = useState(null);

  const handleMouseEnter = (group) => {
    setHoveredGroup(group);
  };

  const handleMouseLeave = () => {
    setHoveredGroup(null);
  };

  return (
    <div className="relative">
      {/* Logo */}
      <div className="logo fixed top-4 left-4 z-50">
        <Link to="/">
          <img
            src={require("../assets/logo.png")}
            alt="Link to Home page"
            className="border-2 border-black rounded size-1/2 "
          ></img>
        </Link>
      </div>

      {/* Navigation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-black-700 text-white px-4 py-2 rounded-lg"
      >
        {isOpen ? (
          // Close Icon (X)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
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
            stroke="currentColor"
            className="w-6 h-6"
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
}
