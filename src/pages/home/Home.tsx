import React from "react";
import "./Home.css";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import  BearCounter from "./components/bears/Bears";
const Home = (): React.ReactNode => {
  return (
    <div className="home-root">
      <NavigationBar />
      <BearCounter />
    </div>
  );
};
export default Home;