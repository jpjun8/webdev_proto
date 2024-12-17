// Reference Site: https://www.squarespace.com/website-design
import React, { useRef } from "react";
// import HorizontalMenu from "../components/HorizontalMenu";

const employees = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "Strive for progress, not perfection.",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote: "Success is a journey, not a destination.",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote: "The best way to predict the future is to create it.",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote: "Dream big, work hard.",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote: "Believe you can and you’re halfway there.",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    quote: "Believe you can and you’re halfway there.",
  },
  {
    id: 7,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote: "Believe you can and you’re halfway there.",
  },
  {
    id: 8,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    quote: "Believe you can and you’re halfway there.",
  },
  // Add more employees as needed
];

const Home = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="font-pre text-white bg-black">
      {/* Wrapper for sections */}
      <div className="">
        {" "}
        {/* mx-32 제거: 모바일에서 구림 */}
        <section className="px-4 pt-40 pb-20 bg-neutral-950">
          <div className="">
            <p>사업자 마케팅</p>
            <p>*24년 6월 기준</p>
            <p>
              계약업체 1950개 / 재계약율 94.6% <br />
              사업자마케팅 회사
            </p>
            <p>상품에 관한 이야기가 필요할까요? 결과물로 증명하겠습니다.</p>
          </div>
        </section>
        {/* 성공사례 */}
        <section id="section1" className="px-4 pt-28 pb-20 bg-neutral-900">
          <h1 className="text-2xl font-bold mb-10 text-center">성공사례</h1>
          <div className="grid grid-cols- gap-4">
            <p className="col-start-1 col-end-4 text-3xl text-center font-bold">
              에이디파트너스를 만나고 삶이 달라졌습니다.
            </p>
          </div>

          {/* 이미지 + 사례 */}
          <div className="justify-items-center text-center grid gap-x-4 gap-y-6 grid-cols-3 pt-16 font-bold px-4">
            {/* Each item wrapper */}
            <img
              src="https://via.placeholder.com/300x300"
              alt="image1"
              className="rounded shadow-2xl"
            ></img>
            <img
              src="https://via.placeholder.com/300x300"
              alt="image2"
              className="rounded shadow-2xl"
            ></img>
            <img
              src="https://via.placeholder.com/300x300"
              alt="image3"
              className="rounded shadow-2xl"
            ></img>
            <div>인터뷰 멘트 매출이 존나게 올라갔어요 앙기모띠</div>
            <div>인터뷰 멘트 방문자수가 존나게 올라갔어요 앙기모띵 </div>
            <div>인터뷰 멘트 단톡방은 무슨 의미인지 잘 모르겠어용 히히</div>
          </div>
        </section>
        {/* 직원소개 */}
        <section id="section2" className="px-4 pt-20 pb-20 bg-neutral-800">
          <h2 className="text-2xl font-bold mb-10 text-center">직원소개</h2>
          {/* 가로 Rolling 직원 이미지들 + 코멘트 */}
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Our Team</h1>
            <div className="flex items-center space-x-4">
              {/* Left Arrow Button */}
              <button
                onClick={scrollLeft}
                className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none"
              >
                <span className="text-lg">&larr;</span>
              </button>

              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-hidden space-x-6 pb-4 w-full"
              >
                {employees.map((employee, index) => (
                  <div
                    key={index}
                    className="flex-none w-64 bg-white p-4 rounded-lg shadow-md"
                  >
                    <img
                      src={employee.image}
                      alt={employee.id}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="text-gray-500 mt-2">"{employee.quote}</p>
                  </div>
                ))}
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={scrollRight}
                className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none"
              >
                <span className="text-lg">&rarr;</span>
              </button>
            </div>
          </div>

          {/* 마케팅 실패 이유 어쩌고 */}
          <p className="font-bold text-3xl text-center pt-20">
            당신의 마케팅이 지금까지 실패했던 이유를 알려드리겠습니다.
          </p>
          <p className="px-4 pt-16">
            1. 마케팅을 잘 알아보지 못하고, 무작정 마케팅 회사를 찾습니다.{" "}
            <br /> 대부분 전화받으시는 회사는 일반적인 광고 대행사일 확률이
            95%입니다. 직접적으로 어떤 마케팅이 있고, 어떤 효과를 볼 수 있는지,
            어떤 마케팅이 정말 필요한 마케팅인지 인지를 해야합니다. 그렇지
            못하면, 실패합니다. <br /> <br />
            2. 갖고 있는 아이템이 준비되지 않았습니다. <br /> 남들이 다 판매하는
            아이템, 시즌이 다 지난 아이템, 갑자기 유행을 탄 아이템, 이런
            아이템은 오래 살아남기 힘듭니다. 사소하지만 차별점을 두고, 미리
            준비하고, 시장을 예측하면서 분석해서 다가가야지만 살아남을 수
            있습니다. 그렇지 못하면, 실패합니다. <br /> <br />
            3. 그저 남에게 의존하는 마케팅을 합니다. <br /> 마케팅 회사는 물론
            전문가일 수 있습니다. 보다 지식이 많고 보다 여러방면으로 내 아이템을
            활성화 시킬 수도 있습니다. 하지만 평생 마케팅 회사를 통해서 사업을
            성장시키실 건가요? 아닙니다, 모르는건 배워가고, 부족한건 채워가면서
            함께 성장을 해야지만, 사업이 커지고 롱런 할 수가 있습니다. 그렇지
            못하면, 실패합니다.
          </p>
        </section>
        {/* 서비스 소개 */}
        <section id="section3" className="px-4 pt-20 pb-20 bg-neutral-700">
          <h2 className="text-xl font-bold mb-10 text-center">서비스 소개</h2>
          <div className="px-4 pt-16">
            <strong>장기적인 파트너를 찾습니다.</strong>
            <br />
            <p>
              1~2달 정도만 진행하고 그만할 것이라면 시작도 안하시는게 좋습니다.
              오랜기간 함께 성장할 클라이언트분들만 선별합니다.
              <br />
              <br />
              이것이 가능하려면, 담당자의 역할이 중요합니다, 따라서
              <br />
              <br />
              1. 마케팅을 진행하기 앞서 시장에 대한 분석, 방향성 검토, 상품에
              대한 분석을 담당자가 직접 전문적으로 해줍니다.
              <br />
              <br />
              2. 마케팅 투자대비 성과가 없을 것 같은 마케팅은 진행을 도와드리지
              않습니다. 성공할만한 케이스들만 진행을 도와드리고, 저희 또한
              그렇기 때문에 재연장율 92%라는 성과를 자랑하고 있습니다.
              <br />
              <br />
              3. 관리를 받는다는 것은 당연한 겁니다. 유령회사, 담당자 부재 등
              이슈는 감수해야할 영역이 아닙니다, 비용을 지불하였으면, 그에 맞는
              관리를 받으셔야 합니다.
            </p>
          </div>
        </section>
        {/* 자주 묻는 질문 */}
        <section
          id="section4"
          className="px-4 pt-20 pb-20 bg-neutral-600 text-center"
        >
          <h2 className="text-2xl font-bold mb-10">자주 묻는 질문</h2>
          <strong className="text-xl">아직 궁금한 점이 있으신가요?</strong>
          <br />
          <br />
          <div className="text-left">
            <p>1. 광고비 투자 대비 이뤄낸 성과가 없으면요?</p>
            <p>
              그건 마케팅 회사 잘못입니다. 성과가 없는 마케팅은 실패한
              마케팅입니다, 에이디파트너스센터는 확실한 담당자들의 분석으로
              성과있는 마케팅만을 도와드립니다.
            </p>
            <br />
            <p>2. 마케팅이 곧 광고 아니냐?</p>
            <p>
              아니라고 봅니다, 광고는 누구나 손쉽게 진행알 수 있는 것이
              광고입니다. 메타광고, gfa광고, 배너광고, cpc광과 누구나 손쉽게
              접근을 할 수 있죠, 하지만 마케팅은 분석이 필요하고, 어떠한
              방향으로 어떠한 목표를 잡고 나아갈지가 중요합니다.
            </p>
            <br />
            <p>
              3. 그렇게 마케팅을 잘하면 스스로 사업을 운영하면 되는게 아니냐?
            </p>
            <p>
              맞습니다, 하지만 현재 저희와 함께하시는 2000여명의 클라이언트
              대표님들, 각 각 담당자들이 신경쓰기에도 바쁩니다, 우리 회사가
              단독으로 성장하는 것이 목표가 아닌, 클라이언트 분들을 도와서 함께
              성장하는 것이 저희의 목표입니다.
            </p>
            <br />
            <p>4. 너도하고, 나도하면 내부적인 경쟁구도 아니냐?</p>
            <p>
              가망이 없거나, 성공 확률이 낮은 클라이언트 분들은 저희도 진행을
              도와드리지 않습니다. 선별하고 선별하여서 성과를 극대화 시킬 수
              있는 분들 한해서 컨설팅 및 마케팅 진행을 도와드립니다.
            </p>
            <br />
            <p>5. 에이디파트너스센터도 똑같은 대행사 아니냐?</p>
            <p>
              대행사란 대신 해준다는 의미도 있고, 위에 있는 실행사에게서 상품을
              받아서 판매하는 사업자들을 의미하기도 합니다. 저희는 직접적으로
              마케팅을 개발하고 실행하면서 다이렉트로 클라이언트 분들 관리에
              참여하는 마케팅 실행사입니다.
            </p>
          </div>
        </section>
        {/* 문의하기 */}
      </div>
    </div>
  );
};

export default Home;
