import React, { useEffect, useState } from "react";
import useScrollToHash from "../components/useScrollToHash";

// Icons
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Reference = () => {
  // Page Title
  useEffect(() => {
    document.title = "Reference | AD";
  }, []);

  useScrollToHash();

  const [activeColumns, setActiveColumns] = useState([0, 0, 0]); // 0: A, 1: B, 2: C

  const handleChevronClick = (index, direction) => {
    setActiveColumns((prevState) => {
      const newActiveColumns = [...prevState];
      // Calculate new active column for the given index (section)
      if (direction === "left") {
        newActiveColumns[index] =
          newActiveColumns[index] === 0 ? 2 : newActiveColumns[index] - 1;
      } else {
        newActiveColumns[index] =
          newActiveColumns[index] === 2 ? 0 : newActiveColumns[index] + 1;
      }
      return newActiveColumns;
    });
  };

  return (
    // Section wrapper
    <div className="font-pre flex flex-col bg-black text-white overflow-hidden">
      {/* Banner */}
      <div className="bg-AD-CEO-banner bg-cover relative w-full min-h-96">
        <div className="absolute top-0 left-0 w-full h-20 bg-black bg-opacity-30 leading-10 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-inherit bg-opacity-30 leading-10 backdrop-blur-lg z-5 content-center">
          <div className="mx-20">
            <h1 className="text-6xl font-bold">Reference</h1>
            <hr className="w-1/3 mt-3" />
            <span className="text-xl">Store · Place · Others </span>
          </div>
        </div>
      </div>

      {/* Store */}
      <section id="store" className="my-12 mx-4">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-5 w-full h-full grid-rows-2">
            {/* First column (SOMETHING) spanning both rows */}
            <div className="bg-gray-300 row-span-2 p-6">
              <div className="text-left text-black">
                {/* Header */}
                <div className="font-bold text-xl mb-20">Reference</div>
                {/* Title */}
                <div className="text-4xl mt-4 mb-6 border-b-2 border-gray-500">
                  Store
                </div>
                {/* Subtitle */}
                <div className="text-lg text-gray-700 mt-2 mb-40">
                  Store 성공사례를 소개합니다.
                </div>
                {/* Navigation Chevrons */}
                <div className="flex justify-between mt-4">
                  <button onClick={() => handleChevronClick(0, "left")}>
                    <IoChevronBack size={30} />
                  </button>
                  <button onClick={() => handleChevronClick(0, "right")}>
                    <IoChevronForward size={30} />
                  </button>
                </div>
              </div>
            </div>

            {/* Second to Fourth columns (A, B, C), hidden D */}
            <div
              className={`flex flex-col ${
                activeColumns[0] === 0 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 row-span-2 h-full`}
            >
              <div className="h-full bg-blue-300">A - D</div>
              <div className="h-full bg-blue-400">A - E</div>
            </div>

            <div
              className={`flex flex-col ${
                activeColumns[0] === 1 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 row-span-2 h-full`}
            >
              <div className="h-full bg-green-300">B - D</div>
              <div className="h-full bg-green-400">B - E</div>
            </div>

            <div
              className={`flex flex-col ${
                activeColumns[0] === 2 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 row-span-2 h-full`}
            >
              <div className="h-full bg-red-300">C - D</div>
              <div className="h-full bg-red-400">C - E</div>
            </div>
            {/* Hidden column */}
            <div
              className={`flex flex-col ${
                activeColumns[0] === 2 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 bg-zinc-300 row-span-2 h-full hidden`}
            >
              <div className="h-full">D - D</div>
              <div className="h-full">E - E</div>
            </div>
          </div>
        </div>
      </section>

      {/* Place */}
      <section id="place" className="my-12 mx-4">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-5 w-full h-full grid-rows-2">
            {/* First column (SOMETHING) spanning both rows */}
            <div className="bg-gray-300 row-span-2 p-6">
              <div className="text-left text-black">
                {/* Header */}
                <div className="font-bold text-xl mb-20">Reference</div>
                {/* Title */}
                <div className="text-4xl mt-4 mb-6 border-b-2 border-gray-500">
                  Place
                </div>
                {/* Subtitle */}
                <div className="text-lg text-gray-700 mt-2 mb-40">
                  Place 성공사례를 소개합니다.
                </div>
                {/* Navigation Chevrons */}
                <div className="flex justify-between mt-4">
                  <button onClick={() => handleChevronClick(1, "left")}>
                    <IoChevronBack size={30} />
                  </button>
                  <button onClick={() => handleChevronClick(1, "right")}>
                    <IoChevronForward size={30} />
                  </button>
                </div>
              </div>
            </div>

            {/* Second to Fourth columns (A, B, C), hidden D */}
            <div
              className={`flex flex-col ${
                activeColumns[1] === 0 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 row-span-2 h-full`}
            >
              <div className="h-full bg-blue-300">A - D</div>
              <div className="h-full bg-blue-400">A - E</div>
            </div>

            <div
              className={`flex flex-col ${
                activeColumns[1] === 1 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 row-span-2 h-full`}
            >
              <div className="h-full bg-green-300">B - D</div>
              <div className="h-full bg-green-400">B - E</div>
            </div>

            <div
              className={`flex flex-col ${
                activeColumns[1] === 2 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 row-span-2 h-full`}
            >
              <div className="h-full bg-red-300">C - D</div>
              <div className="h-full bg-red-400">C - E</div>
            </div>
            {/* Hidden column */}
            <div
              className={`flex flex-col ${
                activeColumns[1] === 2 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 bg-zinc-300 row-span-2 h-full hidden`}
            >
              <div className="h-full">D - D</div>
              <div className="h-full">E - E</div>
            </div>
          </div>
        </div>
      </section>

      {/* Others */}
      <section id="others" className="my-12 mx-4">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-5 w-full h-full grid-rows-2">
            {/* First column (SOMETHING) spanning both rows */}
            <div className="bg-gray-300 row-span-2 p-6">
              <div className="text-left text-black">
                {/* Header */}
                <div className="font-bold text-xl mb-20">Reference</div>
                {/* Title */}
                <div className="text-4xl mt-4 mb-6 border-b-2 border-gray-500">
                  Others
                </div>
                {/* Subtitle */}
                <div className="text-lg text-gray-700 mt-2 mb-40">
                  Others 성공사례를 소개합니다.
                </div>
                {/* Navigation Chevrons */}
                <div className="flex justify-between mt-4">
                  <button onClick={() => handleChevronClick(2, "left")}>
                    <IoChevronBack size={30} />
                  </button>
                  <button onClick={() => handleChevronClick(2, "right")}>
                    <IoChevronForward size={30} />
                  </button>
                </div>
              </div>
            </div>

            {/* Second to Fourth columns (A, B, C), hidden D */}
            <div
              className={`flex flex-col ${
                activeColumns[2] === 0 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 row-span-2 h-full`}
            >
              <div className="h-full bg-blue-300">A - D</div>
              <div className="h-full bg-blue-400">A - E</div>
            </div>

            <div
              className={`flex flex-col ${
                activeColumns[2] === 1 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 row-span-2 h-full`}
            >
              <div className="h-full bg-green-300">B - D</div>
              <div className="h-full bg-green-400">B - E</div>
            </div>

            <div
              className={`flex flex-col ${
                activeColumns[2] === 2 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 row-span-2 h-full`}
            >
              <div className="h-full bg-red-300">C - D</div>
              <div className="h-full bg-red-400">C - E</div>
            </div>
            {/* Hidden column */}
            <div
              className={`flex flex-col ${
                activeColumns[2] === 2 ? "col-span-2" : "col-span-1"
              } transition-all duration-300 bg-zinc-300 row-span-2 h-full hidden`}
            >
              <div className="h-full">D - D</div>
              <div className="h-full">E - E</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reference;
