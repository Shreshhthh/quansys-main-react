import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[url(/hero-image.jpg)] flex justify-center items-center bg-center bg-cover ">
      <div className="w-[80%] flex justify-center items-center">
        <div className="flex items-center justify-between flex-col">
          <h1 className="text-[86px] font-bold text-white text-center leading-[80px] mt-56">
            AI Agents Empowering Enterprise Support
          </h1>
          <div className="w-[42rem] mt-5">
            <p className="text-center text-[18px] text-white mx-10 ">
              AI call agents for seamless support and sales, offering custom
              voices and the ability to handle thousands of phone calls
              simultaneously
            </p>
          </div>
          <div className="mt-20">
            <ul className="flex gap-12">
              <li>
                <img
                  src="https://quansys.ai/wp-content/uploads/2024/12/1.png"
                  alt="marg"
                />
              </li>
              <li>
                <img
                  src="https://quansys.ai/wp-content/uploads/2024/12/2.png"
                  alt="payzcare"
                />
              </li>
              <li>
                <img
                  src="https://quansys.ai/wp-content/uploads/2024/12/3.png"
                  alt="ayushpay"
                />
              </li>
              <li>
                <img
                  src="https://quansys.ai/wp-content/uploads/2024/12/4.png"
                  alt="intargos"
                />
              </li>
              <li>
                <img
                  src="https://quansys.ai/wp-content/uploads/2024/12/6.png"
                  alt="omelo"
                />
              </li>
              <li>
                <img
                  src="	https://quansys.ai/wp-content/uploads/2024/12/5-1.png"
                  alt="7stone"
                />
              </li>
            </ul>
          </div>

          <div className="mt-10 mb-10 flex flex-col items-center justify-center">
            <p className="text-white">We're part of</p>

            <div className="flex items-center justify-center gap-5 mt-7">
              <img
                src="https://www.quansys.ai/wp-content/uploads/2024/12/00.png"
                alt="amazon"
                className="w-44 "
              />
              <img
                src="https://www.quansys.ai/wp-content/uploads/2024/12/11-1.png"
                alt="amazon"
                className="w-44 "
              />
              <img
                src="https://www.quansys.ai/wp-content/uploads/2024/12/33.png"
                alt="amazon"
                className="w-44"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
