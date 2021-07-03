import React from "react";
// import Card from "../components/Card";
import Search from "../components/Search";
import Carrousel from "./Carrousel";
import "../styles/containers/Home.scss";

const Home = () => {
  return (
    <main className="Home">
      <h1>Weather</h1>
      {/* <Card /> */}
      <Search />
      <Carrousel />
      {console.log("render Home")}
    </main>
  );
};

export default Home;
