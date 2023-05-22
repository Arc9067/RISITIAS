import React from "react";
import Money from "../assets/logo.avif";
import {
  TbBrandTelegram,
  TbBrandTwitter,
  TbCurrencyEthereum,
} from "react-icons/tb";
import { MdShowChart } from "react-icons/md";
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
            $risitias
          </h1>
          <p className="text-white/70 text-xl leading-relaxed font-iBM">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            provident quia debitis saepe quo odio laborum modi quasi quos quam
            similique blanditiis tenetur obcaecati eaque eum iusto ipsam quas
            ex!
          </p>
          <div className="flex gap-3 flex-wrap font-iBM font-bold md:justify-start">
            <a href="" className="text-5xl hover:shadow-2xl">
              <TbBrandTelegram />
            </a>
            <a href="" className="text-5xl hover:shadow-2xl">
              <TbBrandTwitter />
            </a>
            <a href="" className="text-5xl hover:shadow-2xl">
              <TbCurrencyEthereum />
            </a>
            <a href="" className="text-5xl hover:shadow-2xl">
              <MdShowChart />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
