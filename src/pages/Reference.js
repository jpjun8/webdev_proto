import React, { useEffect } from "react";
import useScrollToHash from "../components/useScrollToHash";

const Reference = () => {
  // Page Title
  useEffect(() => {
    document.title = "Reference | AD";
  }, []);

  useScrollToHash();

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
            <span className="text-xl">Store·Place·Others </span>
          </div>
        </div>
      </div>

      {/* Store */}
      <section
        id="store"
        className="my-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2>STORE</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-0">
          {/* First column consuming both rows */}
          <div className="col-span-1 row-span-2 bg-gray-200 flex items-center justify-center text-sm">
            First Column (Spans 2 rows)
          </div>

          {/* Second column first row */}
          <div className="bg-blue-200 flex items-center justify-center text-sm">
            Second Column (Row 1)
          </div>

          {/* Third column first row */}
          <div className="bg-green-200 flex items-center justify-center text-sm">
            Third Column (Row 1)
          </div>

          {/* Fourth column first row */}
          <div className="bg-red-200 flex items-center justify-center text-sm">
            Fourth Column (Row 1)
          </div>

          {/* Second column second row */}
          <div className="bg-blue-300 flex items-center justify-center text-sm">
            Second Column (Row 2)
          </div>

          {/* Third column second row */}
          <div className="bg-green-300 flex items-center justify-center text-sm">
            Third Column (Row 2)
          </div>

          {/* Fourth column second row */}
          <div className="bg-red-300 flex items-center justify-center text-sm">
            Fourth Column (Row 2)
          </div>
        </div>
      </section>

      {/* Place */}
      <section
        id="place"
        className="my-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2>PLACE</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-0">
          {/* First column consuming both rows */}
          <div className="col-span-1 row-span-2 bg-gray-200 flex items-center justify-center text-sm">
            First Column (Spans 2 rows)
          </div>

          {/* Second column first row */}
          <div className="bg-blue-200 flex items-center justify-center text-sm">
            Second Column (Row 1)
          </div>

          {/* Third column first row */}
          <div className="bg-green-200 flex items-center justify-center text-sm">
            Third Column (Row 1)
          </div>

          {/* Fourth column first row */}
          <div className="bg-red-200 flex items-center justify-center text-sm">
            Fourth Column (Row 1)
          </div>

          {/* Second column second row */}
          <div className="bg-blue-300 flex items-center justify-center text-sm">
            Second Column (Row 2)
          </div>

          {/* Third column second row */}
          <div className="bg-green-300 flex items-center justify-center text-sm">
            Third Column (Row 2)
          </div>

          {/* Fourth column second row */}
          <div className="bg-red-300 flex items-center justify-center text-sm">
            Fourth Column (Row 2)
          </div>
        </div>
      </section>

      {/* Others */}
      <section
        id="others"
        className="my-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2>OTHERS</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-0">
          {/* First column consuming both rows */}
          <div className="col-span-1 row-span-2 bg-gray-200 flex items-center justify-center text-sm">
            First Column (Spans 2 rows)
          </div>

          {/* Second column first row */}
          <div className="bg-blue-200 flex items-center justify-center text-sm">
            Second Column (Row 1)
          </div>

          {/* Third column first row */}
          <div className="bg-green-200 flex items-center justify-center text-sm">
            Third Column (Row 1)
          </div>

          {/* Fourth column first row */}
          <div className="bg-red-200 flex items-center justify-center text-sm">
            Fourth Column (Row 1)
          </div>

          {/* Second column second row */}
          <div className="bg-blue-300 flex items-center justify-center text-sm">
            Second Column (Row 2)
          </div>

          {/* Third column second row */}
          <div className="bg-green-300 flex items-center justify-center text-sm">
            Third Column (Row 2)
          </div>

          {/* Fourth column second row */}
          <div className="bg-red-300 flex items-center justify-center text-sm">
            Fourth Column (Row 2)
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reference;
