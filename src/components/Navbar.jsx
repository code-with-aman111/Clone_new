import React, { useState } from "react";
import group from "../assets/Group.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 sm:px-20 md:px-40 mb-4 py-4 fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center">
          <img src={group} alt="" className="w-24 h-7 mr-10 sm:mr-16" />
          <ul className="font-bold hidden sm:flex">
            <li className="text-highlight mr-6 font-extrabold animate make-animate">
              Home
            </li>
            <li className="mr-6 animate make-animate">About Us</li>
            <li className="mr-6 animate make-animate">Pricing</li>
            <li className="mr-6 animate make-animate">Features</li>
          </ul>
        </div>
        <button className="bg-black md:w-32 text-white rounded text-xs px-5 py-2 hidden sm:block font-jura transition duration-300 ease-in-out transform hover:scale-105">
          Download
        </button>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-black animate-lg make-animate"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden fixed top-14 left-0 right-0 bg-white shadow-md z-40 px-6 pb-4">
          <ul className="font-extrabold flex flex-col space-y-2">
            <li className="text-highlight cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Features</li>
          </ul>
          <button className="bg-black text-white rounded text-xs px-5 py-2 mt-4 w-full font-jura transition duration-500 ease-in-out transform hover:scale-105">
            Download
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
