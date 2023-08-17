import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="cardMain" id="cards">
      <div className="cardHeader">
        <h1 className="cardHeaderText" data-aos="flip-up">
          Our Services!
        </h1>
      </div>
      <div className="mainCardContainer">
        <div className="cardContainers" data-aos="fade-right">
          <img className="cardImgs" src="sample.jpg" alt="" />
        </div>

        <div className="cardContainerText" data-aos="fade-left">
          <h1 className="cardOneHeader">Step 1:</h1>
          <p className="cardOneText">Check the value of your car.</p>
          <Link className="cardOneBtn" to="/carvalue">
            Go now!
          </Link>
        </div>
      </div>
      <div className="mainCardContainer">
        <div className="cardContainerText" data-aos="fade-left">
          <h1 className="cardOneHeader">Step 2:</h1>
          <p className="cardOneText">Tell us your claim history.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>

        <div className="cardContainers" data-aos="fade-right">
          <img className="cardImgs" src="risk.jpg" alt="" />
        </div>
      </div>
      <div className="mainCardContainer">
        <div className="cardContainers" data-aos="fade-right">
          <img className="cardImgs" src="quote.jpg" alt="" />
        </div>

        <div className="cardContainerText" data-aos="fade-left">
          <h1 className="cardOneHeader">Step 3:</h1>
          <p className="cardOneText">Choose your quote!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
