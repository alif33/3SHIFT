import React from "react";

const Navbar = () => {
  if (typeof window !== "undefined") {
    const Li = document.querySelectorAll("ul li");
    Li.forEach((li) => {
      li.addEventListener("click", () => {
        remove();
        li.classList.add("navActive");
      });
    });
    function remove() {
      Li.forEach((li) => {
        li.classList.remove("navActive");
      });
    }
  }
  return (
    <div className="px-4 flex justify-center items-center h-14 border-b border-gray-700 header_navbar">
      <ul className="uppercase flex items-center space-x-6 lg:text-sm text-xs">
        <li className="navActive">Who we are</li>
        <li>what we do</li>
        <li>became a member</li>
        <li>our mainifesto</li>
      </ul>
    </div>
  );
};

export default Navbar;
