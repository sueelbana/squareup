import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function OperatingSocial() {
  return (
    <div className="bg-brand text-white py-10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 px-6">
      <div className="flex items-center gap-3">
        <span className="text-gray-300 text-sm md:text-base">
          Operating Days
        </span>
        <div className="bg-[#1a1a1a] text-gray-200 px-4 py-2 rounded-md text-sm md:text-base">
          Monday to Friday
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-gray-300 text-sm md:text-base">
          Stay Connected
        </span>
        <div className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-2 rounded-md">
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#222] transition-all">
            <Facebook className="w-5 h-5 text-[rgba(158,255,0,1)]" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#222] transition-all">
            <Twitter className="w-5 h-5 text-[rgba(158,255,0,1)]" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#222] transition-all">
            <Linkedin className="w-5 h-5 text-[rgba(158,255,0,1)]" />
          </button>
        </div>
      </div>
    </div>
  );
}
