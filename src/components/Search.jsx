import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Search.scss";

const Search = ({ searchHandle }) => {
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
      <button className="Search_close" onClick={searchHandle}>
        X
      </button>
      <section className="Seach_container">
        <input
          type="search"
          placeholder="Search Location"
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
          Search
        </button>
      </section>
    </section>
  );
};

export default Search;
