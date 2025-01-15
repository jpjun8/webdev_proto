import React, { useEffect } from "react";
import useScrollToHash from "../components/useScrollToHash";

// Images
import sample from "../assets/samples/300x300.png";

const AD = () => {
  // Page Title
  useEffect(() => {
    document.title = "About | AD";
  }, []);

  useScrollToHash();

  return (
    // Section Wrapper
    <div className="font-pre flex flex-col bg-black text-white">
      {/* CEO */}
      <section id="CEO" className="">
        <div className="h-auto flex flex-col ">
          {/* Banner */}
          <div className="bg-AD-CEO-banner bg-cover relative w-full min-h-96">
            <div className="absolute top-0 left-0 w-full h-14 bg-black bg-opacity-30 leading-10 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-inherit bg-opacity-30 leading-10 backdrop-blur-lg z-5 content-center">
              <div className="mx-20">
                <h1 className="text-6xl font-bold">CEO</h1>
                <hr className="w-1/3 mt-3" />
                <span className="text-xl">에이디파트너스센터 소개</span>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="py-16 w-full h-auto content-center bg-gainsborough text-black">
            <div className="mx-20">
              <h1 className="text-5xl font-semibold">INTRODUCTION</h1>
              <hr className="w-2/3 mt-3 border-black" />
            </div>
            {/* Photo + Description -- Use Flex-row */}
            <div className="flex flex-row items-center justify-evenly mx-20 mt-8">
              <img src={sample} alt="image1" className="rounded shadow-2xl" />
              <div className="h-64 w-0.5 bg-black"></div>
              <div className="">
                <h1 className="text-2xl/loose">(주)에이디파트너스센터</h1>
                <p>
                  대체로 사람들은 온라인 광고 회사를 믿지 않습니다.
                  <br />
                  온라인 마케팅 사업에서 가장 중요한 것은{" "}
                  <span className="text-xl text-red-600 font-bold">
                    '신뢰도'
                  </span>
                  입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Article */}
          <article className="bg-snow text-black">
            <hr className="my-10 w-5/6 border-black mx-auto" />
            <h1 className="text-center text-3xl mb-20">
              "모든 것을 걸고 말씀드리겠습니다"
            </h1>
            <div className="mx-40 space-y-12">
              <p
                className="text-lg/8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                클라이언트분들이 만족하지 못한다면 에이디파트너스센터 회사
                내리겠습니다.
              </p>
              <p
                className="text-2xl/8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-dealy="200"
              >
                급할 것 없습니다.
              </p>
              <p
                className="text-lg/8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                최대한 이곳의 정보를 보시고 신중히 판단해 주세요.
              </p>
              <p
                className="text-lg/8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-dealy="200"
              >
                아무것도 모른채 무턱대고 광고를 하는 분들이 요즘 너무 많습니다.{" "}
                <br />
                급하신 마음은 충분히 이해합니다.
              </p>
              <p
                className="text-lg/8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-dealy="200"
              >
                하지만 급할수록 돌다리를 두들겨 건너야 합니다. <br />
                그렇지 않으면 수 많은 광고대행사에게 이용 당할 확률이 커집니다.
              </p>
              <p
                className="text-2xl/8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-dealy="200"
              >
                온라인 광고의 실패는 "무지"에서 시작됩니다.
              </p>
              <p
                className="text-lg/8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-dealy="200"
              >
                여러분이 원하는 결과를 눈으로 보여드리겠습니다.
              </p>
              <p
                className="text-lg/8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-dealy="200"
              >
                지금부터 하는 말이 자신의 생각과 맞는지, 그럴듯하게만 말하는건지
                설득력 있는지, <br />
                진짜 실력이 있는지 충분히 검토를 해주세요. <br />
                대표님들의 마음을 바꾸기 위해서 저희가 해 드리는 것은 한계가
                있습니다. <br />
                <span className="text-2xl text-red-600 font-semibold underline underline-offset-4">
                  스스로 변화해야 합니다.
                </span>
              </p>
              <p
                className="text-lg/8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-dealy="200"
              >
                이곳에 의뢰하지 않으셔도 좋습니다. <br />
                저희 레퍼런스, 운영 방식 등을 보시면서 1%라도{" "}
                <span className="text-2xl text-red-600 font-semibold underline underline-offset-4">
                  "믿음과 신뢰"
                </span>
                를 보여드리고자 <br />
                감히 말씀드립니다.
              </p>
              <p
                className="text-lg/8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-dealy="200"
              >
                다양한 가능성에 다가가기 위해 수많은 제품과 서비스가 존재합니다.{" "}
                <br />
                하지만 장애물을 이겨내지 못하고, <br />
                원하는 수준까지 속도감 있게 성장하지 못하여 시장에서 사라져
                버리게 됩니다.
              </p>
              <p
                className="text-lg/8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-dealy="200"
              >
                대부분 마케팅 역량이 부족해서 발생한 실패입니다. <br />
                에이디파트너스센터가 보유한 마케팅 역량으로 컨설팅을 제공하고{" "}
                <br />
                클라이언트가 원하는 수준까지 성상시킬 수 있습니다.
              </p>
              <hr
                className="my-10 border-black mx-auto"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-dealy="200"
              />
              <p
                className="text-2xl/8 text-center pb-20 font-semibold"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-dealy="200"
              >
                여러분의 꿈을 현실로 만들어 드립니다. <br />
                에이디파트너스와 함께 더 큰 비전을 위해 나아갑시다.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Company */}
      <section id="company" className="">
        {/* Banner */}
        <div className="bg-AD-CEO-banner bg-cover relative w-full h-40">
          <div className="absolute bottom-0 left-0 w-full h-full bg-inherit bg-opacity-30 leading-10 backdrop-blur-lg z-5 content-center">
            <div className="mx-20">
              <h1 className="text-6xl font-bold">COMPANY</h1>
              <hr className="w-1/3 mt-3" />
              <span className="text-xl">에이디파트너스센터 소개</span>
            </div>
          </div>
        </div>

        {/* Hierarchy */}
        <div className="py-16 w-full h-auto bg-gainsborough text-black">
          <div className="mx-20">
            <h1 className="text-3xl font-bold">회사 조직도</h1>
            <hr className="w-1/3 mt-3 border-black" />
          </div>
          <p className="text-center my-20">조직도 이미지</p>
        </div>

        {/* Report */}
        <div className="bg-cover h-auto bg-AD-company-chart">
          <div className="bg-snow opacity-90 flex flex-col">
            <div className="bg-neutral-700 size-2/3 mx-auto my-12 text-white backdrop-blur-lg rounded-lg shadow-lg">
              <div className="mx-8 mt-8">
                <p className="text-3xl font-bold">회사 조직도</p>
                <hr className="w-2/3 mt-3" />
              </div>
              {/* Grids */}
              <p className="mx-8 mt-4 text-2xl">영업총이익</p>
              <div className="grid grid-cols-2 gap-4 m-8">
                <div className="text-white p-4">영업총이익 2023년도</div>
                <div className="text-white p-4">영업총이익 2024년도</div>
              </div>
              <hr className="mx-8" />
              <p className="mx-8 mt-4 text-2xl">당기순이익</p>
              <div className="grid grid-cols-2 gap-4 m-8">
                <div className="text-white p-4">당기순이익 2023년도</div>
                <div className="text-white p-4">당기순이익 2024년도</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3C Analysis */}
        <div className="py-4 w-full h-auto bg-gainsborough">
          <div className="bg-neutral-700 size-2/3 mx-auto my-12 text-white backdrop-blur-lg rounded-lg shadow-lg">
            <div className="flex flex-col items-center justify-center text-center py-16 px-8">
              <p className="text-3xl mb-16">
                클라이언트를 위한 <br />
                <span className="font-semibold">3C 분석</span>
              </p>
              <p className="text-xl font-semibold">3C 분석이란?</p>
              <p>고객(Customer), 경쟁사(Competitor), 자사(Company)</p>
              <p className="mb-16">세 가지 요소 시장을 분석하는 방법입니다.</p>

              {/* 3 Sections */}
              <div className="flex flex-row border-t-2">
                <div className="p-4 bg-slate-100 text-black">
                  <p className="text-2xl">
                    Customer
                    <br />
                    <span>(고객)</span>
                  </p>
                  <p className="mt-4 text-sm">
                    고객의 구매전환 포인트를 분석해서 대표 썸네일 또는 상세영역
                    보여질 수 있는 컨텐츠를 기획하고 피드백
                  </p>
                </div>
                <div className="p-4 bg-rose-500">
                  <p className="text-2xl">
                    Competitor
                    <br />
                    <span>(경쟁사)</span>
                  </p>
                  <p className="mt-4 text-sm">
                    고객의 구매전환 포인트를 분석해서 대표 썸네일 또는 상세영역
                    보여질 수 있는 컨텐츠를 기획하고 피드백
                  </p>
                </div>
                <div className="p-4 bg-gray-400">
                  <p className="text-2xl">
                    Company
                    <br />
                    <span>(자사)</span>
                  </p>
                  <p className="mt-4 text-sm">
                    고객의 구매전환 포인트를 분석해서 대표 썸네일 또는 상세영역
                    보여질 수 있는 컨텐츠를 기획하고 피드백
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AD;
