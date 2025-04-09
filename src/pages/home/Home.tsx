import React from "react";
import "./Home.css";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import Container from "../../components/container/Container";
import Bears from "./components/bears/Bears";

const Home = (): React.ReactNode => {
  return (
    <>
      <NavigationBar />
      <Container>
        <Bears />
      </Container>
    </>
  );
};

export default Home;