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
      <div className="heroText">
        <h1 data-aos="fade-right" data-aos-duration="1000">
          Car insurance you'll love
        </h1>
        <h3 data-aos="fade-right" data-aos-duration="1500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h3>
        <a href="#cards" data-aos="fade-right" data-aos-duration="2000">
          <button className="heroBtn">Get Started Now!</button>
        </a>
      </div>
      <div className="rightContent">
        <h2>Three ways to save:</h2>
        <div className="threeDivs">
          <div className="heroDivs" data-aos="fade-up" data-aos-duration="1000">
            <h5>Lorem Ipsum</h5>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            </span>
            <button className="heroDivBtns">LOREM</button>
          </div>
          <div className="heroDivs" data-aos="fade-up" data-aos-duration="1000">
            <h5>Lorem Ipsum</h5>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            </span>
            <button className="heroDivBtns">LOREM</button>
          </div>
          <div className="heroDivs" data-aos="fade-up" data-aos-duration="1000">
            <h5>Lorem Ipsum</h5>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            </span>
            <button className="heroDivBtns">LOREM</button>
          </div>
        </div>
      </div>
      <div className="heroBtmDiv">
        <span>A+ Standard & Poor’s Rating*</span>
        <span>Regulated by the FMA</span>
      </div>
    </div>
  );
};

export default Hero;
