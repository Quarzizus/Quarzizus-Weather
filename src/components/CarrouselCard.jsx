import React from "react";
import { Icons } from "../context/IconList";
import "../styles/components/CarrouselCard.scss";

const CarrouselCard = ({ dataCard }) => {
  const week = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday",
  };
  const codeIcon = dataCard.weather[0].icon;
  const date = new Date(dataCard.dt_txt.slice(0, 10));
  const numberDay = date.getDay();
  const dataValues = {
    name: week[numberDay],
    url: Icons[codeIcon],
    temperature: Math.floor(dataCard.main.temp - 273.15),
    description: dataCard.weather[0].description,
    // Info
    pressure: dataCard.main.pressure,
    wind: dataCard.wind.speed,
    humidity: dataCard.main.humidity,
  };
  return (
    <article className="CarrouselCard">
      <header className="CarrouselCard_header">
        <h2>{dataValues.name}</h2>
      </header>
      <section className="CarrouselCard_main">
        <p className="CarrouselCard_temperature">{dataValues.temperature}°</p>
        <div className="CarrouselCard_description">
          <img className="Icon" src={dataValues.url} />
          <p>{dataValues.description}</p>
        </div>
      </section>
      <footer className="CarrouselCard_info">
        <section>
          <h3>Pressure</h3>
          <img src={Icons.pressure} />
          <p>{dataValues.pressure}Pa</p>
        </section>
        <section>
          <h3>Humidity</h3>
          <img src={Icons.humedity} />
          <p>{dataValues.humidity}%</p>
        </section>
        <section>
          <h3>Speed Wind</h3>
          <img src={Icons.wind} />
          <p>{dataValues.wind}m/s</p>
        </section>
      </footer>
    </article>
  );
};

export default CarrouselCard;
