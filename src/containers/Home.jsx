import React from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import Carrousel from "./Carrousel";
import Footer from "../components/Footer";
import "../styles/containers/Home.scss";

const Home = () => {
  return (
    <main className="Home">
      <h1>Quarzizus Weather</h1>
      <Card />
      <Search />
      <Carrousel />
      <Footer />
    </main>
  );
};

export default Home;
