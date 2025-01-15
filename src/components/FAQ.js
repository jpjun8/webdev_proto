import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-y border-black py-4">
      <div className="flex items-center">
        <p
          className={`text-xl font-medium ml-4 ${
            isOpen ? "text-black" : "text-slate-600"
          }`}
        >
          Q&nbsp;&nbsp;&nbsp;{question}
        </p>
        <button
          onClick={toggleAnswer}
          className={`w-16 h-16 ml-auto flex items-center justify-center rounded-full ${
            isOpen ? "text-black" : "text-slate-600"
          }`}
        >
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="text-black mt-2 ml-4 text-lg/loose">
          <p className="text-xl">A</p>
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: "광고비 투자 대비 이뤄낸 성과가 없으면요?",
      answer:
        "그건 마케팅 회사 잘못입니다. 성과가 없는 마케팅은 실패한 마케팅입니다. 에이디파트너스센터는 확실한 담당자들의 분석으로 성과있는 마케팅만을 도와드립니다.",
    },
    {
      question: "마케팅이 곧 광고 아니냐?",
      answer:
        "아니라고 봅니다, 광고는 누구나 손쉽게 진행알 수 있는 것이 광고입니다. 메타광고, gfa광고, 배너광고, cpc광과 누구나 손쉽게 접근을 할 수 있죠, 하지만 마케팅은 분석이 필요하고, 어떠한 방향으로 어떠한 목표를 잡고 나아갈지가 중요합니다.",
    },
    {
      question: "그렇게 마케팅을 잘하면 스스로 사업을 운영하면 되는게 아니냐?",
      answer:
        "맞습니다, 하지만 현재 저희와 함께하시는 2000여명의 클라이언트 대표님들, 각 각 담당자들이 신경쓰기에도 바쁩니다, 우리 회사가 단독으로 성장하는 것이 목표가 아닌, 클라이언트 분들을 도와서 함께 성장하는 것이 저희의 목표입니다.",
    },
    {
      question: "너도하고, 나도하면 내부적인 경쟁구도 아니냐?",
      answer:
        "가망이 없거나, 성공 확률이 낮은 클라이언트 분들은 저희도 진행을 도와드리지 않습니다. 선별하고 선별하여서 성과를 극대화 시킬 수 있는 분들 한해서 컨설팅 및 마케팅 진행을 도와드립니다.",
    },
    {
      question: "에이디파트너스센터도 똑같은 대행사 아니냐?",
      answer:
        "대행사란 대신 해준다는 의미도 있고, 위에 있는 실행사에게서 상품을 받아서 판매하는 사업자들을 의미하기도 합니다. 저희는 직접적으로 마케팅을 개발하고 실행하면서 다이렉트로 클라이언트 분들 관리에 참여하는 마케팅 실행사입니다.",
    },
  ];

  return (
    <div className="">
      <div className="text-center mb-12">
        <p className="text-md">자주 묻는 질문</p>
        <h2 className="text-3xl/loose">아직 궁금한 점이 있으신가요?</h2>
      </div>
      {faqData.map((faq, index) => {
        return (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        );
      })}
    </div>
  );
};

export default FAQSection;
