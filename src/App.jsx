import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Tokenomics from "./Components/Tokenomics";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-secondary relative font-Baller overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
    </div>
  );
};

export default App;
