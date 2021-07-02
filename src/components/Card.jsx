import React from "react";
import useFetchData from "../hooks/useFetchData";
import { Icons } from "../context/IconList";
import "../styles/components/Card.scss";

const Card = () => {
  const [data, setData] = useFetchData("weather", "medellin");

  if (!Object.keys(data).length) {
    return <h1>Cargando...</h1>;
  } else {
    const codeIcon = data.weather[0].icon;
    const url = Icons[codeIcon];
    const temperature = Math.floor(data.main.temp - 273.15);
    const description = data.weather[0].description;
    // Info
    const pressure = data.main.pressure;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    return (
      <article className="Card">
        {console.log(data)}
        <header className="Card_header">
          <h2>{data.name}</h2>
        </header>
        <section className="Card_main">
          <p className="Card_temperature">{temperature}°</p>
          <div className="Card_description">
            <img className="Icon" src={url} />
            <p>{description}</p>
          </div>
        </section>
        <footer className="Card_info">
          <section>
            <h3>Pressure</h3>
            <img src={Icons.pressure} />
            <p>{pressure}Pa</p>
          </section>
          <section>
            <h3>Humidity</h3>
            <img src={Icons.humedity} />
            <p>{humidity}%</p>
          </section>
          <section>
            <h3>Speed Wind</h3>
            <img src={Icons.wind} />
            <p>{wind}m/s</p>
          </section>
        </footer>
      </article>
    );
  }
};

export default Card;
