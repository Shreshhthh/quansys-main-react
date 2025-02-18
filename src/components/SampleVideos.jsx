import React, { useState, useRef } from "react";

import { FaPlay, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SampleVideos = () => {
  const navigate = useNavigate();

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
          <h1 className="lg:text-[73px] text-[32px] leading-[35px] font-bold lg:leading-18 lg:w-[75%]">
            Listen for yourself.
          </h1>
          <p className="text-[#6b6766] text-sm lg:text-[16px] lg:w-[90%] lg:mt-7 mt-3">
            {" "}
            Our agents are capable of handling complex queries, can talk in and
            understand Indian accents, and can also trigger workflows for users
          </p>
          <button
            className="bg-black text-white rounded-full py-2 px-3 lg:mt-10 mt-5 text-xs lg:text-[16px] cursor-pointer"
            onClick={() => navigate("/book-a-demo")}
          >
            Book a Demo
          </button>
        </div>

        <div className="bg-purple-500 rounded-3xl lg:w-[55%] lg:mt-0 mt-5 relative p-[3px] bg-conic/[from_var(--border-angle)] from-purple-500 via-pink-500 to-purple-900 animate-border-spin">
          <video
            ref={videoRef}
            src="/quansys-sample-call.mp4"
            alt="sample-call"
            className="rounded-3xl object-cover lg:h-[60vh] h-[30vh] w-[100%]  "
          ></video>
          {!isPlaying ? (
            <button
              className="absolute top-[45%] right-[46%] rounded-full lg:w-15 lg:h-15 h-10 w-10 flex items-center pl-[5px] justify-center bg-[#d7cecc] cursor-pointer "
              id="play-button"
              onClick={handleOnPlay}
            >
              <FaPlay className="lg:w-7 lg:h-7 h-5 w-5 text-black" />
            </button>
          ) : (
            <button
              className="absolute top-[45%] right-[46%] rounded-full lg:w-15 lg:h-15 h-10 w-10 flex items-center pl-[2px] justify-center bg-[#d7cecc] cursor-pointer"
              onClick={handleOnPause}
            >
              <FaPause className="lg:w-7 lg:h-7 h-5 w-5 text-black" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SampleVideos;
