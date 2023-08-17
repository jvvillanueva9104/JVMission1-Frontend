import React from "react";
import "./Hero2.css";

const Hero2 = () => {
  return (
    <div className="hero2Container">
      <div className="hero2TextContainer">
        <h1 data-aos="fade-right">Lorem</h1>
        <p data-aos="fade-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          quam commodi quaerat quod aliquam enim odit deserunt, asperiores
          debitis sapiente repellat sit eum necessitatibus expedita odio
          quisquam quasi inventore corrupti.
        </p>
      </div>
      <img data-aos="fade-left" className="hero2CarImg" src="car.png" alt="" />
    </div>
  );
};

export default Hero2;
