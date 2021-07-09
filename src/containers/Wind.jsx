import React from "react";
import "../styles/widgets/Wind.scss";

const Wind = ({ wind }) => {
  return (
    <article className="Wind">
      <h2>Wind Status</h2>
      <p>
        {wind.speed}
        <span>mph</span>
      </p>
      <div className="Wind_container">
        <picture>
          <i className="fas fa-wind"></i>
        </picture>
        <p>{wind.deg}°</p>
      </div>
    </article>
  );
};

export default Wind;
