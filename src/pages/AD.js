import React, { useEffect } from "react";
import useScrollToHash from "../components/useScrollToHash";

const AD = () => {
  // Page Title
  useEffect(() => {
    document.title = "About | AD";
  }, []);
  
  useScrollToHash();

  return (
    // Section Wrapper
    <div className="flex-col bg-neutral-800 text-white">
      {/* CEO */}
      <section id="CEO" className="bg-AD-company-background bg-auto">
        <div className="h-auto flex flex-col ">
          {/* Banner */}
          <div className="bg-red-700/75 my-32 mx-32 pt-12 pb-16 rounded-[24px]">
            <h1 className="ml-24 text-7xl/loose font-bold">About</h1>
            <blockquote className="ml-24 italic text-xl/loose">
              Innovation starts with a vision.
            </blockquote>
            <h2 className="ml-24 text-xl/loose">
              성공을 이끄는 전략, 당신의 비즈니스를 성장시킵니다
              <br />
              창의적인 마케팅으로 미래를 만듭니다.
            </h2>
          </div>

          {/* Article */}
          <article className="ml-48 my-20 space-y-16">
            <h1 className="text-3xl">전하는말</h1>
            <p
              className="text-lg/8"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              대체로 사람들은 온라인 광고 회사를 믿지 않습니다. <br />
              온라인 마케팅 사업에서 가장 중요한 것은 '신뢰도'입니다.
            </p>
            <p
              className="text-lg/8"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              모든 것을 걸고 말씀드리겠습니다. <br />
              클라이언트분들이 만족하지 못한다면 에이디파트너스센터 회사
              내리겠습니다.
            </p>
            <p
              className="text-lg/8"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-dealy="200"
            >
              급할 것 없습니다. <br />
              최대한 이곳의 정보를 보시고, 신중히 판단해주세요.
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
              className="text-lg/8"
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
              스스로 변화해야 합니다.
            </p>
            <p
              className="text-lg/8"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-dealy="200"
            >
              이곳에 의뢰하지 않으셔도 좋습니다. <br />
              저희 레퍼런스, 운영 방식 등을 보시면서 1%라도 "믿음과 신뢰"를
              보여드리고자 <br />
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
              원하는 수준까지 속도감 있게 성장하지 못하여 시장에서 사라져 버리게
              됩니다.
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
            <p
              className="text-lg/8"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-dealy="200"
            >
              여러분의 꿈을 현실로 만들어 드립니다. <br />
              에이디파트너스와 함께 더 큰 비전을 위해 나아갑시다.
            </p>
          </article>
        </div>
      </section>

      {/* Company */}
      <section id="company" className="">
        <div className="bg-zinc-950 h-auto bg-auto flex flex-col">
          <h1 className="text-6xl/loose font-bold text-center my-12">
            사업개요 및 조직도
          </h1>
          <div className="grid grid-cols-2 gap-8 mx-4">
            {/* First row: Map, Pie Chart, Line Graphs */}
            <div
              className="p-4 flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Placeholder: Explanation for the image on the right
            </div>
            <div
              className="p-4 flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="image1"
                className="rounded-[24px] shadow-2xl"
              />
            </div>

            {/* Second row: 3 Circles, Explanations */}
            <div
              className="p-4 flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="image1"
                className="rounded-[24px] shadow-2xl"
              />
            </div>
            <div
              className="flex flex-col p-4 space-y-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Heading */}
              <h1 className="text-2xl mb-4">
                <strong>3C 분석</strong>은 고객(Customer), 경쟁사(Competitor),
                자사(Company) 세 가지 요소로 시장을 분석하는 방법입니다.
              </h1>

              {/* 3 Explanations */}
              <div className="bg-white p-8 rounded-[20px] shadow-md flex">
                <div className="w-1/3 font-bold text-2xl text-red-500">
                  Customer
                  <br />
                  (고객)
                </div>
                <div className="w-2/3 text-black text-lg">
                  고객의 구매전환 포인트를 분석해서 대표 썸네일 또는 상세영역
                  보여질수 있는 컨텐츠를 기획하고 피드백
                </div>
              </div>
              <div className="bg-white p-8 rounded-[20px] shadow-md flex">
                <div className="w-1/3 font-bold text-2xl text-red-500">
                  Competitor
                  <br />
                  (경쟁사)
                </div>
                <div className="w-2/3 text-black text-lg">
                  주요 경쟁사의 강점과 약점을 분석해서 경쟁사의 강점은 빼앗고
                  약점은 보완하여 더욱 더 성공적인 마케팅 전략을 내세운다
                </div>
              </div>
              <div className="bg-white p-8 rounded-[20px] shadow-md flex">
                <div className="w-1/3 font-bold text-2xl text-red-500">
                  Company
                  <br />
                  (자사)
                </div>
                <div className="w-2/3 text-black text-lg">
                  에이디파트너스의 다양한 레퍼런스와 최적화된 서비스상품을
                  통해서 서로가 만족할수 있는 결과를 이끌어낼수있다
                </div>
              </div>
            </div>

            {/* Third row: Organization Hierarchy */}
            <div
              className="col-span-2 p-4 flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="image1"
                className="rounded-[24px] shadow-2xl"
              />
            </div>

            {/* Fourth row:영업총이익, 당기순이익 */}
            <div
              className="p-4 flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="image1"
                className="rounded-[24px] shadow-2xl"
              />
            </div>
            <div
              className="p-4 flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="image1"
                className="rounded-[24px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AD;
