import React from "react";
import "./Quote.css";
import Navbar from "../Home/components/Navbar";
import QuoteContents from "./components/QuoteContents";

const Quote = () => {
  return (
    <div>
      <Navbar />
      <QuoteContents />
    </div>
  );
};

export default Quote;
