import React from "react";
import Telegram from "../assets/telegram-logo.png";
import Twitter from "../assets/twitter-logo.png";
import etherscan from "../assets/etherscan-logo.png";
import dextools from "../assets/dextools-logo2.png";

const Footer = () => {
  return (
    <footer className="py-[30px] bg-black text-white">
      <div className="container flex justify-center items-center gap-5 flex-wrap">
        <a href="https://t.me/RisitasEth">
          <img
            src={Telegram}
            alt=""
            className="bg-white p-3 rounded-full hover:bg-secondary animate-bounce "
          />
        </a>
        <a href="https://twitter.com/RisitasCoinErc">
          <img
            src={Twitter}
            alt=""
            className="bg-white p-3 rounded-full hover:bg-secondary animate-pulse"
          />
        </a>
        <a href="">
          <img
            src={etherscan}
            alt=""
            className="bg-white p-3 rounded-full hover:bg-secondary animate-pulse"
          />
        </a>
        <a href="">
          <img
            src={dextools}
            alt=""
            className="bg-white p-3 rounded-full hover:bg-secondary animate-bounce"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
