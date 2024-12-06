// src/pages/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center py-20 p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2 my-28">[Your Company]</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        <div className="bg-gray-100 p-4 rounded shadow" data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p>Placeholder for company description.</p>
        </div>
        <div
          className="bg-gray-100 p-4 rounded shadow"
          data-aos="fade-up" // slide-up, zoom-in also available
          data-aos-delay="200" // Optional delay for staggered animations
        >
          <h2 className="text-xl font-semibold mb-2">Our Services</h2>
          <p>Placeholder for services offered.</p>
        </div>
        <div
          className="bg-gray-100 p-4 rounded shadow"
          data-aos="fade-up"
          data-aos-delay="400" // Optional delay for staggered animations
        >
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>Placeholder for contact details.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
