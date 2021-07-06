import React, { useContext } from "react";
import useFetchData from "../hooks/useFetchData";
import Spinner from "../components/Spinner";
import { Icons } from "../context/IconList";
import "../styles/components/Card.scss";
import AppContext from "../context/AppContext";

const Card = () => {
  const { city } = useContext(AppContext);
  const [data, setData] = useFetchData("weather", city);

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
      <div className="Card">
        <h2>I'm Sorry :c</h2>
      </div>
    );
  }
  // Success
  else {
    const codeIcon = data.weather[0].icon;
    const dataValues = {
      name: data.name,
      url: Icons[codeIcon],
      temperature: Math.floor(data.main.temp - 273.15),
      description: data.weather[0].description,
      // Info
      pressure: data.main.pressure,
      wind: data.wind.speed,
      humidity: data.main.humidity,
    };
    return (
      <article className="Card">
        <header className="Card_header">
          <h2>{dataValues.name || "Nothing"} </h2>
        </header>
        <section className="Card_main">
          <p className="Card_temperature">{dataValues.temperature || "0"}°</p>
          <div className="Card_description">
            <img className="Icon" src={dataValues.url || Icons["01d"]} />
            <p>{dataValues.description}</p>
          </div>
        </section>
        <footer className="Card_info">
          <section>
            <h3>Pressure</h3>
            <img src={Icons.pressure} />
            <p>{dataValues.pressure || 0}Pa</p>
          </section>
          <section>
            <h3>Humidity</h3>
            <img src={Icons.humedity} />
            <p>{dataValues.humidity || 0}%</p>
          </section>
          <section>
            <h3>Speed Wind</h3>
            <img src={Icons.wind} />
            <p>{dataValues.wind || 0}m/s</p>
          </section>
        </footer>
      </article>
    );
  }
};

export default Card;
