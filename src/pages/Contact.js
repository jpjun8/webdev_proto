import React from "react";

const Contact = () => {
  return (
    <div className="p-4 flex flex-col items-center text-center py-20 p-4">
      <header>
        <h2 className="text-4xl font-bold mb-2 my-28">Testing Page: Will be replaced with Contact contents.</h2>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-24">
        <img
          src="https://via.placeholder.com/400"
          alt="Sample"
          className="w-full md:w-1/2 rounded shadow-lg"
          data-aos="fade-up"
        />
        <iframe
          width="75%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded shadow-lg"
          data-aos="fade-up"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
