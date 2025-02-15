import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center relative">
      <div className="absolute top-0 w-full h-[100vh] bg-[rgba(0,0,0,0.3)]" />

      {/* <video
        src="/bg-video-2.mp4"
        className="w-full h-[100vh] object-cover"
        autoPlay
        loop
        muted
      ></video> */}

      <img
        src="/hero-image.jpg"
        alt=""
        className="w-full h-[100vh] object-cover"
      />

      <div className="absolute top-40 w-[90%] ">
        <div className="flex justify-between flex-col">
          <h1 className="text-[40px] lg:text-[130px]  font-bold text-white text-left leading-[50px] lg:leading-[120px] tracking-tight">
            AI Agents Empowering Enterprise Support
          </h1>

          <div className="h-[1px] bg-white w-[32rem] lg:mt-12 mt-5" />

          <div className="w-[22rem] lg:w-[45rem] lg:mt-5 mt-1">
            <p className="lg:text-[18px] text-[14px] text-white ">
              AI call agents for seamless support and sales.
            </p>
          </div>
          <div className="mt-20 mx-auto">
            <ul className="grid grid-cols-2 lg:flex lg:gap-22 gap-x-10 mx-auto ">
              <li>
                <img src="/1-marg.png" alt="marg" className=" w-25 lg:w-35" />
              </li>
              <li>
                <img
                  src="/2-pazcare.png"
                  alt="payzcare"
                  className=" w-25 lg:w-35"
                />
              </li>
              <li>
                <img
                  src="/3-ayushpay.png"
                  alt="ayushpay"
                  className=" w-25 lg:w-35"
                />
              </li>
              <li>
                <img
                  src="/4-intargos.png"
                  alt="intargos"
                  className=" w-25 lg:w-35"
                />
              </li>
              <li>
                <img src="/6-omelo.png" alt="omelo" className=" w-25 lg:w-35" />
              </li>
              <li>
                <img
                  src="/5-7stone.png"
                  alt="7stone"
                  className=" w-25 lg:w-35"
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
