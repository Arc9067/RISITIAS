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
    <section className="py-fifty text-white hero">
      <div className="container grid md:grid-cols-2 items-center justify-between gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl bg-white z-10 w-max uppercase -rotate-3 text-black duration-1000 transition">
            king of meme
          </h1>
          <img
            src={Money}
            alt=""
            className="mt-4 mix-blend-normal animate-bounce"
          />
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
          <div className="flex gap-3 flex-wrap justify-between font-iBM font-bold md:justify-start">
            <a
              href=""
              className="flex uppercase text-2xl text-black transition hover:bg-transparent hover:border-2 hover:text-white hover:border-black bg-white w-max p-4 items-center gap-4"
            >
              telegram
              <TbBrandTelegram />
            </a>
            <a
              href=""
              className="flex uppercase text-2xl text-white transition hover:bg-transparent hover:border-2 hover:border-black bg-transparent border-2 w-max p-4 items-center gap-4"
            >
              twitter
              <TbBrandTwitter />
            </a>
            <a
              href=""
              className="flex uppercase text-2xl text-black order-4 transition hover:bg-transparent hover:border-2 hover:border-black bg-white hover:text-white w-max p-4 items-center gap-4"
            >
              Contract
              <TbCurrencyEthereum />
            </a>
            <a
              href=""
              className="flex uppercase text-2xl text-white md:order-4  transition hover:bg-transparent hover:border-2 hover:border-black bg-transparent border-2 w-max p-4 items-center gap-4"
            >
              Chart
              <MdShowChart />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
