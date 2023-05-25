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
            Get ready for the wildest crypto ride ever with RISITIAS! We've
            mixed laughter and profits in one glorious project inspired by the
            meme king himself. Say farewell to boring tokens and welcome a
            world where comedy and crypto collide!
          </p>
          <p className="font-iBM text-center max-w-xl text-xl">
            At RISITIAS, we're all about joyous investing. Each transaction
            isn't just about money; it's a golden opportunity to release a meme
            that'll leave you in stitches. Our memeologists have handpicked the
            funniest memes, guaranteeing non-stop laughter throughout your
            crypto journey. Join us, and let the giggles begin!
          </p>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default About;
