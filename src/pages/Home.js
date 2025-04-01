// Reference Site: https://www.squarespace.com/website-design
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

// import HorizontalMenu from "../components/HorizontalMenu";
import FAQSection from "../components/FAQ";
import Accordion from "../components/Accordion";

// Images
import sample300x300 from "../assets/samples/300x300.png";
import profile1 from "../assets/profiles/류연우.jpg";
import profile2 from "../assets/profiles/송준.jpg";
import profile3 from "../assets/profiles/이동훈.jpg";
import profile4 from "../assets/profiles/이상욱.jpg";
import profile5 from "../assets/profiles/전세찬.jpg";
import profile6 from "../assets/profiles/정홍일.jpg";
import profile7 from "../assets/profiles/조동민.png";
import analysis from "../assets/data.png";
import email from "../assets/email.png";
import checklist from "../assets/checklist.png";

const Home = () => {
  // Page Title
  useEffect(() => {
    document.title = "Home | AD";
  }, []);

  const [isDragging, setIsDragging] = useState(false);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartTranslateX, setDragStartTranslateX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Current index of the visible item
  const containerRef = useRef(null);

  const employees = [
    {
      id: 1,
      name: "류연우",
      quote:
        "광고주의 성공이 곧 나의 성공이라 믿습니다.\n\n수많은 상황을 직접 경험하고 극복하며 결국 해냈습니다.\n상황에 맞는 유동적인 방법으로 '완벽한' 결과물만 보여드리겠습니다.",
      img: profile1,
    },
    { id: 2, name: "송준", quote: "X", img: profile2 },
    {
      id: 3,
      name: "이동훈",
      quote:
        '"결과로 증명하는 마케팅 전문가, 신뢰를 제공하는 파트너"\n\n저는 단순한 마케팅 서비스를 넘어, 고객의 기대를 초과 달성하는 성과를 창출하는 파트너입니다.\n\n광고주가 저를 선택하는 이유는 분명합니다.\n고객의 목표를 깊이 이해하고, 맞춤형 전략을 통해 실질적인 성과를 이끌어내기 때문입니다.\n\n함께 성장하는 파트너가 되어, 여러분의 성공을 이끌어가겠습니다.',
      img: profile3,
    },
    {
      id: 4,
      name: "이상욱",
      quote:
        '"답답하시죠? 뭐가 잘 안되시나요?"\n\n누구나 다 잘하면 1등이 되겠지만 그게 안되기 때문에 현재 위치에 있는 겁니다.\n\n앞으로 더 큰 사업영역을 늘려드리기 위해 제가 갖고 있는 경험과 노하우를 알려드리겠습니다.',
      img: profile4,
    },
    {
      id: 5,
      name: "전세찬",
      quote:
        '"트렌드를 선도하는 전략적 마케팅 전문가"\n\n트렌드 분석과 전략적 실행에 전문성을 갖춘 마케터입니다.\n\n세세한 디테일까지 놓치지 않는 열정과 강력한 책임감을 바탕으로, 광고주님의 비전을 실현하는 데 전념하겠습니다.\n\n데이터 기반의 효과적인 마케팅 솔루션을 제공하며, 귀하의 꿈을 현실로 만드는 파트너로서 함께 성장해 나가겠습니다.',
      img: profile5,
    },
    {
      id: 6,
      name: "정홍일",
      quote:
        '"성공의 지름길로 안내해드리겠습니다."\n\n온라인 쇼핑에 있어서 마케팅은 필수적으로 필요합니다.\n\n하지만, 많은 분들이 무턱대고 모르는 상태에서 광고와 마케팅을 진행하고 있습니다.\n\n모든 마케팅에 있어, 정답은 없지만 오답은 분명하게 존재합니다.\n\n실질적인 매출 상승을 위해 많은 경험과 노하우를 공유해드리겠습니다.\n\n면밀히 분석하고 확인하여, 상황에 맞는 최적의 환경을 조성하겠습니다.\n\n매출이 나올수 밖에 없는 구조를 만들어드리겠습니다.',
      img: profile6,
    },
    {
      id: 7,
      name: "조동민",
      quote:
        "제가 생각하는 마케팅이란, 다른 이들보다 더 누군가의 기억에 남는 일입니다.\n\n저는 뛰어난 마케터로서 광고주님께 저란 사람을 성과로 기억에 남기는 게 제 목표입니다.",
      img: profile7,
    },
    {
      id: 8,
      name: "이준수",
      quote:
        '"제조, 유통, 판매 경험을 갖고 있는 마케팅 기획자"\n\n저는 다양한 경험을 보유하고 있는 마케팅 기획자이면서 소비자입니다! 소비자 관점으로 판매 전환이 될 수 있는 솔루션을 제공해드리겠습니다! 모두가 바라보는 매출 증가 성과로 보여드리겠습니다!',
      img: sample300x300,
    },
    {
      id: 9,
      name: "김혜선",
      quote:
        '"브랜드 성과 분석을 통한 지속 가능한 마케팅 전략 개발"\n\n브랜드의 성과 분석을 통해 전략을 개선하고, 시장 변화와 소비자 행동을 기반으로 트렌드를 파악하며 약점을 극복합니다.\n\n실패와 성공 요인을 분석하여 효과적인 마케팅 방안을 제안하고, 대표님의 전문 마케터로서 브랜드가 오랫동안 사랑받을 수 있도록 지원합니다.',
      img: sample300x300,
    },
    {
      id: 10,
      name: "방승배",
      quote:
        '"대표님의 킹 메이커가 되겠습니다"\n\n많은 분들이 온라인 광고와 마케팅을 막연히 시작하고 있는 상황에서, 효과적인 전략을 통해 실질적인 매출 상승을 이끌어내고 있습니다.\n\n빠른 결과를 원하시는 마음은 충분히 공감합니다.\n\n하지만, 성공을 위한 철저한 분석과 전략이 선행되어야 지속 가능한 성과를 만들 수 있습니다.\n\n이미 많은 고객사들이 저희의 체계적인 접근 방식을 통해 성공을 경험했습니다.\n\n이제 대표님께서 경험하실 차례입니다!',
      img: sample300x300,
    },
  ];

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX || e.touches[0].clientX);
    setDragStartTranslateX(currentTranslate); // Set the initial translate value
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    // Get the current mouse/touch position
    const moveX = e.clientX || e.touches[0].clientX;
    const diffX = moveX - dragStartX; // Calculate how far the user has dragged

    // Calculate the total width of the items (total width of all items + their gaps)
    const totalWidth = employees.length * 200; // 200 is the width of each item
    const maxTranslate = totalWidth - 200 * 3; // Assuming 3 items are visible at once

    // Calculate the new translateX value based on drag distance
    let newTranslate = dragStartTranslateX + diffX;

    // Prevent dragging beyond the last item
    if (newTranslate > 0) {
      newTranslate = 0; // Stop at the beginning
    } else if (newTranslate < -maxTranslate) {
      newTranslate = -maxTranslate; // Stop at the last item
    }

    // Update the translate state
    setCurrentTranslate(newTranslate);

    // Update currentIndex based on the new translate
    const index = Math.max(
      0,
      Math.min(employees.length - 1, Math.round(-newTranslate / 200))
    );
    setCurrentIndex(index);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="font-pre text-white bg-zinc-950 flex flex-col">
      {/* Top: change background image when received */}
      <section id="메인" className="bg-black text-black pb-10 px-2">
        <Link to="/">
          <img
            src={require("../assets/logo/png/1.png")}
            alt="Link to Home page"
            className="logo absolute top-4 left-4 z-50 rounded max-w-[120px] h-auto"
          />
        </Link>

        <div className="mx-48 p-8 bg-snow w-1/3 mb-32">
          <p className="font-semibold">사업자마케팅</p>
          <div className="my-12">
            <p className="text-xs">*24년 6월 기준</p>
            <p className="text-3xl/loose font-bold">
              계약업체 1950개 / 재계약율 94.6% <br />
              사업자마케팅 회사
            </p>
          </div>
        </div>
        {/* 3 items */}
        <div className="grid grid-cols-3 gap-4 text-white">
          <div className="col-span-1 p-6 bg-black border border-white">
            <p className="text-lg">계약업체</p>
            <p className="text-8xl font-bold">1950개</p>
          </div>
          <div className="col-span-1 p-6 bg-black border border-white">
            <p className="text-lg">재계약율</p>
            <p className="text-8xl font-bold">94.6%</p>
          </div>
          <div className="col-span-1 p-6 bg-black border border-white">
            <p className="text-lg">서비스 만족도</p>
            <p className="text-8xl font-bold">100%</p>
          </div>
        </div>
      </section>

      {/* 성공사례 */}
      <section id="성공사례" className="py-32 bg-gainsborough text-black">
        <span className="text-3xl font-bold mx-24">성공사례</span>
        <hr className="mx-24 mt-3 w-1/3 border-black" />
        <p className="mx-24 mt-4 text-lg">
          디움 코퍼레이션을 만나고 삶이 달라졌습니다.
        </p>

        {/* 이미지 + 사례 */}
        <div className="justify-items-center text-center grid gap-x-4 gap-y-6 grid-cols-3 pt-16 mx-24">
          {/* Each item wrapper */}
          <img
            src={sample300x300}
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src={sample300x300}
            alt="image2"
            className="rounded shadow-2xl"
          />
          <img
            src={sample300x300}
            alt="image3"
            className="rounded shadow-2xl"
          />
          <div className="text-lg">
            <strong>한달에 </strong>온라인으로만
            <br />
            <strong>예약 400건</strong> 들어오는 분당 병원
          </div>
          <div className="text-lg">
            마케팅 <strong>7개월</strong>만에
            <br />
            병원 <strong>한층 추가 확장</strong>
          </div>
          <div className="text-lg">
            마케팅 <strong>3개월</strong>만에
            <br />
            한달 수술 예약 모두 찬 성형외과
          </div>
        </div>
      </section>
      {/* 사원프로필 */}
      <section
        id="사원프로필"
        className="py-10 bg-snow text-black overflow-x-hidden"
      >
        <span className="text-3xl font-bold mx-24">사원 프로필</span>
        <hr className="mt-3 w-1/3 mx-24 mb-20 border-black" />

        {/* 가로 Rolling 직원 이미지들 + 코멘트 */}
        <div className="flex items-center justify-center relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex items-center cursor-grab active:cursor-grabbing flex-nowrap mx-40"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            style={{
              transform: `translateX(${currentTranslate}px)`,
              transition: "transform 0.3s ease-out", // Smooth transition for drag
            }}
          >
            {employees.map((employee, index) => (
              <div
                key={employee.id}
                className="flex flex-col items-center justify-center rounded-lg shadow-lg transition-transform duration-300 ease-out w-[200px]"
                style={{
                  transform: `translateX(${(index - currentIndex) * 200}px)`,
                }}
                onMouseDown={(e) => e.preventDefault()}
                onTouchStart={(e) => e.preventDefault()}
              >
                <img
                  src={employee.img}
                  alt={employee.name}
                  className="w-full h-[400px] object-cover rounded-md mb-4"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0 bg-snow w-64 h-auto rounded-lg flex items-center justify-center text-center shadow-md p-4">
                  <p
                    className="text-xs text-black"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {employee.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 마케팅 실패 이유 설명 */}
        <div className="mt-32 bg-gainsborough">
          <p className="font-bold text-3xl text-center pt-10">
            당신의 마케팅이 지금까지 실패했던 이유를 알려드리겠습니다.
          </p>
          <hr className="mx-24 mt-8 border-2 border-black" />
          <Accordion />
        </div>
      </section>
      {/* 서비스 소개 */}
      <section id="서비스소개" className="px-8 py-20 bg-snow">
        <div className="py-8 mb-6 bg-black rounded-tl-[36px] text-center mx-auto">
          <h2 className="text-xl mb-2 font-base">
            서비스 소개
            <br />
            <strong className="text-4xl font-semibold">
              장기적인 파트너를 찾습니다.
            </strong>
          </h2>
        </div>
        <div className="rounded-br-[36px] py-12 px-24 bg-black text-xl mx-auto">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="200"
            data-aos-easing="ease-in-out-sine"
          >
            1~2달 정도만 진행하고 그만할 것이라면 시작도 안하시는게 좋습니다.
            오랜기간 함께 성장할 클라이언트분들만 선별합니다.
            <br />
            <br />
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-offset="200"
            data-aos-easing="ease-in-out-sine"
          >
            이것이 가능하려면, 담당자의 역할이 중요합니다.
            <br />
            <br />
          </p>
          <div className="grid grid-cols-5 grid-rows-3 gap-4 text-black">
            <div className="col-span-1 row-span-1 w-full p-6 bg-gainsborough rounded-lg flex justify-center items-center">
              <img src={analysis} alt="analysis" className="w-1/2" />
            </div>
            <div className="col-span-4 row-span-1 w-full p-6 bg-gainsborough rounded-lg flex items-center">
              <div>
                <p className="font-semibold">
                  마케팅을 진행하기 앞서 분석이 중요합니다.
                </p>
                <p className="text-xl">
                  시장에 대한 분석, 방향성 검토, 상품에 대한 분석을 담당자가
                  직접 전문적으로 해줍니다.
                </p>
              </div>
            </div>
            <div className="col-span-1 row-span-1 w-full p-6 bg-gainsborough rounded-lg flex justify-center items-center">
              <img src={email} alt="email" className="w-1/2" />
            </div>
            <div className="col-span-4 row-span-1 w-full p-6 bg-gainsborough rounded-lg flex items-center">
              <div>
                <p className="font-semibold">
                  마케팅 투자대비 성과가 없을 것 같은 마케팅은 진행을 도와드리지
                  않습니다.
                </p>
                <p className="text-xl">
                  성공할만한 케이스들만 진행을 도와드리고, 저희 또한 그렇기
                  때문에 재연장율 94.6%라는 성과를 자랑하고 있습니다.
                </p>
              </div>
            </div>
            <div className="col-span-1 row-span-1 w-full p-6 bg-gainsborough rounded-lg flex justify-center items-center">
              <img src={checklist} alt="checklist" className="w-1/2" />
            </div>
            <div className="col-span-4 row-span-1 w-full p-6 bg-gainsborough rounded-lg flex items-center">
              <div>
                <p className="font-semibold">
                  관리를 받는다는 것은 당연한 겁니다.
                </p>
                <p className="text-xl">
                  유령회사, 담당자 부재 등 이슈는 감수해야할 영역이 아닙니다,
                  비용을 지불하셨으면 그에 맞는 관리를 받으셔야 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 자주 묻는 질문 */}
      <section
        id="FAQ"
        className="py-10 mx-auto px-4 bg-gainsborough text-black"
      >
        <FAQSection />
      </section>
      {/* 문의하기 */}
      <section
        id="문의"
        className="my-32 py-16 w-5/6 mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center text-center md:text-left border-2 border-white bg-black"
      >
        <div className="md:col-span-2 flex flex-col items-center md:items-start mx-12">
          <h2 className="text-3xl font-semibold mb-4">
            급하신가요? 빨리 매출을 극대화 하고 싶으신가요? <br />
            그러면 나가셔도 좋습니다.
          </h2>
          <p className="text-xl mb-4">
            급할수록 천천히, 그리고 탄탄히, 무엇보다 짧은 기간 내에 이뤄낸
            성과는 쉽게 무너지기 마련입니다.
          </p>
          <p className="text-xl">
            제대로 알아보시고, 확실한 믿음을 가지고 동행하시길 권고 드립니다.
          </p>
        </div>
        <div className="flex items-center">
          <button className="bg-transparent text-white border border-white rounded-lg hover:bg-white hover:text-black transition duration-300 text-5xl p-20">
            문의하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
