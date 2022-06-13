import React from "react";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";

const index = () => {
  return (
    <>
      <div className="max-w-[1512px] mx-auto  min-h-screen bg-black text-white">
        <Header />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default index;
