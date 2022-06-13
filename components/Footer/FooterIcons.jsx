import React from "react";
import {
  GrFacebookOption,
  GrInstagram,
  GrPinterest,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
const FooterIcons = () => {
  return (
    <div className="flex justify-center items-center border-t border-b border-gray-700 h-20">
      <ul className="flex space-x-10 footer_nav">
        <a href="#">
          <li>
            <GrFacebookOption className="h-5 w-5" />
          </li>
        </a>
        <a href="#">
          <li>
            <GrInstagram className="h-5 w-5" />
          </li>
        </a>
        <a href="#">
          <li>
            <GrPinterest className="h-5 w-5" />
          </li>
        </a>
        <a href="#">
          <li>
            <GrTwitter className="h-5 w-5" />
          </li>
        </a>
        <a href="#">
          <li>
            <GrYoutube className="h-5 w-5" />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default FooterIcons;
