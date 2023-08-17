import React from "react";
import "./RiskRating.css";
import Navbar from "../Home/components/Navbar";
import RiskRatingContents from "./components/RiskRatingContents";

const RiskRating = () => {
  return (
    <div>
      <Navbar />
      <RiskRatingContents />
    </div>
  );
};

export default RiskRating;
