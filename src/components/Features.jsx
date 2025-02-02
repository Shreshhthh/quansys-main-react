import React from "react";

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
    <div className="bg-black rounded-3xl p-12 max-w-7xl mx-auto w-[80%]">
      <h2 className="text-white text-4xl font-semibold text-center mb-16">
        Features
      </h2>
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
        <div className="space-y-4">
          {featuresList[0].left.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-500" />
              <span className="text-gray-300 text-lg">{feature}</span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {featuresList[0].right.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-500" />
              <span className="text-gray-300 text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
