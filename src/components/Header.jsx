import React from "react";

const Header = () => {
  return (
    <div className="bg-black flex items-center justify-center sticky top-0">
      <nav className="w-[90%] flex justify-between items-center h-16">
        <a href="#">
          <img src="/logo.png" alt="logo" className="w-32" />
        </a>

        <ul className="flex justify-between items-center gap-5">
          <li className="mx-4">
            <a href="#" className="text-white text-sm">
              Home
            </a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-white text-sm">
              Phone Call Agent
            </a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-white text-sm">
              Virtual Human Agent
            </a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-white text-sm">
              Features
            </a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-white text-sm">
              Enterprise
            </a>
          </li>
        </ul>

        <div className="flex justify-between items-center bg-white rounded-full w-24 h-10">
          <button className="text-sm px-1 text-black font-bold">
            Book a demo
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
