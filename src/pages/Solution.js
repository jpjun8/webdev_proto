import React, { useEffect } from "react";
import useScrollToHash from "../components/useScrollToHash";
import { Link } from "react-router-dom";

// Icons
import {
  ArchiveIcon,
  ShoppingCartIcon,
  MapIcon,
  ShareIcon,
  VideoCameraIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

const Solution = () => {
  // Page Title
  useEffect(() => {
    document.title = "Solution | AD";
  }, []);

  useScrollToHash();

  return (
    // Section Wrapper
    <div className="font-pre flex flex-col bg-black text-white">
      <Link to="/">
        <img
          src={require("../assets/logo/png/1.png")}
          alt="Link to Home page"
          className="logo absolute top-4 left-4 z-50 rounded max-w-[120px] h-auto"
        />
      </Link>
      {/* Banner */}
      <div className="bg-AD-CEO-banner bg-cover relative w-full min-h-[64rem]">
        <div className="absolute top-0 left-0 w-full h-20 bg-black bg-opacity-30 leading-10 z-10"></div>
        <div className="absolute top-[16rem] left-0 w-full bg-inherit bg-opacity-30 leading-10 backdrop-blur-lg z-5 content-center py-2">
          <div className="mx-20">
            <h1 className="text-6xl font-bold">Solution</h1>
            <hr className="w-1/3 mt-3" />
            <span className="text-xl">디움 코퍼레이션 솔루션 소개</span>
          </div>
        </div>
        <div
          id="list"
          className="absolute bottom-0 w-full h-2/3 content-center text-black items-center justify-center"
        >
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-0 p-4 rounded-lg bg-gray-500 bg-opacity-80 text-3xl">
              {/* Row 1 */}
              <div className="menu-item">
                <Link
                  to="/solution/#nstore"
                  className="flex flex-col items-center justify-center p-4 bg-inherit text-white text-center hover:bg-gray-600 transition duration-300 ease-in-out aspect-square border border-t-0 border-l-0 border-white"
                >
                  <ArchiveIcon className="w-20" />N Store
                </Link>
              </div>
              <div className="menu-item">
                <Link
                  to="/solution/#cstore"
                  className="flex flex-col items-center justify-center p-4 bg-inherit text-white text-center hover:bg-gray-600 transition duration-300 ease-in-out aspect-square border border-white border-t-0"
                >
                  <ArchiveIcon className="w-20" />C Store
                </Link>
              </div>
              <div className="menu-item">
                <Link
                  to="/solution/#kshopping"
                  className="flex flex-col items-center justify-center p-4 bg-inherit text-white text-center hover:bg-gray-600 transition duration-300 ease-in-out aspect-square border border-white border-t-0 border-r-0"
                >
                  <ShoppingCartIcon className="w-20" />K Shopping
                </Link>
              </div>

              {/* Row 2 */}
              <div className="menu-item">
                <Link
                  to="/solution/#nplace"
                  className="flex flex-col items-center justify-center p-4 bg-inherit text-white text-center hover:bg-gray-600 transition duration-300 ease-in-out aspect-square border border-white border-b-0 border-l-0"
                >
                  <MapIcon className="w-20" />N Place
                </Link>
              </div>
              <div className="menu-item">
                <Link
                  to="/solution/#instagram"
                  className="flex flex-col items-center justify-center p-4 bg-inherit text-white text-center hover:bg-gray-600 transition duration-300 ease-in-out aspect-square border border-white border-b-0"
                >
                  <ShareIcon className="w-20" />
                  Instagram
                </Link>
              </div>
              <div className="menu-item">
                <Link
                  to="/solution/#youtube"
                  className="flex flex-col items-center justify-center p-4 bg-inherit text-white text-center hover:bg-gray-600 transition duration-300 ease-in-out aspect-square border border-white border-b-0 border-r-0"
                >
                  <VideoCameraIcon className="w-20" />
                  Youtube
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* N Store */}
      <section id="nstore" className="py-32 px-20 text-black bg-gainsborough">
        {/* Link + Title */}
        <Link to="/solution#list">
          <p>
            Solution
            <ChevronRightIcon className="w-4 inline-block" />
          </p>
        </Link>
        <h1 className="text-6xl font-semibold">N Store</h1>
        <hr className="w-1/3 mt-3 border border-black" />
        {/* Cards */}
        <div className="flex space-x-4 mt-20 items-stretch justify-center">
          {/* Card 1 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-red-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 1</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Professional Consulting aligned with SEO Guideline
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-orange-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 2</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                No Illegal Software <br />
                Viral Social Networking <br />
                Targeted Marketing <br />
                Real Customers Influx
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-yellow-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 3</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Zero Abusing <br />
                Zero Complaints
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C Store */}
      <section id="cstore" className="py-32 px-20 text-black bg-snow">
        {/* Link + Title */}
        <Link to="/solution#list">
          <p>
            Solution
            <ChevronRightIcon className="w-4 inline-block" />
          </p>
        </Link>
        <h1 className="text-6xl font-semibold">C Store</h1>
        <hr className="w-1/3 mt-3 border border-black" />

        {/* Cards */}
        <div className="flex space-x-4 mt-20 items-stretch justify-center">
          {/* Card 1 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-red-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 1</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Professional Consulting aligned with SEO Guideline
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-orange-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 2</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                No Illegal Software <br />
                Viral Social Networking <br />
                Targeted Marketing <br />
                Real Customers Influx
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-yellow-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 3</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Zero Abusing <br />
                Zero Complaints
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* K Shopping */}
      <section
        id="kshopping"
        className="py-32 px-20 text-black bg-gainsborough"
      >
        {/* Link + Title */}
        <Link to="/solution#list">
          <p>
            Solution
            <ChevronRightIcon className="w-4 inline-block" />
          </p>
        </Link>
        <h1 className="text-6xl font-semibold">K Shopping</h1>
        <hr className="w-1/3 mt-3 border border-black" />

        {/* Cards */}
        <div className="flex space-x-4 mt-20 items-stretch justify-center">
          {/* Card 1 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-red-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 1</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Professional Consulting aligned with SEO Guideline
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-orange-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 2</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                No Illegal Software <br />
                Viral Social Networking <br />
                Targeted Marketing <br />
                Real Customers Influx
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-yellow-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 3</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Zero Abusing <br />
                Zero Complaints
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* N Place */}
      <section id="nplace" className="py-32 px-20 text-black bg-snow">
        {/* Link + Title */}
        <Link to="/solution#list">
          <p>
            Solution
            <ChevronRightIcon className="w-4 inline-block" />
          </p>
        </Link>
        <h1 className="text-6xl font-semibold">N Place</h1>
        <hr className="w-1/3 mt-3 border border-black" />

        {/* Cards */}
        <div className="flex space-x-4 mt-20 items-stretch justify-center">
          {/* Card 1 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-red-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 1</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Professional Consulting aligned with SEO Guideline
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-orange-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 2</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                No Illegal Software <br />
                Viral Social Networking <br />
                Targeted Marketing <br />
                Real Customers Influx
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-yellow-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 3</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Zero Abusing <br />
                Zero Complaints
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section
        id="instagram"
        className="py-32 px-20 text-black bg-gainsborough"
      >
        {/* Link + Title */}
        <Link to="/solution#list">
          <p>
            Solution
            <ChevronRightIcon className="w-4 inline-block" />
          </p>
        </Link>
        <h1 className="text-6xl font-semibold">Instagram</h1>
        <hr className="w-1/3 mt-3 border border-black" />

        {/* Cards */}
        <div className="flex space-x-4 mt-20 items-stretch justify-center">
          {/* Card 1 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-red-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 1</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Professional Consulting aligned with SEO Guideline
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-orange-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 2</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                No Illegal Software <br />
                Viral Social Networking <br />
                Targeted Marketing <br />
                Real Customers Influx
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-yellow-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 3</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Zero Abusing <br />
                Zero Complaints
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Youtube */}
      <section id="youtube" className="py-32 px-20 text-black bg-snow">
        {/* Link + Title */}

        <Link to="/solution#list">
          <p>
            Solution
            <ChevronRightIcon className="w-4 inline-block" />
          </p>
        </Link>
        <h1 className="text-6xl font-semibold">Youtube</h1>
        <hr className="w-1/3 mt-3 border border-black" />

        {/* Cards */}
        <div className="flex space-x-4 mt-20 items-stretch justify-center">
          {/* Card 1 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-red-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 1</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Professional Consulting aligned with SEO Guideline
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-orange-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 2</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                No Illegal Software <br />
                Viral Social Networking <br />
                Targeted Marketing <br />
                Real Customers Influx
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-1/3 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
            {/* Top Red Section */}
            <div className="bg-yellow-500 text-white text-md px-4 py-1 rounded-tl-lg">
              <span>Chapter. 3</span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Zero Abusing <br />
                Zero Complaints
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                디움 코퍼레이션은 네이버 SEO(검색엔진최적화)GUIDELINE에 맞춘
                전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를
                제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
