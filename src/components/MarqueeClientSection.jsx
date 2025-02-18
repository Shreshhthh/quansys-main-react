import React from "react";
import { SiSquare } from "react-icons/si";

const marqueeImages = [
  {
    logo: "/1-marg.png",
  },
  {
    logo: "/2-pazcare.png",
  },
  {
    logo: "/3-ayushpay.png",
  },
  {
    logo: "/4-intargos.png",
  },
  {
    logo: "/6-omelo.png",
  },
  {
    logo: "/5-7stone.png",
  },
];

const featuresList = [
  "Multiple Voices",
  "Hyper Realistic Voice",
  "Fine tune LLM",
  "Call Transcriptions",
  "User satisfaction report",
  "Self-Improving AI Agents",
  "Voice cloning",
  "Minimum Latency",
  "Call Insights",
  "Users sentiment Analysis",
];

const MarqueeClientSection = () => {
  return (
    // <main className=" mx-auto hidden lg:flex overflow-hidden space-x-1 mt-5">
    //   <div className="animate-loop-scroll flex space-x-15">
    //     {marqueeImages.map((image, index) => (
    //       <img
    //         src={image.logo}
    //         key={index}
    //         className={
    //           index === 1
    //             ? `backdrop-invert-100 w-20 gap-15`
    //             : `invert-100 w-20 gap-15`
    //         }
    //       />
    //     ))}
    //     {marqueeImages.map((image, index) => (
    //       <img
    //         src={image.logo}
    //         key={index}
    //         className={
    //           index === 1
    //             ? `backdrop-invert-100 w-20 gap-15`
    //             : `invert-100 w-20 gap-15`
    //         }
    //       />
    //     ))}
    //     {marqueeImages.map((image, index) => (
    //       <img
    //         src={image.logo}
    //         key={index}
    //         className={
    //           index === 1
    //             ? `backdrop-invert-100 w-20 gap-15`
    //             : `invert-100 w-20 gap-15`
    //         }
    //       />
    //     ))}
    //   </div>
    // </main>

    <main className=" hidden lg:flex overflow-hidden mt-5">
      {/* <div className="animate-loop-scroll flex gap-4">
        {featuresList.map((item, index) => (
          <span className="bg-[#f3f4f61a] w- flex flex-nowrap items-center gap-2">
            <p className="text-white w-auto flex items-center">{item}</p>
          </span>
        ))}
      </div> */}
    </main>
  );
};

export default MarqueeClientSection;
