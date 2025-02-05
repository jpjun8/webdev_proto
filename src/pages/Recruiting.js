import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, Element } from "react-scroll";

import PopupDom from "../components/PopupDom";
import PopupPostCode from "../components/PopupPostCode";

const Recruiting = () => {
  // Page Title
  useEffect(() => {
    document.title = "Recruiting | AD";
  }, []);

  // EmailJS Handlings

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const form = useRef();

  // 체크박스 Handling
  const handleCheckboxChange = (categoryLabel) => {
    setSelectedOptions(
      (prev) =>
        prev.includes(categoryLabel)
          ? prev.filter((label) => label !== categoryLabel) // Remove if already selected
          : [...prev, categoryLabel] // Add if not selected
    );
  };

  const validateForm = () => {
    if (!userName || !phoneNumber || !email || !birthday || !message) {
      setError("Please fill all values.");
      return false;
    }

    if (selectedOptions.length === 0) {
      setError("Please select at least one option.");
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

    // Prepare data for Email
    const templateParams = {
      userName,
      email,
      phoneNumber,
      birthday,
      message,
      selectedOptions: selectedOptions.join(", "),
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Inquiry sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send inquiry. Please try again later.");
        }
      );

    console.log("Selected Options:", selectedOptions);

    // Clears the form after submission
    window.location.reload();
  };

  // Postcode Popup Control
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPostCode = () => {
    setIsPopupOpen(true);
  };
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="font-pre flex flex-col text-white bg-black">
      {/* Banner */}
      <div className="relative w-full min-h-96">
        <div className="absolute top-0 left-0 w-full h-20 bg-black bg-opacity-30 leading-10 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-inherit bg-opacity-30 leading-10 backdrop-blur-lg z-5 content-center">
          <div className="mx-20">
            <h1 className="text-6xl font-bold">RECRUITING</h1>
            <hr className="w-1/3 mt-3" />
            <span className="text-xl">가산본사 · 청라본사 입사 지원</span>
          </div>
        </div>
      </div>

      {/* Between */}
      <div className="w-full h-auto content-center bg-city-image bg-[700px] text-black">
        <div className="flex flex-row items-center justify-evenly mx-auto">
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
          className="shadow mx-4 text-white w-3/4 mx-auto"
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
            <input type="checkbox" className="form-checkbox h-5 w-5" />
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
                  className="block bg-inherit text-lg w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-nonee"
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
                  className="block bg-inherit text-lg w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-nonee"
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
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력해 주세요"
                  className="block bg-inherit text-lg w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-nonee"
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
                  pattern="^(01[0-9]|0[2-6][0-5]?)-?\d{3,4}-?\d{4}$"
                  placeholder="'-' 없이 숫자만 입력해 주세요"
                  className="block bg-inherit text-lg w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-nonee"
                />
              </div>
            </div>
          </div>

          {/* 주소 */}
          <div className="flex p-4 items-center">
            <label className="font-medium text-white text-xl w-1/6">주소</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="이름을 입력해 주세요"
              className="block bg-inherit text-lg w-1/6 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-nonee"
            />
            <button type="button" onClick={openPostCode} className="ml-8">
              우편번호 검색
            </button>
            <div id="popupDom">
              {isPopupOpen && (
                <PopupDom>
                  <PopupPostCode onClose={closePostCode} />
                </PopupDom>
              )}
            </div>
          </div>

          {/* 문의내용 */}
          <div className="p-4">
            <label className="block text-xl">문의내용</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-8 block w-full border border-gray-300 rounded-xl p-4 bg-gray-100 focus:border-black focus:ring-0 outline-none text-black"
              placeholder=""
              rows="6"
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
