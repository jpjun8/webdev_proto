import React, { useEffect } from "react";
import "../styles/Effects.css";

const Recruiting = () => {
  // Page Title
  useEffect(() => {
    document.title = "Recruiting | AD";
  }, []);

  return (
    <div className="font-pre text-white bg-black">
      {/* Section Wrapper */}
      <div className="mt-24">
        {/* Testing Effects Here */}
        {/* Rolling */}
        <div className="overflow-hidden w-full">
          <div className="flex animate-roll space-x-20">
            <div className="menu-item px-12 py-4 bg-blue-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-red-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-green-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-yellow-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-purple-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-blue-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-red-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-green-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-yellow-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-purple-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-blue-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-red-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-green-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-yellow-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-purple-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-blue-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-red-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-green-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-yellow-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-purple-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-blue-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-red-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-green-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-yellow-500 text-white">
              Item 1
            </div>
            <div className="menu-item px-12 py-4 bg-purple-500 text-white">
              Item 1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiting;
