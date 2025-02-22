import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const DesktopData = [
  {
    name: "1. Onboarding",
    url: "/onboarding.jpg",
    para: "We implement a structured onboarding process to ensure smooth integration with your existing systems.",
  },
  {
    name: "2. Import Data",
    url: "/import.jpg",
    para: "Effortlessly upload essential files to create a knowledge base for AI and streamline organizational workflows.",
  },
  {
    name: "3. Outbound Calls",
    url: "/outbound-calls.jpg",
    para: "Conduct AI driven outbound calls efficiently to engage with clients, build relationships, and drive business growth.",
  },
  {
    name: "4. Insights",
    url: "/5-Insights.png",
    para: "Analyze call data to extract valuable insights that enhance communication strategies and improve performance.",
  },
];

const ProductImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex === DesktopData.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, [4000]);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <main className="w-full pt-25 pb-20 bg-[#071b20]">
      <div className=" flex flex-col ">
        <div className="flex items-center justify-center flex-col ">
          <h2 className="lg:text-[64px] text-3xl font-bold text-center text-[#859295] lg:w-[60%] w-[90%] lg:leading-[65px]">
            Seamless Integration with your existing systems
          </h2>

          <p className="mt-5 lg:w-[50%] w-[90%] text-center text-[#859295]">
            Integrate AI Agents seamlessly into your operations. Our solution
            works with your existing systems, ensuring a smooth, hassle-free
            implementation and rapid ROI.
          </p>

          <button
            className="bg-[#859295] rounded-full py-2 px-3 mt-5 text-xs lg:text-[16px] mx-auto cursor-pointer"
            onClick={() => navigate("/book-a-demo")}
          >
            Book a Demo
          </button>
        </div>
      </div>

      <div className="w-[90%] mx-auto bg-[#DCD7C9] rounded-3xl mt-20 mb-20">
        <div className="w-[95%] mx-auto">
          <div className="flex flex-col pt-[60px] px-3">
            <h1 className="lg:text-[45px] text-3xl sm:max-md:mx-auto font-bold ">
              Smooth Onboarding Journey
            </h1>
            <p className="text-[16px] text-[#7f7a77] mt-1 ">
              Our smooth onboarding journey reflects our commitment to
              efficiency and excellence.
            </p>
            <button
              className="bg-black text-white rounded-full py-2 px-3 mt-5 text-xs lg:text-[16px] w-33 cursor-pointer"
              onClick={() => navigate("/book-a-demo")}
            >
              Book a Demo
            </button>
          </div>
        </div>
        {/* Desktop view */}
        <div className="hidden md:flex flex-col">
          <div className="w-[95%] mx-auto mt-10">
            <img
              src={DesktopData[activeIndex].url}
              className="w-full lg:h-[700px] md:max-lg:h-[500px] ease-in-out duration-500 rounded-3xl"
            />
          </div>
          <div className="w-[95%] flex justify-between lg:gap-20 md:max-lg:gap-10 mx-auto pb-[30px]">
            {DesktopData.map((item, index) => (
              <div
                className="w-10 h-40 mt-10 w-[95%] rounded-xl cursor-pointer"
                key={item.name}
                onClick={() => setActiveIndex(index)}
              >
                <h1
                  className={
                    activeIndex === index
                      ? "font-bold lg:text-3xl opacity-100 md:max-lg:text-xl md:max-lg:truncate"
                      : "font-bold lg:text-3xl opacity-50 md:max-lg:text-xl md:max-lg:truncate"
                  }
                >
                  {item.name}
                </h1>
                <p
                  className={
                    activeIndex === index
                      ? "text-[#7f7a77] mt-1 pl-[1px] opacity-100 md:max-lg:text-xs"
                      : "opacity-50 text-[#7f7a77] mt-1 pl-[1px] md:max-lg:text-xs"
                  }
                >
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view */}
        <div className="md:hidden flex flex-col">
          <div className="w-[95%] mx-auto mt-5">
            <div className=" mx-auto pb-10">
              {DesktopData.map((item, index) => (
                <div className="px-3 mt-7" key={index}>
                  <h1 className="text-xl font-semibold">{item.name}</h1>
                  <p className="mt-1 text-[#7f7a77]">{item.para}</p>
                  <img
                    src={item.url}
                    alt=""
                    className="h-50 w-full mt-3 rounded-xl"
                  />
                  {index !== DesktopData.length - 1 && (
                    <div className="h-[1px] w-full bg-[#7f7a77] mt-5 opacity-40" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductImages;
