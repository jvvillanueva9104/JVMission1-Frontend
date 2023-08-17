import React from "react";
import "../../pages/Home/Home.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Filler from "./components/Filler";
import Cards from "./components/Cards";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Cards />
      <Hero2 />
      <Footer />
    </div>
  );
};

export default Home;
