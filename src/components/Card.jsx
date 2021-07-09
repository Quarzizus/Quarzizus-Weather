import React, { useContext, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import useDateFormated from "../hooks/useDateFormated";
import AppContext from "../context/AppContext";
import Spinner from "../components/Spinner";
import Search from "./Search";
import Cloud from "../icons/Info/cloud.svg";
import { Icons } from "../context/IconList";
import "../styles/components/Card.scss";

const Card = () => {
  const { city, grades, setWidget, widget } = useContext(AppContext);
  const [data, setData] = useFetchData("weather", city);
  const { dayWeek, month, dayMonth } = useDateFormated();
  const searchHandle = () => {
    const search = document.querySelector(".Search");
    const input = document.querySelector(".Search_input");
    input.focus();
    search.classList.toggle("Active");
  };
  // Loading
  if (!Object.keys(data).length) {
    return (
      <div className="Card">
        <Spinner />
      </div>
    );
  }
  // Error
  else if (!data.weather) {
    return (
      <article className="Card">
        <Search searchHandle={searchHandle} />
        <header className="Card_header">
          <button type="button" className="Header_type-search">
            Search for places
          </button>
          <button
            type="button"
            className="Header_icon-search"
            onClick={searchHandle}
          >
            <i className="far fa-compass"></i>
          </button>
        </header>
      </article>
    );
  }
  // Success
  else {
    const codeIcon = data.weather[0].icon.slice(0, 2);
    const dataValues = {
      name: data.name,
      url: Icons[codeIcon],
      c: Math.floor(data.main.temp - 273.15),
      f: Math.floor(data.main.temp),
      description: data.weather[0].description,
    };
    return (
      <article className="Card">
        <Search searchHandle={searchHandle} />
        <header className="Card_header">
          <button type="button" className="Header_type-search">
            Search for places
          </button>
          <button
            type="button"
            className="Header_icon-search"
            onClick={searchHandle}
          >
            <i className="far fa-compass"></i>
          </button>
        </header>
        <picture>
          <img src={Cloud} className="Cloud-1" alt="" />
          <img src={Cloud} className="Cloud-2" alt="" />
          <img src={Cloud} className="Cloud-3" alt="" />
          <img src={Cloud} className="Cloud-4" alt="" />
          <img className="Icon" src={dataValues.url} />
        </picture>
        <section className="Card_main">
          {!grades ? (
            <p className="Card_temperature">
              <span>{dataValues.c}</span>°C
            </p>
          ) : (
            <p className="Card_temperature">
              <span>{dataValues.f}</span>°F
            </p>
          )}
          <p className="Card_description">{dataValues.description}</p>
        </section>
        <footer className="Card_info">
          <p>
            Today ~ {dayWeek}, {dayMonth} {month}
          </p>
          <h2>
            <i className="fas fa-map-marker-alt"></i>
            {dataValues.name}
          </h2>
        </footer>
      </article>
    );
  }
};

export default Card;
