import React, { useState, useRef } from "react";

import { FaPlay, FaPause } from "react-icons/fa";

const SampleVideos = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleOnPlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };
  const handleOnPause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="bg-[#514a3a] py-20 lg:py-0 lg:min-h-[800px] lg:flex flex-col justify-center items-center">
      <div className="w-[90%] lg:h-[65vh] bg-[#d7cecc] rounded-3xl lg:flex justify-between items-center mx-auto p-7 ">
        <div className="lg:w-[50%] lg:h-[90%] my-auto pt-10">
          <h1 className="lg:text-[73px] text-3xl font-bold lg:leading-18 lg:w-[75%]">
            Listen for yourself.
          </h1>
          <p className="text-[#6b6766] text-sm lg:text-[16px] lg:w-[90%] lg:mt-7 mt-3">
            {" "}
            Our agents are capable of handling complex queries, can talk in and
            understand Indian accents, and can also trigger workflows for users
          </p>
          <button className="bg-black text-white rounded-full py-2 px-3 lg:mt-10 mt-5 text-xs lg:text-[16px]">
            Book a Demo
          </button>
        </div>

        <div className="lg:w-[55%] relative ">
          <video
            ref={videoRef}
            src="/quansys-sample-call.mp4"
            alt="sample-call"
            className="rounded-3xl object-cover lg:h-[60vh] h-[30vh] w-[100%] mt-5 lg:mt-0"
          ></video>
          {!isPlaying ? (
            <button
              className="absolute top-[45%] right-[46%] rounded-full w-15 h-15 flex items-center pl-[5px] justify-center bg-[#d7cecc] cursor-pointer"
              id="play-button"
              onClick={handleOnPlay}
            >
              <FaPlay className="w-7 h-7 text-black" />
            </button>
          ) : (
            <button
              className="absolute top-[45%] right-[46%] rounded-full w-15 h-15 flex items-center pl-[2px] justify-center bg-[#d7cecc] cursor-pointer"
              onClick={handleOnPause}
            >
              <FaPause className="w-7 h-7 text-black" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SampleVideos;
