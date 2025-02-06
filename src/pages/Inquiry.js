import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Images
import sample from "../assets/samples/300x300.png";

const Inquiry = () => {
  // Page Title
  useEffect(() => {
    document.title = "Inquiry | AD";
  }, []);

  // 카테고리
  const categories = [
    {
      id: 1,
      label: "체험단 마케팅",
      image: sample,
    },
    {
      id: 2,
      label: "플레이스 마케팅",
      image: sample,
    },
    {
      id: 3,
      label: "스토어 마케팅",
      image: sample,
    },
    {
      id: 4,
      label: "숏폼 마케팅",
      image: sample,
    },
    {
      id: 5,
      label: "퍼포먼스 마케팅",
      image: sample,
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [brandName, setBrandName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const form = useRef();

  // Scroll to form
  const scrollToForm = () => {
    form.current.scrollIntoView({ behavior: "smooth" });
  };

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
    if (!brandName || !userName || !phoneNumber || !message) {
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

    console.log("PK", process.env.REACT_APP_PUBLIC_KEY);
    console.log("RECRUITING", process.env.REACT_APP_TEMPLATE_ID_RECRUITING);
    console.log("INQUIRY", process.env.REACT_APP_TEMPLATE_ID_INQUIRY);
    console.log("SERVICE ID", process.env.REACT_APP_SERVICE_ID);

    // Prepare data for Email
    const templateParams = {
      brandName,
      userName,
      email,
      phoneNumber,
      message,
      selectedOptions: selectedOptions.join(", "),
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_INQUIRY,
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

    console.log("Selected Options:", selectedOptions);
  };

  return (
    // Background Wrapper Div
    <div className="font-pre flex flex-col bg-black text-white">
      {/* Banner */}
      <div className="relative w-full min-h-96">
        <div className="absolute top-0 left-0 w-full h-20 bg-black bg-opacity-30 leading-10 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-inherit bg-opacity-30 leading-10 backdrop-blur-lg z-5 content-center">
          <div className="mx-20">
            <h1 className="text-6xl font-bold">INQUIRY</h1>
            <hr className="w-1/3 mt-3" />
            <span className="text-xl">문의하기</span>
          </div>
        </div>
      </div>

      {/* Between */}
      <div className="w-full h-auto content-center bg-city-image bg-[700px] text-black">
        <div className="flex flex-row items-center justify-evenly mx-auto">
          {/* quote */}
          <div className="py-12 px-28 bg-black backdrop-blur-lg bg-opacity-50 leading-10 text-white space-y-6">
            <p className="text-3xl">
              급하신가요? 빨리 매출을 극대화 하고 싶으신가요?
              <br />
              그러면 나가셔도 좋습니다.
            </p>
            <p className="text-lg">
              급할수록 천천히, 그리고 탄탄히, 무엇보다 짧은 기간 내에 이뤄낸
              성과는 쉽게 무너지기 마련입니다.
            </p>
            <p className="text-xl">
              제대로 알아보시고, 확실한 믿음을 가지고 동행하시길 권고 드립니다.
            </p>
          </div>
          {/* to form */}
          <button
            onClick={scrollToForm}
            className="p-20 bg-black backdrop-blur-lg bg-opacity-50 leading-10 text-2xl text-white border border-white"
          >
            문의하기
          </button>
        </div>
      </div>

      {/* Inquiry Form */}
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="shadow mx-4 text-white"
      >
        <h2 className="text-5xl font-bold text-center my-20">문의하기</h2>
        <hr className="w-3/4 mx-auto border-t-2 border-gray-700 my-10" />

        {/* 카테고리 선택 */}
        <p className="text-center text-2xl pb-10">CATEGORY</p>
        <div className="grid grid-cols-5 w-3/4 mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center text-center space-y-3"
            >
              <input
                type="checkbox"
                value={category.label}
                checked={selectedOptions.includes(category.label)}
                onChange={() => handleCheckboxChange(category.label)}
                className="form-checkbox h-5 w-5"
              />
              <img
                src={category.image}
                alt={category.label}
                className="max-w-32 max-h-32 w-auto h-auto object-cover rounded"
              />
              <span className="font-medium text-lg">{category.label}</span>
            </div>
          ))}
        </div>

        <hr className="w-3/4 mx-auto border-t-2 border-gray-300 my-10" />

        {/* 브랜드, 담당자, 이메일, 연락처 */}
        <div className="space-y-6 my-8 text-white w-3/4 mx-auto">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* 브랜드명 */}
            <div className="flex p-4 items-center justify-center">
              <label className="font-medium text-white text-xl w-1/3">
                브랜드명
              </label>
              <input
                type="text"
                name="brandName"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="브랜드명을 입력해 주세요"
                className="block bg-inherit text-lg w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-nonee"
              />
            </div>
            {/* 담당자명 */}
            <div className="flex p-4 items-center justify-center">
              <label className="font-medium text-white text-xl w-1/3">
                담당자명
              </label>
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="담당자명을 입력해 주세요"
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
            {/* 전화번호 */}
            <div className="flex p-4 items-center justify-center">
              <label className="font-medium text-white text-xl w-1/3">
                전화번호
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
        </div>

        {/* 문의내용 */}
        <div className="p-4 w-3/4 mx-auto">
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
    </div>
  );
};

export default Inquiry;
