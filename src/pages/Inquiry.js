import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      label: "플레이스 마케팅",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      label: "스토어 마케팅",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      label: "숏폼 마케팅",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      label: "퍼포먼스 마케팅",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
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

  return (
    // Background Wrapper Div
    <div className="flex flex-col bg-AD-company-background bg-auto text-white min-h-screen">
      {/* Banner */}
      <div className="bg-red-700/75 my-32 mx-32 pt-12 pb-16 rounded-[24px]">
        <h1 className="ml-24 text-7xl/loose font-bold">Inquiry</h1>
        <blockquote className="ml-24 italic text-xl/loose">
          Get in touch with us for personalized support
        </blockquote>
        <h2 className="ml-24 text-xl/loose">
          효과적인 마케팅 솔루션을 찾고 계신가요?
          <br />
          지금 문의하셔서 맞춤형 서비스를 경험해 보세요
        </h2>
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
        <div className="grid grid-cols-5 gap-4">
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
                className="w-32 h-32 object-cover rounded"
              />

              <span className="font-medium text-lg">{category.label}</span>
            </div>
          ))}
        </div>

        <hr className="w-3/4 mx-auto border-t-2 border-gray-300 my-10" />

        {/* 브랜드, 담당자, 이메일, 연락처 */}
        <div className="space-y-6 my-8 text-white">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* 브랜드명 */}
            <div className="flex p-4 items-center justify-center">
              <label className="font-medium text-white text-3xl w-1/3">
                브랜드명
              </label>
              <input
                type="text"
                name="brandName"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="브랜드명을 입력해 주세요"
                className="block bg-inherit text-xl w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-nonee"
              />
            </div>
            {/* 담당자명 */}
            <div className="flex p-4 items-center justify-center">
              <label className="font-medium text-white text-3xl w-1/3">
                담당자명
              </label>
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="담당자명을 입력해 주세요"
                className="block bg-inherit text-xl w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-nonee"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* 이메일 */}
            <div className="flex p-4 items-center justify-center">
              <label className="font-medium text-white text-3xl w-1/3">
                이메일
              </label>
              <input
                type="email"
                name="email"
                value={email}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력해 주세요"
                className="block bg-inherit text-xl w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-nonee"
              />
            </div>
            {/* 전화번호 */}
            <div className="flex p-4 items-center justify-center">
              <label className="font-medium text-white text-3xl w-1/3">
                전화번호
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                pattern="^(01[0-9]|0[2-6][0-5]?)-?\d{3,4}-?\d{4}$"
                placeholder="'-' 없이 숫자만 입력해 주세요"
                className="block bg-inherit text-xl w-2/3 border-b border-gray-300 focus:border-red-700 focus:ring-0 rounded-md p-2 outline-nonee"
              />
            </div>
          </div>
        </div>

        {/* 문의내용 */}
        <div className="p-4">
          <label className="block text-3xl">문의내용</label>
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
        <button
          type="submit"
          className="m-4 bg-red-700 text-2xl text-white px-10 py-4 rounded-xl hover:bg-red-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Inquiry;
