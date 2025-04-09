import React from "react";

import "./Product.css";
import { useNavigate } from "react-router";
import NavigationBar from "../../components/NavigationBar";

const Product = (): React.ReactNode => {
  const navigate = useNavigate();

  return (
    <div className="product-root">
      <NavigationBar />
      <h1>Product Route</h1>
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

export default Product;