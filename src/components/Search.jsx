import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import lupaIcon from "../icons/Info/lupa.svg";
import "../styles/components/Search.scss";

const Search = () => {
  const { handleCity } = useContext(AppContext);
  const [cityValue, setCityValue] = useState(null);
  const handleChange = (e) => {
    setCityValue(e.target.value);
  };
  const handleEnter = (e) => {
    e.key === "Enter" ? handleCity(cityValue) : null;
  };
  return (
    <section className="Search">
      <input
        type="search"
        placeholder="Medellin"
        name="city"
        className="Search_input"
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
      <button
        type="button"
        className="Search_button"
        onClick={() => handleCity(cityValue)}
      >
        <img src={lupaIcon} alt="search" />
      </button>
    </section>
  );
};

export default Search;
