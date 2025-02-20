import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-1vh flex justify-center items-center relative">
      <div className="absolute top-0 w-full h-[100vh] bg-[rgba(0,0,0,0.3)]" />

      {/* <video
        src="/bg-video-2.mp4"
        className="w-full h-[100vh] object-cover"
        autoPlay
        loop
        muted
      ></video> */}

      <img src="/her-3.jpeg" alt="" className="w-full h-[100vh] object-cover" />

      <div className="absolute top-40 lg:top-20 md:max-lg:top-10 md:max-lg:mt-[15%] lg:mt-[5%] w-[90%] ">
        <div className="flex justify-between flex-col">
          <h1 className=" text-[40px] lg:text-[130px] md:max-lg:text-[100px] md:max-lg:leading-[90px] font-bold text-white text-left leading-[50px] lg:leading-[120px] tracking-tight">
            AI Agents Empowering Enterprise Support
          </h1>

          <div className="h-[1px] bg-white w-[32rem] lg:mt-12 mt-5 md:max-lg:mt-12" />

          <div className="w-[22rem] md:max-lg:w-[30rem] lg:w-[45rem] lg:mt-5 mt-1 md:max-lg:mt-5">
            <p className="lg:text-[18px] text-[14px] text-white md:max-lg:text-[20px]">
              AI call agents for seamless support and sales.
            </p>
            <button
              className=" bg-white mt-5 text-black px-[9px] py-[5px] rounded-full text-[14px] cursor-pointer md:max-lg:mt-8 md:max-lg:text-[18px]"
              onClick={() => navigate("/book-a-demo")}
            >
              Book a demo
            </button>
          </div>
          <div className="lg:mt-14 mt-14 mx-auto md:max-lg:mt-25 my-auto flex items-center justify-center">
            <ul className="grid grid-cols-2 lg:flex lg:gap-30 gap-y-7 gap-x-18 mx-auto md:max-lg:gap-x-40 md:max-lg:gap-y-10">
              <li>
                <img
                  src="/1-marg.png"
                  alt="marg"
                  className=" w-25 lg:w-30 md:max-lg:w-40"
                />
              </li>
              <li>
                <img
                  src="/2-pazcare.png"
                  alt="payzcare"
                  className="w-25 lg:w-30 md:max-lg:w-40"
                />
              </li>
              <li>
                <img
                  src="/3-ayushpay.png"
                  alt="ayushpay"
                  className=" w-25 lg:w-30 md:max-lg:w-40"
                />
              </li>
              <li>
                <img
                  src="/4-intargos.png"
                  alt="intargos"
                  className=" w-25 lg:w-30 md:max-lg:w-40"
                />
              </li>
              <li>
                <img
                  src="/6-omelo.png"
                  alt="omelo"
                  className=" w-25 lg:w-30 md:max-lg:w-40"
                />
              </li>
              <li>
                <img
                  src="/5-7stone.png"
                  alt="7stone"
                  className=" w-25 lg:w-30 md:max-lg:w-40"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
