import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Inquiry = () => {
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
    e.target.reset();
  };

  // Email Sending with sendForm
  //   const sendEmail = (e) => {
  //     e.persist();
  //     e.preventDefault();
  //     setIsSubmitting(true);

  //     console.log(process.env.REACT_APP_PUBLIC_KEY);
  //     console.log(process.env.REACT_APP_TEMPLATE_ID);
  //     console.log(process.env.REACT_APP_SERVICE_ID);
  //     console.log(e.target);

  //     emailjs
  //       .sendForm(
  //         process.env.REACT_APP_SERVICE_ID,
  //         process.env.REACT_APP_TEMPLATE_ID,
  //         form.current,
  //         process.env.REACT_APP_PUBLIC_KEY
  //       )
  //       .then(
  //         (result) => {
  //           setStateMessage("Message sent!");
  //           setIsSubmitting(false);
  //           setTimeout(() => {
  //             setStateMessage(null);
  //           }, 5000); // hide message after 5 seconds
  //         },
  //         (error) => {
  //           setStateMessage("Something went wrong, please try again later");
  //           setIsSubmitting(false);
  //           setTimeout(() => {
  //             console.log("ERROR:", error);
  //             setStateMessage(null);
  //           }, 5000); // hide message after 5 seconds
  //         }
  //       );
  //     // Clears the form after sending the email
  //     e.target.reset();
  //   };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="pt-32 bg-slate-200 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4 mx-4">Inquire About Our Services</h2>

      {/* 카테고리 선택택 */}
      <div className="grid grid-cols-2 gap-4 mb-4 mx-4">
        {categories.map((category) => (
          <label
            key={category.id}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.label}
              className="w-12 h-12 object-cover rounded"
            />
            <input
              type="checkbox"
              value={category.label}
              checked={selectedOptions.includes(category.label)}
              onChange={() => handleCheckboxChange(category.label)}
              className="form-checkbox h-5 w-5 text-blue-600 rounded"
            />
            <span className="text-gray-700">{category.label}</span>
          </label>
        ))}
      </div>

      {/* 브랜드명 */}
      <div className="mb-4 mx-4">
        <label className="block text-gray-700">브랜드명</label>
        <input
          type="text"
          name="brandName"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your BRAND name"
        />
      </div>

      {/* 담당자명 */}
      <div className="mb-4 mx-4">
        <label className="block text-gray-700">담당자명</label>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your USER name"
        />
      </div>

      {/* 이메일 */}
      <div className="mb-4 mx-4">
        <label className="block text-gray-700">이메일</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your Email"
        />
      </div>

      {/* 연락처 */}
      <div className="mb-4 mx-4">
        <label className="block text-gray-700">연락처</label>
        <input
          type="text"
          pattern="\d*"
          maxLength="11"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your Phone Number"
        />
      </div>

      {/* 문의사항 */}
      <div className="mb-4 mx-4">
        <label className="block text-gray-700">문의사항</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your Inquiry"
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="mb-4 mx-4 mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Inquiry;
