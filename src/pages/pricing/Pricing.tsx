import React from "react";

import "./Pricing.css";
import { useNavigate } from "react-router";
import NavigationBar from "../../components/navigation-bar/NavigationBar";

const Pricing = (): React.ReactNode => {
  const navigate = useNavigate();

  return (
    <>
     <NavigationBar />
    <div className="pricing-root">
          <h1>Pricing Route</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to Home
      </button>
    </div>
    </>
  );
};

export default Pricing;