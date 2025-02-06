import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, Element } from "react-scroll";
import Postcode from "react-daum-postcode";

const Recruiting = () => {
  // Page Title
  useEffect(() => {
    document.title = "Recruiting | AD";
  }, []);

  // EmailJS Handlings
  const [agreement, setAgreement] = useState(false); // 동의여부
  const [userName, setUserName] = useState(""); // 이름
  const [phoneNumber, setPhoneNumber] = useState(""); // 연락처
  const [email, setEmail] = useState(""); // 이메일
  const [birthday, setBirthday] = useState(""); // 생년월일
  const [job, setJob] = useState(""); // 직종
  const [skill, setSkill] = useState(""); //전문 기술
  const [experience, setExperience] = useState(""); // 경력
  const [education, setEducation] = useState(""); // 교육
  const [error, setError] = useState(""); // 에러

  // Address Functions
  const [address, setAddress] = useState({
    postcode: "", // 우편번호
    address: "", // 기본주소
    extraAddress: "", // 참고항목
  });
  const [subaddress, setSubaddress] = useState(""); // 상세주소 (유저입력)

  const [isPostcodeVisible, setPostcodeVisible] = useState(false);

  const handlePostcodeComplete = (data) => {
    setAddress({
      postcode: data.zonecode, // 우편번호
      address: data.address, // 기본주소
      extraAddress: data.bname || "", // 참고항목
    });
    setPostcodeVisible(false); // close the postcode popup after selecting an address
  };

  // Function to close the postcode popup
  const closePostcodePopup = () => {
    setPostcodeVisible(false);
  };

  const form = useRef();

  const validateForm = () => {
    if (
      !agreement ||
      !userName ||
      !phoneNumber ||
      !email ||
      !birthday ||
      !address ||
      !subaddress ||
      !job ||
      !skill ||
      !experience ||
      !education
    ) {
      setError("Please fill all values.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    if (!validateForm()) {
      return;
    }

    console.log("PK", process.env.REACT_APP_PUBLIC_KEY);
    console.log("RECRUITING", process.env.REACT_APP_TEMPLATE_ID_RECRUITING);
    console.log("INQUIRY", process.env.REACT_APP_TEMPLATE_ID_INQUIRY);
    console.log("SERVICE ID", process.env.REACT_APP_SERVICE_ID);

    // Prepare data for Email
    const templateParams = {
      agreement,
      userName,
      email,
      phoneNumber,
      birthday,
      postcode: address.postcode,
      address: address.address,
      detailedAddress: subaddress,
      extraAddress: address.extraAddress,
      job,
      skill,
      experience,
      education,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_RECRUITING,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Inquiry sent successfully!");
          setTimeout(() => {
            window.location.reload();
          }, 500);
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send inquiry. Please try again later.");
        }
      );

    console.log("Template Params: ", templateParams);
  };

  return (
    <div className="font-pre flex flex-col text-white bg-black">
      {/* Banner */}
      <div className="relative w-full min-h-96">
        <div className="absolute top-0 left-0 w-full h-20 bg-black bg-opacity-30 leading-10 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-zinc-900 bg-opacity-30 leading-10 backdrop-blur-lg z-5 content-center">
          <div className="mx-20">
            <h1 className="text-6xl font-bold">RECRUITING</h1>
            <hr className="w-1/3 mt-3" />
            <span className="text-xl">가산본사 · 청라본사 입사 지원</span>
          </div>
        </div>
      </div>

      {/* Between */}
      <div className="w-full h-auto content-center bg-city-image bg-[700px] text-black">
        <div className="flex flex-row mb-2 items-center justify-evenly mx-auto">
          {/* quote */}
          <div className="py-12 px-12 bg-black backdrop-blur-lg bg-opacity-50 leading-10 text-white space-y-6">
            <p className="text-3xl font-thin">WE ARE A</p>
            <p className="text-4xl font-semibold">
              COMPANY <br />
              <span className="text-3xl">FOR YOU</span>
            </p>
          </div>
          {/* to form */}
          <div>
            <Link
              to="Gasan"
              smooth={true}
              duration={500}
              className="p-20 bg-black backdrop-blur-lg bg-opacity-50 leading-10 text-2xl text-white border border-white cursor-pointer"
            >
              가산본사
            </Link>
            <Link
              to="Chungra"
              smooth={true}
              duration={500}
              className="p-20 bg-black backdrop-blur-lg bg-opacity-50 leading-10 text-2xl text-white border border-white cursor-pointer"
            >
              청라본사
            </Link>
          </div>
        </div>
      </div>

      {/* Visual */}
      <Element name="Gasan">
        {/* Inquiry Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="shadow mx-4 text-white w-3/4 mx-auto space-y-6"
        >
          <h2 className="text-5xl font-bold text-center my-20">
            가산본사 지원하기
          </h2>
          <hr className="border-t-2 border-white my-10" />

          {/* 개인정보 수집 동의 */}
          <p className="text-center text-xl">
            개인정보 수집 및 이용에 대한 동의 (필수)
          </p>
          {/* 동의서 내용 */}
          <div className="py-40 my-10 bg-gray-500"></div>

          {/* 동의서 체크박스 */}
          <div className="flex items-center justify-left">
            <input
              type="checkbox"
              name="agreement"
              value={agreement}
              onChange={(e) => setAgreement(!agreement)}
              className="form-checkbox h-5 w-5"
            />
            <span className="text-lg">
              &nbsp;&nbsp;개인정보처리방침안내의 내용에 동의합니다.
            </span>
          </div>

          {/* 이름, 연락처, 이메일, 생년월일 */}
          <div className="space-y-6 my-8 text-white">
            {/* First Row */}
            <div className="grid grid-cols-2 gap-4 items-center">
              {/* 이름 */}
              <div className="flex p-4 items-center justify-center">
                <label className="font-medium text-white text-xl w-1/3">
                  이름
                </label>
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="이름을 입력해 주세요"
                  className="block bg-zinc-900 text-lg w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
                />
              </div>
              {/* 연락처 */}
              <div className="flex p-4 items-center justify-center">
                <label className="font-medium text-white text-xl w-1/3">
                  연락처
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  pattern="^(01[0-9]|0[2-6][0-5]?)-?\d{3,4}-?\d{4}$"
                  placeholder="'-' 없이 숫자만 입력해 주세요"
                  className="block bg-zinc-900 text-lg w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 gap-4 items-center">
              {/* 이메일 */}
              <div className="flex p-4 items-center justify-center">
                <label className="font-medium text-white text-xl w-1/3">
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력해 주세요"
                  className="block bg-zinc-900 text-lg w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
                />
              </div>
              {/* 생년월일 */}
              <div className="flex p-4 items-center justify-center">
                <label className="font-medium text-white text-xl w-1/3">
                  생년월일
                </label>
                <input
                  type="date"
                  name="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="block bg-zinc-900 text-lg w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
                />
              </div>
            </div>
          </div>

          {/* 우편번호 */}
          <div className="flex flex-row mb-4">
            <div className="font-medium text-white text-xl p-4 basis-1/6">
              주소
            </div>
            <input
              type="text"
              name="postcode"
              value={address.postcode}
              onChange={(e) =>
                setAddress({ ...address, postcode: e.target.value })
              }
              placeholder="우편번호"
              className="block bg-zinc-900 text-lg w-1/6 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
              readOnly
            />
            <button
              type="button"
              onClick={() => setPostcodeVisible(true)}
              className="ml-4 "
            >
              우편번호 검색
            </button>
            {/* Postcode Modal Popup */}
            {isPostcodeVisible && (
              <>
                {/* Modal Content */}
                <div
                  className="fixed z-60 inset-0 flex justify-center items-center"
                  style={{ backdropFilter: "blur(5px)" }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <button
                      className="absolute top-2 right-2 text-xl font-bold"
                      onClick={{ closePostcodePopup }}
                    >
                      &times;
                    </button>
                    <Postcode
                      onComplete={handlePostcodeComplete}
                      style={{ width: "100%", height: "400px" }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* 기본주소 */}
          <div className="flex flex-row mb-4">
            <div className="p-4 basis-1/6"></div>
            <input
              type="text"
              name="address"
              value={address.address}
              onChange={(e) =>
                setAddress({ ...address, address: e.target.value })
              }
              placeholder="기본주소"
              className="block bg-zinc-900 w-1/2 text-lg border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
              readOnly
            />
          </div>

          {/* 상세주소: 따로 뺌 */}
          <div className="flex flex-row mb-4">
            <div className="p-4 basis-1/6"></div>
            <input
              type="text"
              name="subaddress"
              value={subaddress}
              onChange={(e) => setSubaddress(e.target.value)}
              placeholder="상세주소"
              className="block bg-zinc-900 w-1/2 text-lg border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
            />
          </div>

          {/* 참고항목 */}
          <div className="flex flex-row mb-4">
            <div className="p-4 basis-1/6"></div>
            <input
              type="text"
              name="extraAddress"
              value={address.extraAddress}
              onChange={(e) =>
                setAddress({ ...address, extraAddress: e.target.value })
              }
              placeholder="참고항목"
              className="block bg-zinc-900 w-1/2 text-lg border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
              readOnly
            />
          </div>

          {/* 직종 */}
          <div className="flex flex-row">
            <div className="font-medium text-white text-xl p-4 basis-1/6">
              직종
            </div>
            <input
              type="text"
              name="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="block bg-zinc-900 w-3/4 text-lg border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
            />
          </div>

          {/* 전문 기술 */}
          <div className="flex flex-row">
            <div className="font-medium text-white text-xl p-4 basis-1/6">
              전문 기술
            </div>
            <input
              type="text"
              name="skill"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="block bg-zinc-900 w-3/4 text-lg border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
            />
          </div>

          {/* 경력 */}
          <div className="flex flex-row">
            <div className="font-medium text-white text-xl p-4 basis-1/6">
              경력
            </div>
            <input
              type="text"
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="block bg-zinc-900 w-3/4 text-lg border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
            />
          </div>

          {/* 교육 */}
          <div className="flex flex-row">
            <div className="font-medium text-white text-xl p-4 basis-1/6">
              교육
            </div>
            <input
              type="text"
              name="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="block bg-zinc-900 w-3/4 text-lg border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-none"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm my-4">{error}</p>}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="m-4 bg-red-700 text-2xl text-white px-10 py-4 rounded-xl hover:bg-red-800"
            >
              Submit
            </button>
          </div>
        </form>
      </Element>

      <Element name="Chungra"></Element>
    </div>
  );
};

export default Recruiting;
