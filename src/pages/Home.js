// Reference Site: https://www.squarespace.com/website-design
import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import video1 from "../assets/ForBiggerBlazes.mp4";

const Home = () => {
  const videoRef = useRef(video1);

  const [isPlaying, setIsPlaying] = useState(false);

  // Play/Pause Handler
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-center text-center py-20 p-4 bg-design-page bg-auto">
      <header className="mb-20">
        <p className="text-2xl font-bold text-white mb-2 my-20">Websites</p>
        <p className="text-6xl font-bold text-white mb-20">
          The leader in <br />
          website design
        </p>
        <a
          href="/services/design"
          className="px-6 py-6 bg-white text-black border border-black"
        >
          GET STARTED
        </a>
      </header>

      <nav
        id="subnav"
        className="flex top-0 shadow-md z-50 rounded-full mb-20 bg-zinc-950"
      >
        <div className="container mx-auto">
          <ul className="flex flex-row py-2 text-white  ml-auto mr-auto">
            <li>
              <a
                href="#section1"
                className="px-4 py-2 hover:bg-zinc-800 hover:text-white rounded-full transition-colors duration-300"
              >
                Templates
              </a>
            </li>
            <li>
              <a
                href="#section2"
                className="px-4 py-2 hover:bg-zinc-800 hover:text-white rounded-full transition-colors duration-300"
              >
                Design Intelligence
              </a>
            </li>
            <li>
              <a
                href="#section3"
                className="px-4 py-2 hover:bg-zinc-800 hover:text-white rounded-full transition-colors duration-300"
              >
                Creative Tools
              </a>
            </li>
            <li>
              <a
                href="#section4"
                className="px-4 py-2 hover:bg-zinc-800 hover:text-white rounded-full transition-colors duration-300"
              >
                SEO & Analytics
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        id="emp"
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
      >
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

      {/* Wrapper for sections */}
      <div className="text-white space-y-10">
        {/* Section 1 */}
        <section id="section1" className="relative mb-20">
          <h1 className="text-2xl font-bold mb-10">Section 1</h1>
          <video
            ref={videoRef}
            className="w-full max-w-3xl rounded-lg shadow-lg ml-auto mr-auto"
            muted
            loop
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause button */}
          <button
            onClick={togglePlayPause}
            class="relative px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg focus:outline-none"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </section>

        {/* Section 2 */}
        <section id="section2" className="mb-20">
          <h1 className="text-2xl font-bold mb-10">Section 2</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </p>
        </section>

        {/* Section 3 */}
        <section id="section3" className="mb-20">
          <h2 className="text-2xl font-bold mb-10">Section 3</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </p>
        </section>

        {/* Section 4 */}
        <section id="section4" className="mb-20">
          <h2 className="text-2xl font-bold mb-10">Section 4</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </p>
        </section>

        {/* Go to the top */}
        <p>
          Go to the
          <a href="#">top</a>.
        </p>
      </div>
    </div>
  );
};

export default Home;
