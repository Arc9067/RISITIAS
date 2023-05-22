import React from "react";
import Money from "../assets/money.png";

const About = () => {
  return (
    <section className="py-fifty w-full bg-secondary">
      <div className="container">
        <div className="flex bg-yellow-500 border-2 rounded-3xl py-4 px-2 -rotate-3 justify-center items-center flex-col gap-5">
          <h1 className="text-7xl flex items-center gap-4">
            <img src={Money} alt="" className="w-[5rem]" />
            about
          </h1>
          <p className="font-iBM text-center max-w-xl text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere
            iure voluptatibus, totam sed nisi aliquam dignissimos pariatur eos
            recusandae? Optio vitae quasi voluptate obcaecati, provident
            consequatur doloremque quos vero!
          </p>
          <p className="font-iBM text-center max-w-xl text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere
            iure voluptatibus, totam sed nisi aliquam dignissimos pariatur eos
            recusandae? Optio vitae quasi voluptate obcaecati, provident
            consequatur doloremque quos vero!
          </p>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default About;
