import "./App.css";
import CarValue from "./pages/CarValue/CarValue";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RiskRating from "./pages/RiskRating/RiskRating";
import Quote from "./pages/Quote/Quote";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carvalue" element={<CarValue />} />
        <Route path="/riskrating" element={<RiskRating />} />
        <Route path="/quotes" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
