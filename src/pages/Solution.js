import React from "react";
import useScrollToHash from "../components/useScrollToHash";

const Solution = () => {
  useScrollToHash();

  return (
    // Section Wrapper
    <div className="flex flex-col bg-AD-company-background bg-auto text-white min-h-screen">
      {/* Banner */}
      <div className="bg-red-700/75 my-32 mx-24 pt-12 pb-16 rounded-[24px]">
        <h1 className="ml-24 text-7xl/loose font-bold">Solutions</h1>
        <blockquote className="ml-24 italic text-xl/loose">
          Empowering Your Brand with Innovative Marketing Solutions
        </blockquote>
        <h2 className="ml-24 text-xl/loose">
          성공적인 사례로 증명된 마케팅 솔루션
          <br />
          우리가 만든 결과, 우리의 마케팅 성공 사례
        </h2>
      </div>
      {/* N Store */}
      <section
        id="nstore"
        className="mb-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-5xl font-bold mb-16 text-center">N Store</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black font-semibold">
          {/* Chapter 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                SEO가이드라인에 맞춘 전문적인 컨설팅
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 네이버 SEO(검색엔진최적화) Guideline에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
          {/* Chapter 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                프로그램X 바이럴 SNS 타겟 마케팅 실제고객 유입 OK
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 체계적인 솔루션을 통한 순위 상승 및
                브랜드화를 이끌어 드립니다.
              </p>
            </div>
          </div>
          {/* Chapter 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                어뷰징 ZERO 컴플레인 ZERO
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터의 N쇼핑 솔루션 마케팅은 단 한건의 어뷰징
                사례도 발생하지 않았으며 고객사의 만족도 최상의 서비스를
                제공하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C Store */}
      <section
        id="cstore"
        className="mb-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-5xl font-bold mb-16 text-center">C Store</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black font-semibold">
          {/* Chapter 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                SEO가이드라인에 맞춘 전문적인 컨설팅
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 네이버 SEO(검색엔진최적화) Guideline에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
          {/* Chapter 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                프로그램X 바이럴 SNS 타겟 마케팅 실제고객 유입 OK
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 체계적인 솔루션을 통한 순위 상승 및
                브랜드화를 이끌어 드립니다.
              </p>
            </div>
          </div>
          {/* Chapter 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                어뷰징 ZERO 컴플레인 ZERO
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터의 N쇼핑 솔루션 마케팅은 단 한건의 어뷰징
                사례도 발생하지 않았으며 고객사의 만족도 최상의 서비스를
                제공하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* K Shopping */}
      <section
        id="kshopping"
        className="mb-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-5xl font-bold mb-16 text-center">K Shopping</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black font-semibold">
          {/* Chapter 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                SEO가이드라인에 맞춘 전문적인 컨설팅
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 네이버 SEO(검색엔진최적화) Guideline에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
          {/* Chapter 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                프로그램X 바이럴 SNS 타겟 마케팅 실제고객 유입 OK
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 체계적인 솔루션을 통한 순위 상승 및
                브랜드화를 이끌어 드립니다.
              </p>
            </div>
          </div>
          {/* Chapter 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                어뷰징 ZERO 컴플레인 ZERO
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터의 N쇼핑 솔루션 마케팅은 단 한건의 어뷰징
                사례도 발생하지 않았으며 고객사의 만족도 최상의 서비스를
                제공하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* N Place */}
      <section
        id="nplace"
        className="mb-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-5xl font-bold mb-16 text-center">N Place</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black font-semibold">
          {/* Chapter 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                SEO가이드라인에 맞춘 전문적인 컨설팅
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 네이버 SEO(검색엔진최적화) Guideline에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
          {/* Chapter 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                프로그램X 바이럴 SNS 타겟 마케팅 실제고객 유입 OK
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 체계적인 솔루션을 통한 순위 상승 및
                브랜드화를 이끌어 드립니다.
              </p>
            </div>
          </div>
          {/* Chapter 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                어뷰징 ZERO 컴플레인 ZERO
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터의 N쇼핑 솔루션 마케팅은 단 한건의 어뷰징
                사례도 발생하지 않았으며 고객사의 만족도 최상의 서비스를
                제공하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section
        id="instagram"
        className="mb-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-5xl font-bold mb-16 text-center">Instagram</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black font-semibold">
          {/* Chapter 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                SEO가이드라인에 맞춘 전문적인 컨설팅
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 네이버 SEO(검색엔진최적화) Guideline에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
          {/* Chapter 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                프로그램X 바이럴 SNS 타겟 마케팅 실제고객 유입 OK
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 체계적인 솔루션을 통한 순위 상승 및
                브랜드화를 이끌어 드립니다.
              </p>
            </div>
          </div>
          {/* Chapter 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                어뷰징 ZERO 컴플레인 ZERO
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터의 N쇼핑 솔루션 마케팅은 단 한건의 어뷰징
                사례도 발생하지 않았으며 고객사의 만족도 최상의 서비스를
                제공하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Youtube */}
      <section
        id="youtube"
        className="mb-12 mx-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-5xl font-bold mb-16 text-center">Youtube</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black font-semibold">
          {/* Chapter 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                SEO가이드라인에 맞춘 전문적인 컨설팅
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 네이버 SEO(검색엔진최적화) Guideline에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
          {/* Chapter 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                프로그램X 바이럴 SNS 타겟 마케팅 실제고객 유입 OK
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터는 체계적인 솔루션을 통한 순위 상승 및
                브랜드화를 이끌어 드립니다.
              </p>
            </div>
          </div>
          {/* Chapter 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/200x300"
              alt="N Store Chapter 1"
              className="w-full object-cover h-96"
            />
            <div className="p-6 flex-1">
              <h1 className="text-2xl text-red-700 mb-4">
                어뷰징 ZERO 컴플레인 ZERO
              </h1>
              <p className="text-gray-600">
                에이디파트너스센터의 N쇼핑 솔루션 마케팅은 단 한건의 어뷰징
                사례도 발생하지 않았으며 고객사의 만족도 최상의 서비스를
                제공하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
