import React, { useState, useEffect } from "react";
import "./RiskRatingContents.css";
import axios from "axios";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const RiskRatingContents = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [riskInput, setRiskInput] = useState("");
  const [riskRating, setRiskRating] = useState(null); // To store the calculated risk rating
  const [calculatedRisk, setCalculatedRisk] = useState(null); // To store the calculated risk
  const [calculateClicked, setCalculateClicked] = useState(false);

  const handleRiskInputChange = (e) => {
    const inputValue = e.target.value;
    setRiskInput(inputValue);
    // Clear the risk rating when the input text is cleared
    if (inputValue.trim() === "") {
      setCalculatedRisk(null);
      setRiskRating(null);
    }
  };

  const handleCalculateRisk = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/calculateRiskRating",
        {
          claim_history: riskInput,
        }
      );

      const data = response.data;
      if ("risk_rating" in data) {
        if (data.risk_rating === 0) {
          setCalculatedRisk(1); // Display risk rating as 1 when calculated risk is 0
        } else {
          setCalculatedRisk(data.risk_rating);
        }
        setRiskRating(data.risk_rating);
      } else if ("no_risk_rating" in data) {
        // Handle case where no risk rating was calculated
        setCalculatedRisk(null);
        setRiskRating(null);
        console.log("No risk rating calculated.");
      } else if ("error" in data) {
        console.error("Error:", data.error);
      }
      setCalculateClicked(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleTextareaKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default Enter key behavior
      if (riskInput.trim() !== "") {
        handleCalculateRisk();
      }
    }
  };

  const isNextButtonDisabled = !calculateClicked;

  return (
    <div className="riskMainContainer" data-aos="fade-left">
      <h1 className="riskHeader">
        Now, let's us know about your latest claim.
      </h1>
      <form className="riskForm">
        <textarea
          data-aos="fade-up"
          className="riskInput"
          name="text"
          rows="6"
          cols="16"
          wrap="soft"
          placeholder="describe in detail what happened"
          onChange={handleRiskInputChange}
          onKeyDown={handleTextareaKeyDown}
        />
      </form>
      {/* {calculatedRisk !== null && (
        <div className="riskResult">Calculated Risk: {calculatedRisk}</div>
      )} */}
      {riskInput !== "" && (
        <div className="riskBtnContainer">
          <button
            data-aos="zoom-in-up"
            className="riskNext"
            onClick={handleCalculateRisk}
          >
            Calculate Risk
          </button>
          {calculateClicked && ( // Render the Link component only if calculateClicked is true
            <Link data-aos="fade-right" to="/quotes" className="riskNext">
              Next
            </Link>
          )}
        </div>
      )}
      {riskRating !== null && (
        <div data-aos="flip-up" className="riskResult">
          Risk Rating: {riskRating}
        </div>
      )}
    </div>
  );
};

export default RiskRatingContents;
