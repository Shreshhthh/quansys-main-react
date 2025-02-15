import React, { useEffect } from "react";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { RxShare2 } from "react-icons/rx";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoMic } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { IoMicOff } from "react-icons/io5";

const DesktopData = [
  {
    name: "Dashboard",
    url: "/1-Dashbaord.png",
  },
  {
    name: "Onboarding",
    url: "/2-Onboarding.png",
  },
  {
    name: "Import",
    url: "/3-Import.png",
  },
  {
    name: "Outbound Calls",
    url: "/4-Outbound.png",
  },
  {
    name: "Insights",
    url: "/5-Insights.png",
  },
];

const ProductImages = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1) % DesktopData.length);
  };

  const [muteVideo, setMuteVideo] = useState(true);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % DesktopData.length);
  };

  const getSlideIndex = (offset) => {
    return (activeIndex + offset + DesktopData.length) % DesktopData.length;
  };

  return (
    <div className="mt-25 bg-[#FEF3E2]">
      <main className=" flex flex-col items-center justify-center">
        <div className="mt-25 flex items-center justify-center flex-col ">
          <h2 className="lg:text-[64px] text-2xl font-bold text-center">
            Easy Onboarding Experience
          </h2>
          <p className="text-gray-600 mt-1 lg:w-[40%] w-[90%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            assumenda modi ullam quae, enim ducimus eum dolores temporibus
            molestiae placeat, qui ab? Tempora sapiente nulla aperiam incidunt
          </p>

          <div className="relative max-w-4xl mx-auto mt-10">
            {/* Mobile View */}
            <div className="flex items-center justify-between gap-5 lg:hidden md:w-[30rem] ">
              <button
                onClick={handlePrevious}
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Previous item"
              >
                <IoChevronBackCircleOutline className="w-6 h-6" />
              </button>

              <div className="flex-1 flex justify-center">
                <div
                  className={`
              px-6 py-3 rounded-xl whitespace-nowrap transition-all transform
              bg-blue-50 text-blue-600 font-medium
            `}
                >
                  {DesktopData[activeIndex].name}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Next item"
              >
                <IoChevronForwardCircleOutline className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex flex-col items-center w-[90%] mt-5">
              <div className="w-3xl h-[1px] border border-gray-200 mb-2 mx-auto" />
              <div className="flex  items-center justify-center mx-auto">
                <button
                  onClick={handlePrevious}
                  className="flex items-center justify-center w-10 h-10 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <IoChevronBackCircleOutline className="w-7 h-7" />
                </button>
                <div className="flex gap-5 px-4 ">
                  {DesktopData.map((item, index) => (
                    <button
                      key={item.url}
                      onClick={() => setActiveIndex(index)}
                      className={`
                  px-4 py-2 rounded-xl whitespace-nowrap transition-colors font-semibold
                  ${
                    index === activeIndex
                      ? "bg-blue-50 text-blue-600 font-medium text-[17px] "
                      : "text-gray-900 hover:bg-blue-50 hover:text-blue-600 hover:text-[17px]"
                  }
                `}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center w-10 h-10 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <IoChevronForwardCircleOutline className="w-7 h-7" />
                </button>
              </div>
              <div className="w-3xl h-[1px] border border-gray-200 mt-2 mx-auto" />
            </div>
          </div>
        </div>

        <div className="relative w-full h-[600px] flex items-center justify-center">
          <div className="flex items-center justify-center  absolute w-full">
            <img
              src={DesktopData[activeIndex].url}
              className=" w-[42rem] h-[480px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductImages;
