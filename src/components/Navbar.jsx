import React from "react";
import logo from "../assets/logo.jpg"; 

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-brand text-white">
      <div className="flex items-center space-x-3">
        {/* Logo Image */}
        <img
          src={logo}
          alt="SquareUp Logo"
          className="w-8 h-8 object-contain"
        />
        <h1 className="font-semibold text-lg">SquareUp</h1>
      </div>

      {/* Center: Nav Links */}
      <ul className="hidden md:flex space-x-2 text-sm text-gray-300">
        <li className="hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition">
          Home
        </li>
        <li className="hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition">
          Services
        </li>
        <li className="hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition">
          Work
        </li>
        <li className="hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition">
          Process
        </li>
        <li className="hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition">
          About
        </li>
        <li className="hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition">
          Careers
        </li>
      </ul>

      <button className="bg-button text-black px-4 py-2 rounded-md font-semibold hover:bg-lime-400 transition">
        Contact Us
      </button>
    </nav>
  );
}
