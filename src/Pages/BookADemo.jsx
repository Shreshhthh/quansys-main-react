import React from "react";
import Header from "../components/Header";
import MarqueeClientSection from "../components/MarqueeClientSection";

const BookADemo = () => {
  return (
    <div className="bg-[#2C3930] min-h-[1000px]">
      <Header />

      <div className=" flex justify-center items-center pt-20 flex-col">
        <h1 className="lg:text-[64px] text-[30px] text-white font-bold text-center">
          Book a Personalized Demo!
        </h1>
        <p className="text-[16px] text-white mt-7 opacity-80 text-center">
          Schedule a product demo with our expert team.
        </p>

        <div className="lg:w-[50%] w-[90%] mt-10 flex justify-center items-center bg-white rounded-2xl">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdfQEEfXHvq51VJRRHTYJuglPl6Ac0JLv0BLvqxMyABAfNhTA/formResponse"
            frameBorder="0"
            className="w-[100%] h-[50rem] rounded-2xl"
          ></iframe>
        </div>

        <ul className="grid grid-cols-2 lg:flex lg:gap-30 gap-x-10 mx-auto py-20">
          <li>
            <img src="/1-marg.png" alt="marg" className=" w-25 lg:w-30" />
          </li>
          <li>
            <img src="/2-pazcare.png" alt="payzcare" className="w-25 lg:w-30" />
          </li>
          <li>
            <img
              src="/3-ayushpay.png"
              alt="ayushpay"
              className=" w-25 lg:w-30"
            />
          </li>
          <li>
            <img
              src="/4-intargos.png"
              alt="intargos"
              className=" w-25 lg:w-30"
            />
          </li>
          <li>
            <img src="/6-omelo.png" alt="omelo" className=" w-25 lg:w-30" />
          </li>
          <li>
            <img src="/5-7stone.png" alt="7stone" className=" w-25 lg:w-30" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookADemo;
