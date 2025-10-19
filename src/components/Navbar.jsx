import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Process", path: "/process" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav className="bg-brand text-white px-6 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="SquareUp Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="font-semibold text-lg">SquareUp</h1>
        </Link>

        <ul className="hidden md:flex space-x-4 text-sm text-gray-300">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:block bg-button text-black px-4 py-2 rounded-md font-semibold hover:bg-lime-400 transition"
        >
          Contact Us
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 bg-neutral-900 rounded-lg p-4 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-button text-black px-4 py-2 rounded-md font-semibold hover:bg-lime-400 transition text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
