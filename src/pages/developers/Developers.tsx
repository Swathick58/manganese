import React from "react";

import "./Developers.css";
import { useNavigate } from "react-router";
import NavigationBar from "../../components/NavigationBar";

const Developers = (): React.ReactNode => {
  const navigate = useNavigate();

  return (
    <div className="developers-root">
      <NavigationBar />
      <h1>Developers Route</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to Home
      </button>
    </div>
  );
};

export default Developers;