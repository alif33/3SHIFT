import React from "react";

const FooterNavbar = () => {
  return (
    <div className="flex justify-center items-center py-4 lg:h-24">
      <ul className="uppercase text-sm  footer_nav grid grid-cols-2 lg:grid-cols-6  md:text-center lg:gap-x-3 gap-6 text-center mx-auto">
        <a href="#">
          <li>became a member</li>
        </a>
        <a href="#">
          <li>about us</li>
        </a>
        <a href="#">
          <li>contact us</li>
        </a>
        <a href="#">
          <li>privacy</li>
        </a>
        <a href="#">
          <li>terms of service</li>
        </a>
        <a href="#">
          <li>catalogue</li>
        </a>
      </ul>
    </div>
  );
};

export default FooterNavbar;
