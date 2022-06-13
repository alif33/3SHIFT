import React from "react";
import FromBox from "./FromBox";
import FromText from "./FromText";

const Form = () => {
  return (
    <div>
      <FromText />
      <div className="min-h-screen">
        <FromBox />
      </div>
    </div>
  );
};

export default Form;
