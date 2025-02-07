import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[url(/hero-image.jpg)] flex justify-center items-center bg-no-repeat bg-cover">
      <div className="flex justify-center items-center w-[80%] m-auto">
        <div className="flex items-center justify-between flex-col">
          <h1
            className="text-[30px] lg:text-[86px] font-bold text-white text-center lg:px-5 leading-7 lg:leading-[80px] mt-32 lg:mt-56"
            data-aos="flip-up"
            data-aos-duration="1000"
            mirror="true"
          >
            AI Agents Empowering Enterprise Support
          </h1>
          <div className="w-[22rem] lg:w-[42rem] lg:mt-5 mt-1">
            <p
              className="text-center lg:text-[18px] text-[14px] text-white lg:mx-10 mx-5 hover:scale-105"
              data-aos="flip-down"
              data-aos-delay="600"
              mirror="true"
            >
              AI call agents for seamless support and sales, offering custom
              voices and the ability to handle thousands of phone calls
              simultaneously
            </p>
          </div>
          <div
            className="mt-20 px-2"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <ul className="grid grid-cols-2 lg:flex lg:gap-12 gap-6 ">
              <li>
                <img
                  src="https://quansys.ai/wp-content/uploads/2024/12/1.png"
                  alt="marg"
                  className="hover:scale-105"
                />
              </li>
              <li>
                <img
                  src="https://quansys.ai/wp-content/uploads/2024/12/2.png"
                  alt="payzcare"
                  className="hover:scale-105"
                />
              </li>
              <li>
                <img
                  src="https://quansys.ai/wp-content/uploads/2024/12/3.png"
                  alt="ayushpay"
                  className="hover:scale-105"
                />
              </li>
              <li>
                <img
                  src="https://quansys.ai/wp-content/uploads/2024/12/4.png"
                  alt="intargos"
                  className="hover:scale-105"
                />
              </li>
              <li>
                <img
                  src="https://quansys.ai/wp-content/uploads/2024/12/6.png"
                  alt="omelo"
                  className="hover:scale-105"
                />
              </li>
              <li>
                <img
                  src="	https://quansys.ai/wp-content/uploads/2024/12/5-1.png"
                  alt="7stone"
                  className="hover:scale-105"
                />
              </li>
            </ul>
          </div>

          <div className="mt-15 mb-12 flex flex-col items-center justify-center">
            <p className="text-white lg:text-md">We're part of</p>

            <div
              className="flex items-center justify-center gap-5 mt-7 "
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-mirror="true"
            >
              <img
                src="https://www.quansys.ai/wp-content/uploads/2024/12/00.png"
                alt="amazon"
                className="w-20 lg:w-44"
              />
              <img
                src="https://www.quansys.ai/wp-content/uploads/2024/12/11-1.png"
                alt="amazon"
                className="w-20 lg:w-44"
              />
              <img
                src="https://www.quansys.ai/wp-content/uploads/2024/12/33.png"
                alt="amazon"
                className="w-20 lg:w-44"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
