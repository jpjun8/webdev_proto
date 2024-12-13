import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Logo */}
      <div className="logo fixed top-4 left-4 z-50">
        <Link to="/">
          <img
            src={require("../assets/logo.png")}
            alt="Link to Home page"
            className="size-1/2"
          ></img>
        </Link>
      </div>

      {/* Navigation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-gray-800 text-white px-4 py-2 rounded-lg"
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
        className={`fixed inset-0 bg-gray-900 text-white flex flex-row items-center justify-center transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center text-xl">
          {/* Column 1 */}
          <div>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/ad"
                  className="px-3 py-2 rounded-md text-2xl font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  AD
                </Link>
              </li>
              <li>
                <Link
                  to="/ad#CEO"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  CEO
                </Link>
              </li>
              <li>
                <Link
                  to="/ad#company"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/solution"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Solution
                </Link>
              </li>
              <li>
                <Link
                  to="/solution#nstore"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  N Store
                </Link>
              </li>
              <li>
                <Link
                  to="/solution#cstore"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  C Store
                </Link>
              </li>
              <li>
                <Link
                  to="/solution#kshopping"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  K Shopping
                </Link>
              </li>
              <li>
                <Link
                  to="/solution#nplace"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  N Place
                </Link>
              </li>
              <li>
                <Link
                  to="/solution#instagram"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="/solution#youtube"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/reference"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Reference
                </Link>
              </li>
              <li>
                <Link
                  to="/reference#store"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  to="/reference/place"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Place
                </Link>
              </li>
              <li>
                <Link
                  to="/reference#others"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Others
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/recruiting"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Recruiting
                </Link>
              </li>
              <li>
                <Link
                  to="/recruiting#adgasan"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  AD 가산본사
                </Link>
              </li>
              <li>
                <Link
                  to="/recruiting#adchungra"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  AD 청라지사
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/inquiry"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-400"
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
