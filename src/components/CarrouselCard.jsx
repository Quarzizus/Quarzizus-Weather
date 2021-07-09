import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Icons } from "../context/IconList";
import "../styles/components/CarrouselCard.scss";

const CarrouselCard = ({ dataCard }) => {
  const { grades } = useContext(AppContext);
  const week = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday",
  };
  const codeIcon = dataCard.weather[0].icon.slice(0, 2);
  const date = new Date(dataCard.dt_txt);
  const numberDay = date.getDay();

  const card = {
    name: week[numberDay],
    url: Icons[codeIcon],
    description: dataCard.weather[0].main,
    c: Math.floor(dataCard.main.temp - 273.15),
    f: Math.floor(dataCard.main.temp),
  };
  return (
    <article className="CarrouselCard">
      <h4>{card.name}</h4>
      <img src={card.url} />
      <div className="CarrouselCard_temperature">
        <p>{!grades ? `${card.c}°C` : `${card.f}°F`}</p>
        <p>{card.description}</p>
      </div>
    </article>
  );
};

export default CarrouselCard;
