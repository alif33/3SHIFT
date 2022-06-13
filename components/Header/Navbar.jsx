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
    <div className="px-4 flex justify-center items-center lg:h-14 lg:border-b  border-gray-700 header_navbar py-2 ">
      <ul className="uppercase grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 lg:space-x-4 lg:text-sm text-xs text-center">
        <li className="navActive w-max">Who we are</li>
        <li className="w-max">what we do</li>
        <li>became a member</li>
        <li>our mainifesto</li>
      </ul>
    </div>
  );
};

export default Navbar;
