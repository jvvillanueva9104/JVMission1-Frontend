import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cardMain">
      <div className="cardContainers" data-aos="fade-right">
        <img className="cardImgs" src="sample.jpg" alt="" />
        <p className="overlay">Check Car Value</p>
        <p>Check the value of the car.</p>
        <a className="cardLinks" href="/carvalue">
          Go Now!
        </a>
      </div>
      <div className="cardContainers" data-aos="fade-down">
        <img className="cardImgs" src="sample.jpg" alt="" />
        <p className="overlay">Check Car Value</p>
        <p>Check the value of the car.</p>
        <a className="cardLinks" href="">
          Go Now!
        </a>
      </div>
      <div className="cardContainers" data-aos="fade-left">
        <img className="cardImgs" src="sample.jpg" alt="" />
        <p className="overlay">Check Car Value</p>
        <p>Check the value of the car.</p>
        <a className="cardLinks" href="">
          Go Now!
        </a>
      </div>
    </div>
  );
};

export default Cards;
