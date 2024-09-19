import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Feature from "./Components/Feature";
import Cards from "./Components/Cards";
import Ready from "./Components/Ready";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen pt-[0.1vw] bg-[#F1F1F1]">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Ready />
      <Footer />
    </div>
  );
};

export default App;
