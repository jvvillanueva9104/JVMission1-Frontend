import React from "react";
import "../../pages/Home/Home.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Filler from "./components/Filler";
import Cards from "./components/Cards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Filler />
      <Cards />
    </div>
  );
};

export default Home;
