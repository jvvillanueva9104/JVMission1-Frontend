import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "./QuoteContents.css";
import AOS from "aos";
import "aos/dist/aos.css";

const QuoteContents = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [carValue, setCarValue] = useState("");
  const [riskRating, setRiskRating] = useState("");
  const [monthlyPremium, setMonthlyPremium] = useState(null);
  const [yearlyPremium, setYearlyPremium] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const numericCarValue = carValue.replace(/[$,]/g, ""); // Remove non-numeric characters

    if (!numericCarValue) {
      setError("Please enter a valid car value.");
      return;
    }

    if (isNaN(numericCarValue)) {
      setError("Please enter a numeric car value.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/calculatePremiumQuote",
        {
          car_value: numericCarValue,
          risk_rating: parseInt(riskRating),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response data:", response);

      const data = response.data;

      if (response.status === 200) {
        setMonthlyPremium(data.monthlyPrem);
        setYearlyPremium(data.yearlyPrem);
        setError(null);
      } else {
        setError(data.error);
        setMonthlyPremium(null);
        setYearlyPremium(null);
      }
    } catch (error) {
      setError("An error occurred while processing your request.");
      setMonthlyPremium(null);
      setYearlyPremium(null);
    }
  };

  return (
    <div className="quoteMainContainer" data-aos="fade-down">
      {/* <h1>Lastly, enter your car value and risk rating.</h1> */}
      {!monthlyPremium && !yearlyPremium ? (
        <>
          <h1 className="quoteTopHeader" data-aos="fade-left">
            Lastly, enter your car value and risk rating.
          </h1>
          <form className="quoteForm" onSubmit={handleSubmit}>
            <input
              data-aos="fade-right"
              type="text"
              placeholder="Enter your car value..."
              value={carValue}
              onChange={(e) => setCarValue(e.target.value)}
            />
            <input
              data-aos="fade-left"
              type="text"
              placeholder="Enter your risk rating..."
              value={riskRating}
              onChange={(e) => setRiskRating(e.target.value)}
            />
            <button data-aos="zoom-in-up" className="quoteBtn" type="submit">
              Get Quote
            </button>
          </form>
        </>
      ) : (
        <>
          <div data-aos="fade-left">
            <h1 className="quoteTopHeader" data-aos="fade-left">
              Here are your quotes!
            </h1>
          </div>
          <div data-aos="fade-down" className="premiumResults">
            <div data-aos="flip-up" className="premiumCard">
              <h2 className="quoteHeader">Monthly Premium</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p className="quotePrice">${monthlyPremium}</p>
            </div>
            <div data-aos="flip-down" className="premiumCard">
              <h2 className="quoteHeader">Yearly Premium</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p className="quotePrice">${yearlyPremium}</p>
            </div>
          </div>
          <button data-aos="fade-up" className="quoteBtn">
            Ready? Contact us!
          </button>
        </>
      )}
      {error && <p className="errorText">{error}</p>}
    </div>
  );
};

export default QuoteContents;
