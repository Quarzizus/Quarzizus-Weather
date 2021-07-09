import React, { useContext } from "react";
import CarrouselCard from "../components/CarrouselCard";
import Spinner from "../components/Spinner";
import AppContext from "../context/AppContext";
import useFetchData from "../hooks/useFetchData";
import "../styles/containers/Carrousel.scss";

const Carrousel = () => {
  const { city, setGrades } = useContext(AppContext);
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
    const days = [
      data.list[7],
      data.list[14],
      data.list[21],
      data.list[28],
      data.list[35],
    ];
    return (
      <section className="Carrousel">
        <header className="Carrousel_header">
          <button type="button" onClick={() => setGrades(false)}>
            °C
          </button>
          <button type="button" onClick={() => setGrades(true)}>
            °F
          </button>
        </header>
        <section className="Carrousel_container">
          {days.map((data, index) => (
            <CarrouselCard key={index} dataCard={data} />
          ))}
        </section>
      </section>
    );
  }
};

export default Carrousel;
