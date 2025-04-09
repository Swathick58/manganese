import { createRoot } from "react-dom/client";
import "./main.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Product from "./pages/product/Product";
import Developers from "./pages/developers/Developers";
import Pricing from "./pages/pricing/Pricing";
import Enterprise from "./pages/enterprise/Enterprise";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  </BrowserRouter>
);