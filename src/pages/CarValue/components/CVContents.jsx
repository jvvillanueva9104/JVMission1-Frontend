import React from "react";
import "./CVContents.css";

const CVContents = () => {
  return (
    <div className="CVMain">
      <div className="CVContainer">
        <form
          className="CVForm"
          action=""
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1>Check Car Value</h1>

          <label>Cars Model:</label>
          <input type="text" placeholder="e.g Civic, Axela, Note" />

          <label>Model Year:</label>
          <input type="text" placeholder="e.g 2012" />

          <button className="CVBtn">Check</button>
        </form>
      </div>
    </div>
  );
};

export default CVContents;
