"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-6 ">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="flex items-center text-[32px] font-bold leading-[45.2px] tracking-tight gap-0">
            <img className="w-[21px] h-[29px] mt-1" src="logo.svg" alt="Logo" />
            teach
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav"
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-white-700 hover:text-blue-700 hover:border-white-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`menu w-full  flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-md font-bold text-gray-700 lg:flex-grow flex items-center space-x-4">
          <a
            href="#responsive-header"
            className="block px-2 py-1 rounded text-sm font-[sans-serif]"
          >
            Products
          </a>
          <a
            href="#responsive-header"
            className="block px-2 py-1 rounded text-sm font-[sans-serif]"
          >
            Solutions
          </a>
          <a
            href="#responsive-header"
            className="block px-2 py-1 rounded text-sm font-[sans-serif]"
          >
            Pricing
          </a>
          <a
            href="#responsive-header"
            className="flex  px-2 py-1 rounded text-sm font-[sans-serif]"
          >
            Resources
            <img
              src="drop-down.png"
              alt="Dropdown"
              className="ml-3 mt-1 w-4 h-4"
            />
          </a>
        </div>

        <div className="flex space-x-2 ml-4 font-bold">
          <a
            href="#"
            className="flex w-[63px] h-[48px] px-1 py-4 rounded bg-white-500 text-gray-700 text-sm font-[sans-serif]"
          >
            Log In
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-[153px] h-[48px] px-2 py-3 rounded-lg border-2 border-gray-700 bg-transparent text-gray-700 text-sm font-[sans-serif]"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
