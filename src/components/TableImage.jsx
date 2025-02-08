import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { RxShare2 } from "react-icons/rx";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

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

const TableImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((current) =>
      current > 0 ? current - 1 : DesktopData.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) =>
      current < DesktopData.length - 1 ? current + 1 : 0
    );
  };

  return (
    <div
      className=" bg-gray-200 flex flex-col items-center justify-center"
      id="table-images"
    >
      <main className="py-8 px-1 lg:px-4 w-[90%] flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h1 className="text-xl lg:text-3xl font-bold mb-4 mt-6">
            Revolutionizing Customer Support <br /> with Cutting-Edge AI
            Solutions
          </h1>
        </div>

        <div
          className="bg-white border-gray-700 rounded-2xl shadow-md p-6 flex items-center justify-center flex-col w-[95%] lg:w-[80%] hover:shadow-2xl"
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h2
            className="lg:text-4xl text-xl font-bold mb-5 lg:mt-12 text-center"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            Multilingual AI Call Agent
          </h2>
          <p
            className="text-gray-600 mx-auto mb-4 w-[97%] text-center lg:text-[18px] text-xs px-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            AI-powered multilingual call agents designed to handle support and
            sales across languages. They integrate seamlessly with your
            enterprise systems, automating tasks like data retrieval and updates
            to boost efficiency and customer satisfaction.
          </p>

          <img
            src="https://www.quansys.ai/wp-content/uploads/2024/12/Screenshot.png"
            alt="table"
            className="w-[97%] border rounded-3xl "
          />
        </div>
      </main>

      <main
        className="py-8 px-1 lg:px-4 w-[90%] flex flex-col items-center justify-center"
        id="lisa"
      >
        <div
          className="bg-white border-gray-700 rounded-2xl shadow-md p-3 flex items-center justify-center flex-col w-[95%] lg:w-[80%] "
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h2
            className="lg:text-4xl text-xl font-bold mb-5 lg:mt-12  mx-2 text-center"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            Virtual Human AI Agent with Vision
          </h2>
          <p
            className="text-gray-600 mx-auto w-[97%] text-center lg:text-[18px] text-xs px-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            A hyper-realistic virtual human with vision, capable of seeing,
            understanding, and interacting during video calls. It combines
            lifelike face and voice with the ability to connect to enterprise
            systems, delivering intelligent, action-driven support in real time.
          </p>

          <div className="lg:h-[34rem] lg:w-[25rem] border border-gray-400 rounded-xl mt-7 mb-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center mt-2 ml-2">
                <GoDotFill className="w-10 h-10 p-0" />
                <h1 className="font-bold text-2xl ml-0">Lisa</h1>
              </div>
              <RxShare2 className="rotate-90 w-4 h-5 mr-4 text-gray-500" />
            </div>
            <div className="w-full h-[1px] border border-gray-100 mt-1" />
            <video
              alt="lisa video"
              className="w-[90%] mx-auto rounded-xl my-6 shadow-md"
              autoPlay={true}
              loop
              muted
            >
              <source src="/lisa.mp4" type="video/mp4" alt="lisa video" />
            </video>
          </div>
        </div>
      </main>

      <main className="py-8 px-1 lg:px-4 w-[90%] flex flex-col items-center justify-center mx-auto">
        <div
          className="bg-white border-gray-700 rounded-2xl shadow-md p-3 flex items-center justify-center flex-col w-[95%] lg:w-[80%] "
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h2
            className="lg:text-4xl text-xl font-bold mb-5 lg:mt-12  mx-2 text-center"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            Easy Onboarding Experience
          </h2>
          <p
            className="text-gray-600 mx-auto w-[97%] text-center lg:text-[18px] text-xs px-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            assumenda modi ullam quae, enim ducimus eum dolores temporibus
            molestiae placeat, qui ab? Tempora sapiente nulla aperiam incidunt
            et, a recusandae omnis dolorum quisquam, repudiandae, sint
            asperiores eaque labore nesciunt quidem!
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

          <div className=" border-gray-400 rounded-xl mt-7 mb-7 flex items-center justify-center">
            <img
              src={DesktopData[activeIndex].url}
              alt=""
              className="w-[90%]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TableImage;
