import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDotCircle } from "react-icons/fa";

const Features = () => {
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

  return (
    <div className="w-full bg-[#071b20] py-20" id="features">
      <div className="rounded-3xl p-12 max-w-7xl mx-auto w-[90%] lg:w-[70%]">
        <h2 className="text-white text-3xl lg:text-[64px] font-semibold text-center mb-16">
          Features
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 ">
          <div className="space-y-4 lg:mx-auto flex justify-center flex-col items-start">
            {featuresList[0].left.map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                <FaDotCircle className="text-white" />
                <span className="text-white lg:text-lg">{feature}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4 lg:mx-auto flex justify-center flex-col items-start">
            {featuresList[0].right.map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                <FaDotCircle className="text-white" />
                <span className="text-white lg:text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
