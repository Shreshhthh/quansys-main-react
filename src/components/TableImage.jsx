import React, { useEffect, useState } from "react";

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

  const [muteVideo, setMuteVideo] = useState(true);

  const handleNext = () => {
    setActiveIndex((current) =>
      current < DesktopData.length - 1 ? current + 1 : 0
    );
  };

  return (
    <div className="w-full mt-25 mb-15" id="table-images">
      <main className="flex flex-col items-center justify-center " id="lisa">
        <div className="flex flex-col items-center justify-center">
          <h2 className="lg:text-[64px] text-2xl font-bold text-center">
            Virtual Human AI Agent
          </h2>
          <p className="text-gray-500 mx-auto lg:w-[40%] w-[90%] text-center px-5">
            A hyper-realistic virtual human with vision, capable of seeing,
            understanding, and interacting during video calls. It combines
            lifelike face and voice with the ability to connect to enterprise
            systems, delivering intelligent, action-driven support in real time.
          </p>
          <button className="mt-5 bg-black text-white px-[10px] py-[6px] rounded-full">
            Get Started
          </button>

          <div className=" w-[75%] gap-35 mt-10 mx-auto">
            <div className="lg:flex flex-cols w-full items-center justify-center gap-25">
              <video
                alt="lisa video"
                className="rounded-2xl lg:w-[40%] lg:h-[40%]"
                autoPlay={true}
                loop={true}
                muted={muteVideo}
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

                <div className="h-[1px] w-full bg-black mt-3" />

                <p className="mt-3 text-gray-500">
                  {" "}
                  A hyper-realistic virtual human with vision, capable of
                  seeing, understanding, and interacting during video calls.
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
