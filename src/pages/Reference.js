import React, { useEffect, useState } from "react";
import useScrollToHash from "../components/useScrollToHash";

// Icons
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Images
import sampleImg from "../assets/samples/300x300.png";

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
      } else if (direction == "right") {
        newActiveColumns[index] =
          newActiveColumns[index] === 2 ? 0 : newActiveColumns[index] + 1;
      }
      console.log(newActiveColumns);
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
      <section id="store" className="my-12 mx-12 text-black">
        <div className="flex justify-center items-center">
          <div
            className="grid grid-cols-4 w-full h-full grid-rows-2 shadow-lg"
            style={{
              gridTemplateColumns: `1.5fr ${
                activeColumns[0] === 0 ? "2fr" : "1fr"
              } ${activeColumns[0] === 1 ? "2fr" : "1fr"} ${
                activeColumns[0] === 2 ? "2fr" : "1fr"
              }`,
              transition: "grid-template-columns 0.5s ease-in-out",
            }}
          >
            {/* First column spanning both rows */}
            <div className="bg-gray-300 row-span-2 p-6 shadow-lg">
              <div className="relative text-left text-black">
                {/* Header */}
                <div className="text-lg mb-20">Reference</div>
                {/* Title */}
                <div className="font-bold text-5xl mt-4 mb-4 border-b-2 border-gray-500">
                  Store
                </div>
                {/* Subtitle */}
                <div className="text-lg text-gray-700 mt-2">
                  &nbsp;Store 성공사례를 소개합니다.
                </div>
                {/* Navigation Chevrons */}
                <div className="absolute bottom-0 right-4 flex justify-end">
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
              className="flex flex-col row-span-2 h-full ease-in-out shadow-lg"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Outer shadow for depth
              }}
            >
              {/* Top part */}
              <div
                className="flex-1 bg-snow p-6"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Header */}
                <div className="text-md">성공사례</div>
                <div className="text-3xl font-bold">A</div>
                {/* Description */}
                <div className="mt-72">
                  <div>성공사례 A에 대한 내용 추가</div>
                  <div>협업 회사 이름</div>
                </div>
              </div>

              {/* Bottom part */}
              <div
                className="flex-1 bg-blue-400"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <img
                  src={sampleImg}
                  alt="A - E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="flex flex-col row-span-2 h-full ease-in-out shadow-lg"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Outer shadow for depth
              }}
            >
              {/* Top part */}
              <div
                className="flex-1 bg-gainsborough p-6"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Header */}
                <div className="text-md">성공사례</div>
                <div className="text-3xl font-bold">B</div>
                {/* Description */}
                <div className="mt-72">
                  <div>성공사례 B에 대한 내용 추가</div>
                  <div>협업 회사 이름</div>
                </div>
              </div>

              {/* Bottom part */}
              <div
                className="flex-1 bg-blue-400"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <img
                  src={sampleImg}
                  alt="A - E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="flex flex-col row-span-2 h-full ease-in-out shadow-lg"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Outer shadow for depth
              }}
            >
              {/* Top part */}
              <div
                className="flex-1 bg-snow p-6"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Header */}
                <div className="text-md">성공사례</div>
                <div className="text-3xl font-bold">C</div>
                {/* Description */}
                <div className="mt-72">
                  <div>성공사례 C에 대한 내용 추가</div>
                  <div>협업 회사 이름</div>
                </div>
              </div>

              {/* Bottom part */}
              <div
                className="flex-1 bg-blue-400"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <img
                  src={sampleImg}
                  alt="A - E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Place */}
      <section id="place" className="my-12 mx-12 text-black">
        <div className="flex justify-center items-center">
          <div
            className="grid grid-cols-4 w-full h-full grid-rows-2 shadow-lg"
            style={{
              gridTemplateColumns: `1.5fr ${
                activeColumns[0] === 0 ? "2fr" : "1fr"
              } ${activeColumns[0] === 1 ? "2fr" : "1fr"} ${
                activeColumns[0] === 2 ? "2fr" : "1fr"
              }`,
              transition: "grid-template-columns 0.5s ease-in-out",
            }}
          >
            {/* First column spanning both rows */}
            <div className="bg-gray-300 row-span-2 p-6 shadow-lg">
              <div className="relative text-left text-black">
                {/* Header */}
                <div className="text-lg mb-20">Reference</div>
                {/* Title */}
                <div className="font-bold text-5xl mt-4 mb-4 border-b-2 border-gray-500">
                  Place
                </div>
                {/* Subtitle */}
                <div className="text-lg text-gray-700 mt-2">
                  &nbsp;Place 성공사례를 소개합니다.
                </div>
                {/* Navigation Chevrons */}
                <div className="absolute bottom-0 right-4 flex justify-end">
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
              className="flex flex-col row-span-2 h-full ease-in-out shadow-lg"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Outer shadow for depth
              }}
            >
              {/* Top part */}
              <div
                className="flex-1 bg-snow p-6"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Header */}
                <div className="text-md">성공사례</div>
                <div className="text-3xl font-bold">A</div>
                {/* Description */}
                <div className="mt-72">
                  <div>성공사례 A에 대한 내용 추가</div>
                  <div>협업 회사 이름</div>
                </div>
              </div>

              {/* Bottom part */}
              <div
                className="flex-1 bg-blue-400"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <img
                  src={sampleImg}
                  alt="A - E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="flex flex-col row-span-2 h-full ease-in-out shadow-lg"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Outer shadow for depth
              }}
            >
              {/* Top part */}
              <div
                className="flex-1 bg-gainsborough p-6"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Header */}
                <div className="text-md">성공사례</div>
                <div className="text-3xl font-bold">B</div>
                {/* Description */}
                <div className="mt-72">
                  <div>성공사례 B에 대한 내용 추가</div>
                  <div>협업 회사 이름</div>
                </div>
              </div>

              {/* Bottom part */}
              <div
                className="flex-1 bg-blue-400"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <img
                  src={sampleImg}
                  alt="A - E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="flex flex-col row-span-2 h-full ease-in-out shadow-lg"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Outer shadow for depth
              }}
            >
              {/* Top part */}
              <div
                className="flex-1 bg-snow p-6"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Header */}
                <div className="text-md">성공사례</div>
                <div className="text-3xl font-bold">C</div>
                {/* Description */}
                <div className="mt-72">
                  <div>성공사례 C에 대한 내용 추가</div>
                  <div>협업 회사 이름</div>
                </div>
              </div>

              {/* Bottom part */}
              <div
                className="flex-1 bg-blue-400"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <img
                  src={sampleImg}
                  alt="A - E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Others */}
      <section id="others" className="my-12 mx-12 text-black">
        <div className="flex justify-center items-center">
          <div
            className="grid grid-cols-4 w-full h-full grid-rows-2 shadow-lg"
            style={{
              gridTemplateColumns: `1.5fr ${
                activeColumns[0] === 0 ? "2fr" : "1fr"
              } ${activeColumns[0] === 1 ? "2fr" : "1fr"} ${
                activeColumns[0] === 2 ? "2fr" : "1fr"
              }`,
              transition: "grid-template-columns 0.5s ease-in-out",
            }}
          >
            {/* First column spanning both rows */}
            <div className="bg-gray-300 row-span-2 p-6 shadow-lg">
              <div className="relative text-left text-black">
                {/* Header */}
                <div className="text-lg mb-20">Reference</div>
                {/* Title */}
                <div className="font-bold text-5xl mt-4 mb-4 border-b-2 border-gray-500">
                  Others
                </div>
                {/* Subtitle */}
                <div className="text-lg text-gray-700 mt-2">
                  &nbsp;Others 성공사례를 소개합니다.
                </div>
                {/* Navigation Chevrons */}
                <div className="absolute bottom-0 right-4 flex justify-end">
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
              className="flex flex-col row-span-2 h-full ease-in-out shadow-lg"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Outer shadow for depth
              }}
            >
              {/* Top part */}
              <div
                className="flex-1 bg-snow p-6"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Header */}
                <div className="text-md">성공사례</div>
                <div className="text-3xl font-bold">A</div>
                {/* Description */}
                <div className="mt-72">
                  <div>성공사례 A에 대한 내용 추가</div>
                  <div>협업 회사 이름</div>
                </div>
              </div>

              {/* Bottom part */}
              <div
                className="flex-1 bg-blue-400"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <img
                  src={sampleImg}
                  alt="A - E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="flex flex-col row-span-2 h-full ease-in-out shadow-lg"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Outer shadow for depth
              }}
            >
              {/* Top part */}
              <div
                className="flex-1 bg-gainsborough p-6"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Header */}
                <div className="text-md">성공사례</div>
                <div className="text-3xl font-bold">B</div>
                {/* Description */}
                <div className="mt-72">
                  <div>성공사례 B에 대한 내용 추가</div>
                  <div>협업 회사 이름</div>
                </div>
              </div>

              {/* Bottom part */}
              <div
                className="flex-1 bg-blue-400"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <img
                  src={sampleImg}
                  alt="A - E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="flex flex-col row-span-2 h-full ease-in-out shadow-lg"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Outer shadow for depth
              }}
            >
              {/* Top part */}
              <div
                className="flex-1 bg-snow p-6"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Header */}
                <div className="text-md">성공사례</div>
                <div className="text-3xl font-bold">C</div>
                {/* Description */}
                <div className="mt-72">
                  <div>성공사례 C에 대한 내용 추가</div>
                  <div>협업 회사 이름</div>
                </div>
              </div>

              {/* Bottom part */}
              <div
                className="flex-1 bg-blue-400"
                style={{ boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <img
                  src={sampleImg}
                  alt="A - E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reference;
