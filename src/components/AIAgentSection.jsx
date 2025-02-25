import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <div className="w-full mt-25 mb-15" id="table-images">
      <main className="flex flex-col items-center justify-center " id="lisa">
        <div className="flex flex-col items-center justify-center px-3">
          <h2 className="lg:text-[64px] text-3xl font-bold text-center">
            Multilingual AI Call Agent
          </h2>
          <p className="text-gray-500 mx-auto lg:w-[40%] w-[90%] text-center px-5 mt-2">
            A multilingual AI call agent provides seamless communication across
            languages, enhancing customer experience with automated support and
            personalized interactions worldwide. It bridges cultural gaps
            efficiently, ensuring consistent service quality globally.
          </p>
          {/* <button
            className="mt-5 bg-black text-white px-[10px] py-[6px] rounded-full"
            onClick={() => navigate("/book-a-demo")}
          >
            Get Started
          </button> */}

          <div className=" w-[75%] gap-35 mt-10 mx-auto">
            <div className="lg:flex flex-cols w-full items-center justify-center gap-25">
              <video
                alt="lisa video"
                className="rounded-2xl lg:w-[45%] lg:h-[50%]"
                autoPlay={true}
                loop={true}
                muted={true}
              >
                <source src="/lisa.mp4" type="video/mp4" alt="lisa video" />
              </video>
              <div className="">
                <div className="flex mt-5 ">
                  <h1 className="font-bold lg:text-3xl text-2xl">Lisa</h1>
                  <h1 className="ml-1 font-bold lg:text-3xl text-2xl opacity-30 ">
                    - AI Call Agent
                  </h1>
                </div>

                <div className="h-[1px] w-full bg-gray-500 mt-3" />

                <p className="mt-3 text-gray-500">
                  {" "}
                  A cutting-edge multilingual AI call agent designed to bridge
                  language gaps seamlessly, provides personalized customer
                  experiences in multiple languages.
                </p>
              </div>
            </div>

            {/* <div className="flex flex-col ">
              <video
                alt="lisa video"
                className="rounded-2xl"
                autoPlay={true}
                loop={true}
                muted={muteVideo}
              >
                <source src="/lisa.mp4" type="video/mp4" alt="lisa video" />
              </video>
              <div className="flex mt-5">
                <h1 className="font-bold text-3xl">Lisa</h1>
                <h1 className="ml-1 font-bold text-3xl opacity-30">
                  - AI Call Agent
                </h1>
              </div>

              <div className="h-[1px] w-full bg-black mt-3" />

              <p className="mt-3 text-gray-500">
                {" "}
                A hyper-realistic virtual human with vision, capable of seeing,
                understanding, and interacting during video calls.
              </p>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TableImage;
