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
    <div className="flex flex-col bg-AD-company-background bg-auto text-white min-h-screen">
      {/* Banner */}
      <div className="bg-red-700/75 my-32 mx-32 pt-12 pb-16 rounded-[24px]">
        <h1 className="ml-24 text-7xl/loose font-bold">Reference</h1>
        <blockquote className="ml-24 italic text-xl/loose">
          Empowering Your Brand with Innovative Marketing Solutions
        </blockquote>
        <h2 className="ml-24 text-xl/loose">
          성공적인 사례로 증명된 마케팅 솔루션
          <br />
          우리가 만든 결과, 우리의 마케팅 성공 사례
        </h2>
      </div>
      {/* Store */}
      <section
        id="store"
        className="mb-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-5xl font-bold mb-16 text-center">STORE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black font-semibold">
          {/* A */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 A</h1>
              <p className="text-gray-600">
                이렇게 저렇게 해서 성공적으로 마무리했습니다.
              </p>
            </div>
          </div>
          {/* B */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 B</h1>
              <p className="text-gray-600">
                이번에도 이렇게 저렇게 잘 해서 성공했습니다.
              </p>
            </div>
          </div>
          {/* C */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 C</h1>
              <p className="text-gray-600">
                마지막으로 이것도 STORE 프로젝트 성공!
              </p>
            </div>
          </div>
          {/* D */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 D</h1>
              <p className="text-gray-600">
                마지막으로 이것도 STORE 프로젝트 성공!
              </p>
            </div>
          </div>
          {/* E */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 E</h1>
              <p className="text-gray-600">
                마지막으로 이것도 STORE 프로젝트 성공!
              </p>
            </div>
          </div>
          {/* F */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 F</h1>
              <p className="text-gray-600">
                마지막으로 이것도 STORE 프로젝트 성공!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Place */}
      <section
        id="place"
        className="mb-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-5xl font-bold mb-16 text-center">PLACE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black font-semibold">
          {/* A */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 A</h1>
              <p className="text-gray-600">
                이렇게 저렇게 해서 성공적으로 마무리했습니다.
              </p>
            </div>
          </div>
          {/* B */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 B</h1>
              <p className="text-gray-600">
                이번에도 이렇게 저렇게 잘 해서 성공했습니다.
              </p>
            </div>
          </div>
          {/* C */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 C</h1>
              <p className="text-gray-600">
                마지막으로 이것도 PLACE 프로젝트 성공!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Others */}
      <section
        id="others"
        className="mb-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-5xl font-bold mb-16 text-center">OTHERS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black font-semibold">
          {/* A */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 A</h1>
              <p className="text-gray-600">
                이렇게 저렇게 해서 성공적으로 마무리했습니다.
              </p>
            </div>
          </div>
          {/* Chapter 2 */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 B</h1>
              <p className="text-gray-600">
                이번에도 이렇게 저렇게 잘 해서 성공했습니다.
              </p>
            </div>
          </div>
          {/* Chapter 3 */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">성공사례 C</h1>
              <p className="text-gray-600">
                마지막으로 이것도 OTHERS 프로젝트 성공!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reference;
