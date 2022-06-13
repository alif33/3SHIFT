import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="">
      {/* Brand */}
      <TopHeader />
      {/* Nav Link */}
      <Navbar />
    </div>
  );
};

export default Header;
