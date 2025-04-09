import React from "react";

import "./Developers.css";
import { useNavigate } from "react-router";
import NavigationBar from "../../components/navigation-bar/NavigationBar";

const Developers = (): React.ReactNode => {
  const navigate = useNavigate();

  return (
    <>
     <NavigationBar />
    <div className="developers-root">
            <h1>Developers Route</h1>
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

export default Developers;