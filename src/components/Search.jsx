import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Search.scss";

const Search = () => {
  const { handleCity } = useContext(AppContext);
  const [cityValue, setCityValue] = useState(null);
  const handleChange = (e) => {
    setCityValue(e.target.value);
  };

  return (
    <section className="Search">
      <input
        type="search"
        placeholder="Medellin"
        name="city"
        className="Search_input"
        onChange={handleChange}
      />
      <button
        type="button"
        className="Search_button"
        onClick={() => handleCity(cityValue)}
      >
        %
      </button>
      {console.log("render input")}
    </section>
  );
};

export default Search;
