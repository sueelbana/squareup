import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for the menu icons
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand text-white px-6 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="SquareUp Logo" className="w-8 h-8 object-contain" />
          <h1 className="font-semibold text-lg">SquareUp</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4 text-sm text-gray-300">
          {["Home", "Services", "Work", "Process", "About", "Careers"].map((item) => (
            <li
              key={item}
              className="hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-button text-black px-4 py-2 rounded-md font-semibold hover:bg-lime-400 transition">
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 bg-neutral-900 rounded-lg p-4 shadow-lg">
          {["Home", "Services", "Work", "Process", "About", "Careers"].map((item) => (
            <div
              key={item}
              className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition"
            >
              {item}
            </div>
          ))}
          <button className="w-full bg-button text-black px-4 py-2 rounded-md font-semibold hover:bg-lime-400 transition">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
