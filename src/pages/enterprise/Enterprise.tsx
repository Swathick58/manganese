import React from "react";

import "./Enterprise.css";
import { useNavigate } from "react-router";
import NavigationBar from "../../components/navigation-bar/NavigationBar";

const Enterprise = (): React.ReactNode => {
  const navigate = useNavigate();

  return (
    <>
    <NavigationBar />
    <div className="enterprise-root">
    
      <h1>Enterprise Route</h1>
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

export default Enterprise;