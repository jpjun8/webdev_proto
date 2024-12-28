import React from "react";
import useScrollToHash from "../components/useScrollToHash";

const AD = () => {
  useScrollToHash();

  return (
    // Section Wrapper
    <div className="flex-col items-center text-center mt-40 bg-black text-white">
      {/* CEO */}
      <section id="CEO" className="">
        <p>
          (주)에이디파트너스센터
          <br />
          대체로 사람들은 온라인 광고 회사를 믿지 않습니다.
          <br />
          온라인 마케팅 사업에서 가장 중요한 것은 '신뢰도'입니다.
          <br />
          <br />
          "모든것을 걸고 말씀드리겠습니다"
          <br />
          클라이언트분들이 만족하지 못한다면 에이디파트너스센터 회사
          내리겠습니다.
          <br />
          <br />
          급할 것 없습니다.
          <br />
          최대한 이곳의 정보를 보시고, 신중히 판단해주세요.
          <br />
          <br />
          아무것도 모른채 무턱대고 광고를 하는 분들이 요즘 너무 많습니다.
          <br />
          급하신 마음은 충분히 이해합니다.
          <br />
          <br />
          하지만 급할수록 돌다리를 두들겨 건너야 합니다.
          <br />
          그렇지 않으면 수 많은 광고대행사에게 이용 당할 확률이 커집니다.
          <br />
          <br />
          온라인 광고의 실패는 "무지"에서 시작됩니다.
          <br />
          <br />
          여러분이 원하는 결과를 눈으로 보여드리겠습니다.
          <br />
          <br />
          지금부터 하는 말이 자신의 생각과 맞는지, 그럴듯하게만 말하는건지
          설득력 있는지, <br />
          진짜 실력이 있는지 충분히 검토를 해주세요. <br />
          대표님들의 마음을 바꾸기 위해서 저희가 해 드리는 것은 한계가 있습니다.{" "}
          <br />
          스스로 변화해야 합니다. <br />
          <br />
          이곳에 의뢰하지 않으셔도 좋습니다. <br />
          저희 레퍼런스, 운영 방식 등을 보시면서 1%라도 "믿음과 신뢰" 를
          보여드리고자 <br />
          감히 말씀드립니다. <br />
          <br />
          다양한 가능성에 다가가기 위해 수많은 제품과 서비스가 존재 합니다.{" "}
          <br />
          하지만 장애물을 이겨내지 못하고, <br />
          원하는 수준까지 속도감 있게 성장하지 못하여 시장에서 사라져 버리게
          됩니다. <br />
          대부분 마케팅 역량이 부족해서 발생한 실패입니다. <br />
          에이디파트너스센터가 보유한 마케팅 역량으로 컨설팅을 제공하고 <br />
          클라이언트가 원하는 수준까지 성장시킬 수 있습니다. <br />
          여러분의 꿈을 현실로 만들어 드립니다. <br />
          에이디파트너스와 함께 더 큰 비전을 위해 나아갑시다. <br />
        </p>
      </section>

      {/* Company */}
      <section id="company" className="mt-28">
        <p>COMPANY</p>
        <div className="justify-items-center font-bold px-4 space-y-2 mt-2">
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="image1"
            className="rounded shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default AD;
