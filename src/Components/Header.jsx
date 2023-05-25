import React from "react";
import logo from "../assets/logo.avif";

const Header = () => {
  return (
    <header className="py-1 relative w-full top-0 h-[80px] flex justify-between items-center border-white border-b-4 shadow-2xl">
      <div className="container flex justify-center items-center font-Baller">
        <img
          src={logo}
          className="w-[5rem] rounded-full h-[5rem] object-cover absolute -bottom-10 border-4 border-white animate-bounce"
          alt=""
        />
        <h1 className="text-6xl text-center text-white uppercase">$Risitas</h1>
      </div>
    </header>
  );
};

export default Header;
