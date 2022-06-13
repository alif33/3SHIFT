import React from "react";
import FromBox from "./FromBox";
import FromText from "./FromText";

const Form = () => {
  return (
    <div>
      <FromText />
      <div className="min-h-screen flex justify-center  mx-auto">
        <FromBox />
      </div>
    </div>
  );
};

export default Form;
