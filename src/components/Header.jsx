import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const getUrl = useLocation().pathname;
  const navigate = useNavigate();

  //change nav color while scrolling
  const [colorWhileScroll, setColorWhileScroll] = useState(false);
  // if (getUrl === "/book-a-demo") {
  //   () => setColorWhileScroll(true);
  // }
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColorWhileScroll(true);
    } else {
      setColorWhileScroll(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  //toggle options for mobile
  const [toggleOptions, setToggleOptions] = useState(false);

  const handleOnClickForToggleOptions = () => {
    setToggleOptions(true);
  };

  return (
    <div
      className={
        colorWhileScroll
          ? `bg-white text-black fixed top-0 w-full transition-all z-50 font-semibold`
          : `fixed top-0 w-full z-50 text-white`
      }
      style={
        getUrl === "/book-a-demo"
          ? { backgroundColor: "white", color: "black" }
          : {}
      }
    >
      <nav className="w-[90%] mx-auto flex justify-between items-center h-16 ">
        <img
          src="/logo.png"
          alt="logo"
          className={
            getUrl === "/book-a-demo" || colorWhileScroll
              ? "w-32 invert-100 cursor-pointer"
              : "w-32 cursor-pointer"
          }
          onClick={() => navigate("/")}
        />

        <ul className="lg:flex hidden justify-between items-center gap-10">
          <li className="">
            <Link to="/" className=" text-sm">
              Home
            </Link>
          </li>
          <li className="">
            <a href="/#table-images" className=" text-sm">
              Phone Call Agent
            </a>
          </li>
          <li className="">
            <a href="/#lisa" className="text-sm ">
              Virtual Human Agent
            </a>
          </li>
          <li className="">
            <a href="#features" className=" text-sm">
              Features
            </a>
          </li>
          <li className="">
            <Link to="/book-a-demo" className="text-sm">
              Enterprise
            </Link>
          </li>
        </ul>

        <div className="flex justify-between items-center gap-2">
          <Link
            to="/book-a-demo"
            className={
              colorWhileScroll
                ? "bg-black text-white px-[10px] py-[6px] rounded-full"
                : "bg-white text-black px-[10px] py-[6px] rounded-full"
            }
          >
            Book a demo
          </Link>

          <div className="lg:hidden" onClick={setToggleOptions}>
            <HiMiniBars3CenterLeft className="text-white w-7 h-7 cursor-pointer" />
          </div>
        </div>
      </nav>
      {toggleOptions && (
        <div className="w-full h-full overflow-y-hidden bg-white fixed top-0 z-10 ">
          <p
            className="flex justify-end "
            onClick={() => setToggleOptions(!toggleOptions)}
          >
            <RxCross2 className="w-10 h-10 mr-4 mt-4" />
          </p>
          <ul className="flex justify-center items-center flex-col gap-3 mt-20">
            <li className="text-lg">Home</li>
            <li className="text-lg">Phone Call Agent</li>
            <li className="text-lg">Virtual Human Agent</li>
            <li className="text-lg">Features</li>
            <li className="text-lg">Enterprise</li>
          </ul>

          <div className="bg-black h-10 rounded-full w-[80%] flex items-center justify-center mt-48 mx-auto">
            <button className="text-white">Book A Demo</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
