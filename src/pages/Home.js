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
    <div className="flex-col items-center text-center">
      <div className="bg-design-page bg-auto mt-20">
        <header className="mb-20">
          <p className="text-2xl font-bold text-white mb-2 pt-32">Websites</p>
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
          <div className="w-auto inline-flex rounded-lg shadow-md px-4 py-2 mr-auto ml-auto">
            <ul className="flex text-white">
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

        <div className="relative">
          <h1 className="text-2xl font-bold mb-10 text-white">Video</h1>
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
        </div>
      </div>

      {/* Wrapper for sections */}
      <div className="">
        {/* Section 1 */}
        <section id="section1" className="px-8 pt-20 pb-20 bg-slate-300">
          <h1 className="text-2xl font-bold mb-10">Section 1</h1>
          <div className="grid grid-cols-4 gap-4">
            <p className="col-start-1 col-end-3 text-3xl text-left">
              Start with a best-in-class, <br /> customizable website template
            </p>
            <button className="col-start-4 bg-blue-500">
              BUILD YOUR OWN WITH AI
            </button>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 pt-20">
            {/* Each item wrapper */}
            <div>Something 1</div>
            <div>Something 2</div>
            <div>Something 3</div>
            <div>Something 4</div>
          </div>

          {/* More Button */}
          <button className="mt-20 w-full py-4 border border-solid border-gray-500 hover:text-white hover:bg-black ease-in-out transition duration-300">
            VIEW MORE TEMPLATES
          </button>
        </section>

        {/* Section 2 */}
        <section id="section2" className="px-8 pt-20 pb-20 bg-slate-400">
          <h2 className="text-2xl font-bold mb-10">Section 2</h2>
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
        <section id="section3" className="px-8 pt-20 pb-20 bg-slate-600">
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
        <section id="section4" className="px-8 pt-20 pb-20 bg-slate-800">
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
