import React from "react";
import useScrollToHash from "../components/useScrollToHash";

const Reference = () => {
  useScrollToHash();

  return (
    // Section wrapper
    <div className="flex-col mt-32">
      <h1 className="font-bold text-3xl text-center">Reference</h1>

      {/* Store */}
      <section id="store" className="mt-12">
        <h2 className="font-bold text-2xl text-center">STORE</h2>
        <div className="grid grid-rows-2 grid-flow-col gap-8 mt-16">
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
        </div>
      </section>

      {/* Place */}
      <section id="place" className="mt-12">
        <h2 className="font-bold text-2xl text-center">PLACE</h2>
        <div className="grid grid-rows-1 grid-flow-col gap-8 mt-16">
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
        </div>
      </section>

      {/* Others */}
      <section id="others" className="mt-12">
        <h2 className="font-bold text-2xl text-center">OTHERS</h2>
        <div className="grid grid-rows-1 grid-flow-col gap-8 mt-16">
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Reference;
