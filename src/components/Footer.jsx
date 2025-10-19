import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-400 py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-6">
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <img src={logo} alt="SquareUp Logo" className="w-10 h-10" />
          <span className="text-white font-barlow font-semibold text-lg">SquareUp</span>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <li className="hover:text-lime-400 transition">Home</li>
          <li className="hover:text-lime-400 transition">Services</li>
          <li className="hover:text-lime-400 transition">Work</li>
          <li className="hover:text-lime-400 transition">Process</li>
          <li className="hover:text-lime-400 transition">About</li>
          <li className="hover:text-lime-400 transition">Careers</li>
          <li className="hover:text-lime-400 transition">Contact</li>
        </ul>

        <div className="flex items-center space-x-4 mt-6 md:mt-0">
          <span className="text-sm text-white mr-2">Stay Connected</span>
          <div className="flex space-x-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#111] hover:bg-lime-400 rounded-md transition">
              <FaFacebookF className="text-lime-400 hover:text-black transition" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#111] hover:bg-lime-400 rounded-md transition">
              <FaTwitter className="text-lime-400 hover:text-black transition" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#111] hover:bg-lime-400 rounded-md transition">
              <FaLinkedinIn className="text-lime-400 hover:text-black transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-lime-400" />
            <span>hello@squareup.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-lime-400" />
            <span>+91 91813 23 2309</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-lime-400" />
            <span>Somewhere in the World</span>
          </div>
        </div>

        <p className="text-gray-600">© 2023 SquareUp. All rights reserved.</p>
      </div>
    </footer>
  );
}
