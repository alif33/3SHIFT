import React from "react";

const FooterNavbar = () => {
  return (
    <div className="flex justify-center items-center h-24">
      <ul className="uppercase text-sm flex justify-center items-center space-x-8 footer_nav">
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
        <li>catalogue</li>
        <a href="#"></a>
      </ul>
    </div>
  );
};

export default FooterNavbar;
