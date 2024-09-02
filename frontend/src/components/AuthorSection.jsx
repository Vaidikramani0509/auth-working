import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AuthorSection = () => {
  const authors = [
    {
      image: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTNPnx5GZXyw6qhc1HUzVPQWCuemiB816mRuJqJTpyKAR-ksqMfqfU1OQ8uogWMPX-a",
      name: "Shiv Khera",
      designation: "Indian author and activist",
      quote:
        "An uneducated thief may steal goods from the train but an educated one may steal the entire train.",
    },
    {
      image: "https://via.placeholder.com/400",
      name: "Author 2",
      designation: "Another designation",
      quote: "This is another inspirational quote from the second author.",
    },
    {
      image: "https://via.placeholder.com/400",
      name: "Author 3",
      designation: "Third designation",
      quote: "This is yet another inspirational quote from the third author.",
    },
  ];

  const [currentAuthorIndex, setCurrentAuthorIndex] = useState(0);

  const handleNext = () => {
    setCurrentAuthorIndex(
      (currentAuthorIndex + 1) % authors.length
    );
  };

  const handleBack = () => {
    setCurrentAuthorIndex(
      (currentAuthorIndex - 1 + authors.length) % authors.length
    );
  };
  const currentAuthor = authors[currentAuthorIndex];
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 rounded-lg shadow-md">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
        <img
          src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTNPnx5GZXyw6qhc1HUzVPQWCuemiB816mRuJqJTpyKAR-ksqMfqfU1OQ8uogWMPX-a"
          alt="Author"
          className="w-80 h-80 object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Author Info */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold">{currentAuthor.name}</h2>
        <p className="text-xl text-gray-600">{currentAuthor.designation}
        </p>
      </div>

      {/* Quote and Navigation */}
      <div className="w-full mt-8 text-center">
        <p className="text-xl md:text-2xl italic font-light text-gray-700 mb-6">
          {currentAuthor.quote}
        </p>
      </div>
      {/* Navigation Buttons - Aligned Bottom Right */}
      <div className="right-4 flex space-x-6">
        <button
          onClick={handleBack}
          className="text-xl p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="text-xl p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AuthorSection;
