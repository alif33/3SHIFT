import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
const TopHeader = () => {
  return (
    <div className="flex justify-between items-center h-[91px] border-b border-gray-700 px-4">
      {/* left */}
      <div>
        <AiOutlineMenu className="h-8 w-8 text-white" />
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
        <AiOutlineSearch className="h-8 w-8" />
        <div className="h-8 w-8 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default TopHeader;
