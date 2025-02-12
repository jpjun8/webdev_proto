// Reference Site: https://www.squarespace.com/website-design
import React, { useEffect, useState, useRef } from "react";
// import HorizontalMenu from "../components/HorizontalMenu";
import FAQSection from "../components/FAQ";
import Accordion from "../components/Accordion";

// Images
import sample300x300 from "../assets/samples/300x300.png";

const employees = [
  { id: 1, name: "Alice", role: "Developer", img: sample300x300 },
  { id: 2, name: "Bob", role: "Designer", img: sample300x300 },
  { id: 3, name: "Charlie", role: "Manager", img: sample300x300 },
  { id: 4, name: "Diana", role: "Analyst", img: sample300x300 },
  { id: 5, name: "John", role: "CEO", img: sample300x300 },
];

const Home = () => {
  // Page Title
  useEffect(() => {
    document.title = "Home | AD";
  }, []);

  const [currentIndex, setCurrentIndex] = useState(2);
  const dragStartX = useRef(0);
  const dragThreshold = 5; // Minimum pixels to trigger a slide

  const handleDragStart = (e) => {
    dragStartX.current = e.clientX || e.touches[0].clientX;
  };

  const handleDragEnd = (e) => {
    const dragEndX =
      e.clientX || (e.changedTouches && e.changedTouches[0].clientX);

    if (dragEndX - dragStartX.current > dragThreshold) {
      // Dragged right
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    } else if (dragStartX.current - dragEndX > dragThreshold) {
      // Dragged left
      setCurrentIndex((prev) => Math.min(prev + 1, employees.length - 1));
    }
  };

  return (
    <div className="font-pre text-white bg-zinc-950 flex flex-col overflow-x-hidden">
      {/* Top: change background image when received */}
      <section id="메인" className="bg-black text-black pb-64">
        <div className="mx-36 p-8 bg-snow w-1/3">
          <p className="font-semibold">사업자마케팅</p>
          <div className="my-12">
            <p className="text-xs">*24년 6월 기준</p>
            <p className="text-3xl/loose font-bold">
              계약업체 1950개 / 재계약율 94.6% <br />
              사업자마케팅 회사
            </p>
          </div>

          <span className="inline-block pb-2">
            상품에 관한 이야기가 필요할까요? 결과물로 증명하겠습니다.
          </span>
        </div>
      </section>

      {/* 성공사례 */}
      <section id="성공사례" className="py-32 bg-gainsborough text-black">
        <span className="text-3xl font-bold mx-24">성공사례</span>
        <hr className="mx-24 mt-3 w-1/3 border-black" />
        <p className="mx-24 mt-4 text-lg">
          에이디파트너스를 만나고 삶이 달라졌습니다.
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
      <section id="사원프로필" className="py-32 bg-snow text-black">
        <span className="text-3xl font-bold mx-24">사원 프로필</span>
        <hr className="mt-3 w-1/3 mx-24 mb-20 border-black" />
        {/* 가로 Rolling 직원 이미지들 + 코멘트 */}

        <div className="flex items-center justify-center w-full relative space-x-4 my-16">
          <div
            className="flex items-center gap-8 cursor-grab"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            {employees.map((employee, index) => (
              <div
                key={employee.id}
                className={`flex-shrink-0 w-64 h-[26rem] rounded-lg shadow-lg transition-transform duration-300 ${
                  index === currentIndex ? "scale-110" : "scale-90"
                }`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 160}px)`,
                }}
                onMouseDown={(e) => e.preventDefault()}
                onTouchStart={(e) => e.preventDefault()}
              >
                <img
                  src={employee.img}
                  alt={employee.name}
                  className="w-full h-full object-cover rounded-md mb-4"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0 bg-red-500 w-80 h-36 rounded-lg flex items-center justify-center text-center shadow-md">
                  <p className="text-sm text-white">{employee.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 마케팅 실패 이유 설명 */}
        <div className="mt-64 bg-gainsborough">
          <p className="font-bold text-2xl text-center pt-20">
            당신의 마케팅이 지금까지 실패했던 이유를 알려드리겠습니다.
          </p>
          <hr className="mx-24 mt-8 mb-20 border-1 border-black" />
          <Accordion />
        </div>
      </section>
      {/* 서비스 소개 */}
      <section id="서비스소개" className="px-4 py-20 bg-snow">
        <div className="py-8 mb-6 bg-zinc-800 rounded-tl-[36px] text-center w-5/6 mx-auto">
          <h2 className="text-lg mb-2 font-base">
            서비스 소개
            <br />
            <strong className="text-3xl font-semibold">
              장기적인 파트너를 찾습니다.
            </strong>
          </h2>
        </div>
        <div className="rounded-br-[36px] py-12 px-24 bg-zinc-800 text-lg w-5/6 mx-auto">
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
            이것이 가능하려면, 담당자의 역할이 중요합니다, 따라서
            <br />
            <br />
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="200"
            data-aos-easing="ease-in-out-sine"
          >
            1. 마케팅을 진행하기 앞서 시장에 대한 분석, 방향성 검토, 상품에 대한
            분석을 담당자가 직접 전문적으로 해줍니다.
            <br />
            <br />
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-offset="200"
            data-aos-easing="ease-in-out-sine"
          >
            2. 마케팅 투자대비 성과가 없을 것 같은 마케팅은 진행을 도와드리지
            않습니다. 성공할만한 케이스들만 진행을 도와드리고, 저희 또한 그렇기
            때문에 재연장율 92%라는 성과를 자랑하고 있습니다.
            <br />
            <br />
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out-sine"
          >
            3. 관리를 받는다는 것은 당연한 겁니다. 유령회사, 담당자 부재 등
            이슈는 감수해야할 영역이 아닙니다, 비용을 지불하였으면, 그에 맞는
            관리를 받으셔야 합니다.
          </p>
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
        className="my-32 py-16 w-5/6 mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center text-center md:text-left border-2 border-white bg-black"
      >
        <div className="md:col-span-2 flex flex-col items-center md:items-start mx-12">
          <h2 className="text-2xl font-semibold mb-4">
            급하신가요? 빨리 매출을 극대화 하고 싶으신가요? <br />
            그러면 나가셔도 좋습니다.
          </h2>
          <p className="mb-4">
            급할수록 천천히, 그리고 탄탄히, 무엇보다 짧은 기간 내에 이뤄낸
            성과는 쉽게 무너지기 마련입니다.
          </p>
          <p className="text-lg">
            제대로 알아보시고, 확실한 믿음을 가지고 동행하시길 권고 드립니다.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="px-12 py-3 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
            문의하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
