import React from "react";
import Moon from "../assets/moon.png";

const Tokenomics = () => {
  return (
    <section className="w-full bg-re-500 py-fifty relative">
      <div className="container">
        <img
          src={Moon}
          alt=""
          className="w-[5rem] object-cover absolute top-[50%] left-0 animate-bounce"
        />
        <h1 className="text-6xl flex flex-wrap flex-col md:flex-row items-center gap-4 uppercase bg-black text-secondary w-max -rotate-3">
          tokenomics
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4 mt-10 font-mono md:w-max capitalize text-xl bg-yellow-500 border-2 p-4 rounded-2xl -rotate-3 font-medium">
            <p>token name: risitias</p>
            <p>Token Ticker: $RISITIS</p>
            <p>Total Supply: 1 000 000</p>
          </div>
          <ul className="flex flex-col gap-4 list-decimal list-inside mt-10 font-mono md:w-max capitalize text-xl bg-yellow-500 border-2 p-4 rounded-2xl border-black -rotate-3 font-medium">
            <li>Token Ticker: $RISITIS</li>
            <li>token name: risitias</li>
            <li>Total Supply: 1 000 000</li>
          </ul>
          <div className="flex flex-col gap-4 mt-10 font-mono md:w-max capitalize text-xl bg-yellow-500 border-2 p-4 rounded-2xl border-b-slate-200 -rotate-3 font-medium">
            <p>token name: risitias</p>
            <p>Token Ticker: $RISITIS</p>
            <p>Total Supply: 1 000 000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
