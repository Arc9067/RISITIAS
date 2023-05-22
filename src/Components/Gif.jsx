import React from "react";
import gif from "../assets/risitas.gif";

const Gif = () => {
  return (
    <section className="py-fifty w-full flex justify-center items-center">
      <div className="container">
        <img src={gif} alt="" className="mx-auto"/>
      </div>
    </section>
  );
};

export default Gif;
