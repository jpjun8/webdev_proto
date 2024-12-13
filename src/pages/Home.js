// Reference Site: https://www.squarespace.com/website-design
import React from "react";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-col">
      {/* Wrapper for sections */}
      <div className="">
        <section className="px-8 pt-96 pb-20 bg-indigo-950">
          <div className="text-white">
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
        <section id="section1" className="px-8 pt-32 pb-20 bg-slate-300">
          <h1 className="text-2xl font-bold mb-10 text-center">성공사례</h1>
          <div className="grid grid-cols- gap-4">
            <p className="col-start-1 col-end-4 text-3xl text-center">
              에이디파트너스를 만나고 삶이 달라졌습니다.
            </p>
          </div>

          {/* 이미지 + 사례 */}
          <div className="justify-items-center grid gap-x-4 gap-y-6 grid-cols-3 pt-20">
            {/* Each item wrapper */}
            <img src="https://via.placeholder.com/300x300" alt="image1"></img>
            <img src="https://via.placeholder.com/300x300" alt="image2"></img>
            <img src="https://via.placeholder.com/300x300" alt="image3"></img>
            <div>인터뷰 멘트 매출이 존나게 올라갔어요 앙기모띠 1</div>
            <div>인터뷰 멘트 방문자수가 존나게 올라갔어요 앙김</div>
            <div>인터뷰 멘트 3</div>
          </div>
        </section>

        {/* 직원소개 */}
        <section id="section2" className="px-8 pt-20 pb-20 bg-slate-400">
          <h2 className="text-2xl font-bold mb-10 text-center">직원소개</h2>
          {/* 가로 Rolling 직원 이미지들 + 코멘트 */}
          <div className="text-center">어쩌고 저쩌고 자기소개</div>

          {/* 마케팅 실패 이유 어쩌고 */}
          <p className="font-bold text-3xl text-center">
            당신의 마케팅이 지금까지 실패했던 이유를 알려드리겠습니다.
          </p>
          <p className="px-16">
            1. 마케팅을 잘 알아보지 못하고 <br />
            2. 갖고 있는 아이템이 준비되지 않았습니다 <br />
            3. 그저 남에게 의존하는 <br />
          </p>
        </section>

        {/* 서비스 소개 */}
        <section id="section3" className="px-8 pt-20 pb-20 bg-slate-600 text-center">
          <h2 className="text-2xl font-bold mb-10">서비스 소개</h2>
          <p>
            <strong>장기적인 파트너를 찾습니다.</strong>
            <br />
            <p>1~2달 정도만 진행하고 그만할 것이라면</p>
          </p>
        </section>

        {/* 자주 묻는 질문 */}
        <section id="section4" className="px-8 pt-20 pb-20 bg-slate-800 text-center">
          <h2 className="text-2xl font-bold mb-10">자주 묻는 질문</h2>
          <strong>아직 궁금한 점이 있으신가요?</strong>
        </section>

        {/* 문의하기 */}

      </div>
    </div>
  );
};

export default Home;
