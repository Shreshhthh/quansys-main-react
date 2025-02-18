import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { FaDotCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Features = () => {
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
  const featuresList = [
    {
      left: [
        "Multiple Voices",
        "Hyper Realistic Voice",
        "Fine tune LLM",
        "Call Transcriptions",
        "User satisfaction report",
      ],
      right: [
        "Self-Improving AI Agents",
        "Voice cloning",
        "Minimum Latency",
        "Call Insights",
        "Users sentiment Analysis",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  let settings = {
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: activeIndex,
    centerMode: true,
    arrows: false,
    focusOnSelect: true,

    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };

  return (
    <div className="py-25 bg-[#DCD7C9]" id="features">
      <div className="rounded-3xl">
        <div className="flex flex-col justify-center items-center mb-16">
          <h2 className="text-3xl lg:text-[64px] w-[90%] text-center font-bold text-center mb-5 lg:w-[70%] lg:leading-[65px]">
            Fuel innovation and gain a competitive edge with AI Agents
          </h2>
          <p className="text-center w-[90%] lg:w-[53%] mx-auto text-[#6e675f]">
            Integrate advanced AI seamlessly into your workflows with
            enterprise-grade AI Agents. Scale effortlessly, empowering your team
            to achieve superior outcomes and unprecedented productivity gains.
          </p>
          <button
            className="bg-black text-white rounded-full py-2 px-3 mt-5 text-xs lg:text-[16px] mx-auto cursor-pointer"
            onClick={() => navigate("/book-a-demo")}
          >
            Book a Demo
          </button>
        </div>

        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {DesktopData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={item.url}
                alt={item.name}
                className={
                  index === activeIndex
                    ? "w-[35rem] h-[20rem] opacity-100 rounded-4xl scroll-smooth scale-102 ease-in-out duration-500"
                    : " w-[35rem] h-[20rem] opacity-50 rounded-4xl scroll-smooth ease-in-out duration-500"
                }
              ></img>

              <h1
                className={
                  activeIndex === index
                    ? "ml-5 text-2xl font-semibold opacity-100 ease-in-out duration-500"
                    : "ml-5 text-2xl font-semibold opacity-50 ease-in-out duration-500"
                }
              >
                {item.name}
              </h1>
              <p
                className={
                  activeIndex === index
                    ? "text-[#6e675f] ml-5 mt-1 opacity-100 ease-in-out duration-500"
                    : "text-[#6e675f] ml-5 mt-1 opacity-50 ease-in-out duration-500"
                }
              >
                ashdjkhsaj sahdjksa jkhsdajk kjhhsajkd jhsajd jhasjkdh lnnsmasj
                kabsddjk sjk
              </p>
            </div>
          ))}
        </Slider>

        <div className="hidden lg:flex justify-center gap-2 mt-20">
          {Array.from({ length: DesktopData.length }, (_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                activeIndex === index ? "bg-black" : "bg-[#8f8a88]"
              }`}
              onClick={() => sliderRef.slickGoTo(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
