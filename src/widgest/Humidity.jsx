import "../styles/widgets/Humidity.scss";
import React from "react";
const Humidity = ({ humedity }) => {
  return (
    <article className="Humidity">
      <h2>Humedity</h2>
      <p className="Humidity_porcentaje">
        <span>{humedity}</span>%
      </p>
      <section className="Humidity_container">
        <div className="Humidity_medidas">
          <p>0</p>
          <p>50</p>
          <p>100</p>
        </div>
        <div className="Humididy_bar">
          <div style={{ width: `${humedity}%` }}></div>
        </div>
        <p>%</p>
      </section>
    </article>
  );
};

export default Humidity;
