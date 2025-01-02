import React from "react";
import useScrollToHash from "../components/useScrollToHash";

const Solution = () => {
  useScrollToHash();

  return (
    // Section Wrapper
    <div className="flex-col mt-32">
      {/* N Store */}
      <section id="nstore" className="" data-aos="fade-up">
        <h2 className="font-bold text-3xl text-center my-8">N Store</h2>
        {/* Chapters 1, 2, 3 */}
        <div className="flex justify-between w-full mx-auto space-x-4 p-2">
          <div className="flex-1 h-32 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 1.</p>
            <p className="text-2xl font-bold">
              SEO가이드라인에 맞춘 전문적인 컨설팅
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 네이버 SEO(검색엔진최적화) GUIDE LINE에 맞춘
              전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를 제공
              합니다.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 2.</p>
            <p className="text-2xl font-bold">
              프로그램x 바이럴 sns타켓 마케팅 실제고객 유입 ok
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 체계적인 솔루션을 통한 순위 상승 및
              브랜드화를 이끌어 드립니다.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 3.</p>
            <p className="text-2xl font-bold">어뷰징 Zero 컴플레인 Zero</p>
            <br />
            <p className="text-xs">
              에이디파트너스센터의 N쇼핑 솔루션 마케팅은 단 한건의 어뷰징 사례도
              발생 하지 않았으며 고객사의 만족도 최상의 서비스를 제공 하고
              있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* C Store */}
      <section id="cstore" className="" data-aos="fade-up">
        <h2 className="font-bold text-3xl text-center my-8">C Store</h2>
        {/* Chapters 1, 2, 3 */}
        <div className="flex justify-between w-full mx-auto space-x-4 p-2">
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 1.</p>
            <p className="text-2xl font-bold">
              SEO가이드라인에 맞춘 전문적인 컨설팅
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 전문적인 개발실을 통해 최적화된
              SEO(검색엔진최적화) 작업을 도와드리고, 상품을 최적화된 상태로
              만들어 드립니다.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 2.</p>
            <p className="text-2xl font-bold">
              바이럴 sns 타켓 불법 프로그램이 아닌 실제 유저들을 통한 마케팅
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 위험한 불법 프로그램을 통한 마케팅이 아닌,
              실제 유저들을 통해 상품을 최적화 해드립니다.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 3.</p>
            <p className="text-2xl font-bold">
              전무후무한 어뷰징 사례, 고객사 만족도 MAX
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터의 쿠팡 최적화 마케팅은 단 한건의 어뷰징 사례도
              발생하지 않았으며, 늘 고객사를 최우선으로 만족도가 높은 서비스를
              제공하고 있습니다. 단순한 순위상승 목적이아닌, 브랜드에 대한
              이해와 상품에 대한 매출전환까지 이루어질 수 있도록 마케터들이
              준비하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* K Shopping */}
      <section id="kshopping" className="" data-aos="fade-up">
        <h2 className="font-bold text-3xl text-center my-8">K Shopping</h2>
        {/* Chapters 1, 2, 3 */}
        <div className="flex justify-between w-full mx-auto space-x-4 p-2">
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 1.</p>
            <p className="text-2xl font-bold">
              SEO가이드라인에 맞춘 전문적인 컨설팅
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 전문적인 개발실을 통해 최적화된
              SEO(검색엔진최적화) 작업을 도와드리고, 상품을 최적화된 상태로
              만들어 드립니다.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 2.</p>
            <p className="text-2xl font-bold">
              바이럴 sns 타켓 실제 유저들을 통한 마케팅
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 위험한 불법 프로그램을 통한 마케팅이 아닌,
              실제 유저들을 통해 상품을 최적화 해드립니다.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 3.</p>
            <p className="text-2xl font-bold">
              클라이언트가 원하는 영역에 대한 서비스 제공
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터의 카카오톡 마케팅은 쇼핑하기 또는 선물하기 등,
              늘 고객사가 원하는 만족도가 높은 서비스 제공이 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* N Place */}
      <section id="nplace" className="" data-aos="fade-up">
        <h2 className="font-bold text-3xl text-center my-8">N Place</h2>
        {/* Chapters 1, 2, 3 */}
        <div className="flex justify-between w-full mx-auto space-x-4 p-2">
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 1.</p>
            <p className="text-2xl font-bold">
              SEO가이드라인에 맞춘 전문적인 컨설팅
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 네이버 SEO(검색엔진최적화) GUIDE LINE에 맞춘
              전문적인 데이터를 기반으로 올바른 상품 최적화 서비스를 제공하여
              네이버 통합 검색 및 지도 검색 시 플레이스 영역에 운영중인
              업체정보가 상단의 노출.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 2.</p>
            <p className="text-2xl font-bold">
              플레이스에 대한 모든 컨텐츠 관리 및 제작
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 네이버가 제안하는 가이드와 축적된 카피라이팅
              노하우를 바탕으로 고퀄리티의 리뷰와 네이버에서 제공하는 컨텐츠
              제작을 제공합니다.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 3.</p>
            <p className="text-2xl font-bold">
              클라이언트가 원하는 컨텐츠에 대한 서비스 제공
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 다양한 플레이스 기반 마케팅 컨설팅이 준비되어
              있어 리뷰, 상위노출, 블로그 등 클라이언트의 원하는 서비스 제공이
              가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section id="instagram" className="" data-aos="fade-up">
        <h2 className="font-bold text-3xl text-center my-8">Instagram</h2>
        {/* Chapters 1, 2, 3 */}
        <div className="flex justify-between w-full mx-auto space-x-4 p-2">
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 1.</p>
            <p className="text-2xl font-bold">
              MZ들이 선호하는 인스타그램, 활성화가 고민이라면
              에이디파트너스센터로.
            </p>
            <br />
            <p className="text-xs">
              갈수록 빠르게 활성화가 되고 있는 짧은 영상 컨텐츠, 한 발만 늦어도
              소비자는 떠나갑니다. 에이디파트너스센터는 누구보다 빠르고 정확하게
              타켓팅을 통한 앞서가는 마케팅을 제공합니다.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 2.</p>
            <p className="text-2xl font-bold">
              영상 제작, 컨텐츠 구상, 광고 집행 에이디파트너스센터에서 해결이
              가능합니다.
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 전문적인 촬영팀을 운영하며, 최대한 고객사의
              니즈를 충족시켜 영상에 대한 완성도를 높이고, 직접 광고를 진행하여
              캠페인의 성공도도 끌어 올립니다.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 3.</p>
            <p className="text-2xl font-bold">
              구매전환율을 높이는 영상이 고민이라면 에이디파트너스센터가
              컨설팅해드립니다.
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터의 카카오톡 마케팅은 쇼핑하기 또는 선물하기 등,
              늘 고객사가 원하는 만족도가 높은 서비스 제공이 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Youtube */}
      <section id="youtube" className="" data-aos="fade-up">
        <h2 className="font-bold text-3xl text-center my-8">Youtube</h2>
        {/* Chapters 1, 2, 3 */}
        <div className="flex justify-between w-full mx-auto space-x-4 p-2">
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 1.</p>
            <p className="text-2xl font-bold">
              SEO가이드라인에 맞춘 전문적인 컨설팅{" "}
            </p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 네이버 SEO(검색엔진최적화)에 맞춘 전문적인
              데이터를 기반으로 올바른 상품 최적화 서비스를 제공하여 유튜브 내
              동영상을 최적화 된 상태로 만들어 드립니다.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 2.</p>
            <p className="text-2xl font-bold">
              에이디파트너스센터만의 차별화화
            </p>
            <br />
            <p className="text-xs">
              A. 세계적인 매체 유튜브에서 원하는 키워드로 상단의 상위 노출
              시켜드립니다. <br />
              B. 실제 유저를 통한 수작업으로 진행 되기 때문에 블라인드
              위험으로부터 안전합니다. <br />
              C. 영상 제작에 어려움을 겪으실 경우 전문 영상 제작 팀 또한 준비
              되어 있으니 충분한 활용 가능합니다.
            </p>
          </div>
          <div className="flex-1 h-64 flex flex-col p-2">
            <p className="text-xs italic my-2">Chapter 3.</p>
            <p className="text-2xl font-bold">협업 유튜브 마케팅</p>
            <br />
            <p className="text-xs">
              에이디파트너스센터는 다양한 유튜버와 협업을 하여 클라이언트의
              방향성에 맞는 유튜버와 채널을 추천하여 해당 상품에 대한 홍보를
              진행 하고 있습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
