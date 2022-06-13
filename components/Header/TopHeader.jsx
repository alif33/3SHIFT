import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
const TopHeader = () => {
  return (
    <div className="flex justify-between items-center h-[91px] border-b border-gray-700 px-4">
      {/* left */}
      <div>
        <AiOutlineMenu className="h-8 w-8 text-white cursor-pointer hover:text-rose-500 transition-all duration-200 ease-in" />
      </div>
      {/* meddle */}
      <div>
        <h1
          className="uppercase font-normal  text-3xl"
          style={{ letterSpacing: "6px" }}
        >
          Shift
        </h1>
      </div>
      {/* right */}
      <div className="flex space-x-2">
        <AiOutlineSearch className="h-8 w-8 hover:text-rose-500 transition-all duration-200 ease-in cursor-pointer" />
        <div className="h-8 w-8 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default TopHeader;
