import React from "react";
import Money from "../assets/logo.avif";
import {
  TbBrandTelegram,
  TbBrandTwitter,
  TbCurrencyEthereum,
} from "react-icons/tb";
import { MdShowChart } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="py-Hun text-white hero">
      <div className="container grid md:grid-cols-2 items-center justify-between gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl bg-white z-10 w-max uppercase -rotate-3 text-black duration-1000 transition">
            king of meme
          </h1>
          <img src={Money} alt="" className="mt-4 mix-blend-normal" />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="title text-7xl md:text-9xl w-max title uppercase">
            $Risitas
          </h1>
          <p className="text-white/70 text-xl leading-relaxed font-iBM">
            In the loving memory of Lord of memes EL RISITAS , we are launching
            a 0 tax community meme coin with an highly experienced team working
            behind the scene .
            <br />
            <br />
            <br />
            EL RISITAS will always be remembered and will always live in our
            hearts!!
          </p>
          <div className="flex gap-3 flex-wrap font-iBM font-bold md:justify-start">
            <a
              href="https://t.me/RisitasEth"
              className="text-5xl hover:shadow-2xl"
            >
              <TbBrandTelegram />
            </a>
            <a
              href="https://twitter.com/RisitasCoinErc"
              className="text-5xl hover:shadow-2xl"
            >
              <TbBrandTwitter />
            </a>
            <a
              href="mailto:Marketing@teamrisitas.com"
              className="text-5xl hover:shadow-2xl"
            >
              <FiMail />
            </a>
            <a
              href="https://etherscan.io/address/0x247b1dfdf834b075fd97e2bb2b0b22d4442dac5b"
              className="text-5xl hover:shadow-2xl"
            >
              <TbCurrencyEthereum />
            </a>
            <a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0x08ae1c7e3b3dca489f31a23eab1a1ea515dc6404"
              className="text-5xl hover:shadow-2xl"
            >
              <MdShowChart />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
