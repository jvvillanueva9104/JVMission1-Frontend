import React from "react";
import "./Hero.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="heroSection">
      <img className="heroImage" src="hero.jpg" alt="" />

      <h1
        className="heroText1"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        Your one stop shop
      </h1>
      <h1
        className="heroText2"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-delay="300"
      >
        for all your
      </h1>
      <h1
        className="heroText3"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-delay="600"
      >
        Automotive needs!
      </h1>
    </div>
  );
};

export default Hero;
