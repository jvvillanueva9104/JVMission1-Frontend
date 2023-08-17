import React, { useState } from "react";
import axios from "axios"; // Don't forget to import axios
import "./CVContents.css";
import { Link } from "react-router-dom";

const CVContents = () => {
  const [carModel, setCarModel] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [carValue, setCarValue] = useState(null);
  const [error, setError] = useState(null);

  const [showModelYearInput, setShowModelYearInput] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const handleCarModelChange = (e) => {
    if (e.target.value.length < 4) {
      setCarModel(e.target.value);
      setShowModelYearInput(false);
      setShowSubmitButton(false); // Hide the submit button when car model changes
      setCarValue(null);
    }
    if (e.target.value.length >= 4) {
      setCarModel(e.target.value);
      setShowModelYearInput(true);
      // setShowSubmitButton(false);
    }
  };

  const handleModelYearChange = (e) => {
    setModelYear(e.target.value);
    if (e.target.value.length === 4) {
      setShowSubmitButton(true);
    } else {
      setShowSubmitButton(false);
    }
    // Show the submit button when model year changes
  };

  const handleCheckCarValue = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !carModel ||
      !modelYear ||
      carModel.length < 4 ||
      modelYear < 1886 ||
      modelYear.length > 4
    ) {
      setError("Please enter a valid car model and year.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/api/calculate", {
        model: carModel,
        year: modelYear, // Use carModel as claim_history input
      });

      console.log(response.data);

      setCarValue({ car_value: response.data.car_value });
      setError(null);
      // setCarModel("");
      // setModelYear("");
    } catch (err) {
      setError("An error occurred while calculating risk rating.");
      setCarValue(null);
    }
  };

  return (
    <div className="CVMain" data-aos="fade-right">
      <h1 className="CVHeader">Let's start with your car model and year.</h1>
      <form
        className="CVForm"
        action=""
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <label>Cars Model:</label>
        <input
          className="CVInput"
          type="text"
          placeholder="e.g Civic, Axela, Note etc."
          value={carModel}
          onChange={handleCarModelChange}
        />

        {showModelYearInput && (
          <>
            <label htmlFor="">Model Year:</label>
            <input
              className="CVInput"
              type="text"
              placeholder="e.g 2012"
              value={modelYear}
              onChange={handleModelYearChange}
            />
          </>
        )}
        <div className="CVBtnContainer">
          {showSubmitButton && (
            <button
              data-aos="zoom-in-up"
              className="CVBtn"
              onClick={handleCheckCarValue}
            >
              Check
            </button>
          )}

          {carValue !== null && (
            <Link
              data-aos="fade-right"
              className="CVBtn nextPage"
              to="/riskrating"
            >
              Next
            </Link>
          )}
        </div>

        {carValue !== null && (
          <p className="valueResult" data-aos="zoom-in-up">
            Car Value: ${carValue.car_value.car_value}
          </p>
        )}
        {error && <p className="CVError">Error: {error}</p>}
      </form>
    </div>
  );
};

export default CVContents;
