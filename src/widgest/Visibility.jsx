import React from "react";
import "../styles/widgets/Visibility.scss";

const Visibility = ({ visibility }) => {
  return (
    <article className="Visibility">
      <h2>Visibility</h2>
      <p>
        {visibility}
        <span>miles</span>
      </p>
    </article>
  );
};

export default Visibility;
