import React from "react";
import "../styles/widgets/Pressure.scss";

const Pressure = ({ pressure }) => {
  return (
    <article className="Pressure">
      <h2>Air Pressure</h2>
      <p>
        998<span>mb</span>
      </p>
    </article>
  );
};

export default Pressure;
