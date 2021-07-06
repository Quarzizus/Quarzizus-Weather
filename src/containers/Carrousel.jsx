import React, { useContext } from "react";
import CarrouselCard from "../components/CarrouselCard";
import Spinner from "../components/Spinner";
import AppContext from "../context/AppContext";
import useFetchData from "../hooks/useFetchData";
import "../styles/containers/Carrousel.scss";

const Carrousel = () => {
  const { city } = useContext(AppContext);
  const [data, setData] = useFetchData("forecast", city);
  // Loading
  if (!Object.keys(data).length) {
    return (
      <div className="Carrousel">
        <Spinner />
      </div>
    );
  }
  // Error
  else if (!data.list) {
    return (
      <div className="Carrousel">
        I don't know this city. To try again, please :p
      </div>
    );
  }
  // Success
  else {
    const nextDays = [data.list[5], data.list[13], data.list[21]];
    return (
      <section className="Carrousel">
        {nextDays.map((card, index) => (
          <CarrouselCard dataCard={card} key={index} />
        ))}
      </section>
    );
  }
};

export default Carrousel;
