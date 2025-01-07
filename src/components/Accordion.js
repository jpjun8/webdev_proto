import React, { useState } from "react";

const items = [
  {
    id: 1,
    title: "1. 마케팅을 잘 알아보지 못하고, 무작정 마케팅 회사를 찾습니다.",
    content:
      "대부분 전화받으시는 회사는 일반적인 광고 대행사일 확률이 95%입니다. 직접적으로 어떤 마케팅이 있고, 어떤 효과를 볼 수 있는지, 어떤 마케팅이 정말 필요한 마케팅인지 인지를 해야합니다. 그렇지 못하면, 실패합니다.",
  },
  {
    id: 2,
    title: "2. 갖고 있는 아이템이 준비되지 않았습니다.",
    content:
      "남들이 다 판매하는 아이템, 시즌이 다 지난 아이템, 갑자기 유행을 탄 아이템, 이런 아이템은 오래 살아남기 힘듭니다. 사소하지만 차별점을 두고, 미리 준비하고, 시장을 예측하면서 분석해서 다가가야지만 살아남을 수 있습니다. 그렇지 못하면, 실패합니다.",
  },
  {
    id: 3,
    title: "3. 그저 남에게 의존하는 마케팅을 합니다.",
    content:
      "마케팅 회사는 물론 전문가일 수 있습니다. 보다 지식이 많고 보다 여러방면으로 내 아이템을 활성화 시킬 수도 있습니다. 하지만 평생 마케팅 회사를 통해서 사업을 성장시키실 건가요? 아닙니다, 모르는건 배워가고, 부족한건 채워가면서 함께 성장을 해야지만, 사업이 커지고 롱런 할 수가 있습니다. 그렇지 못하면, 실패합니다.",
  },
];

const Accordion = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(0);

  const toggleItem = (id) => {
    setActiveItem((prev) => (prev === id ? null : id));
    setSliderPosition(id - 1); // Update slider position based on the item index
  };

  return (
    <div className="relative flex flex-row items-start space-y-4 text-xl py-16">
      {/* Accordion Items */}
      <div className="flex flex-col items-center space-y-8 w-2/3 mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="border border-gray-500 w-full overflow-hidden transition-all duration-300"
            style={{
              height: activeItem === item.id ? "auto" : "50px",
            }}
          >
            <button
              className={`w-full text-left px-4 py-2 font-bold transition-colors duration-300 ${
                activeItem === item.id ? "text-white" : "text-zinc-400"
              }`}
              onClick={() => toggleItem(item.id)}
            >
              {item.title}
            </button>
            <div
              className={`px-4 py-2 transition-opacity duration-300 ${
                activeItem === item.id ? "opacity-100" : "opacity-0"
              }`}
              style={{
                height: activeItem === item.id ? "auto" : "0",
                overflow: "hidden",
              }}
            >
              <p className="text-lg">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tracking Slider */}
      <div className="absolute right-32 top-0 h-full flex flex-col items-center">
        <div className="relative w-1 h-full bg-gray-600">
          {/* Slider */}
          <div
            className="absolute w-4 h-4 bg-white rounded-full transform -translate-x-1/2 cursor-pointer transition-transform duration-300"
            style={{
              top: `${(sliderPosition / (items.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
