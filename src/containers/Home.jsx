import React from "react";
import Card from "../components/Card";
import Carrousel from "./Carrousel";
import Widgets from "./Widgets";
import "../styles/containers/Home.scss";

const Home = () => {
  return (
    <main className="Home">
      <Card />
      <Carrousel />
      <Widgets />
    </main>
  );
};

export default Home;
