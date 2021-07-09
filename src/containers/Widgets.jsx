import React, { useContext } from "react";
import Humidity from "../widgest/Humidity";
import Pressure from "../widgest/Pressure";
import Wind from "./Wind";
import Visibility from "../widgest/Visibility";
import Spinner from "../components/Spinner";
import useFetchData from "../hooks/useFetchData";
import AppContext from "../context/AppContext";
import "../styles/containers/Widgets.scss";

const Widgets = () => {
  const { city } = useContext(AppContext);
  const [data, setData] = useFetchData("weather", city);
  // Loading
  if (!Object.keys(data).length) {
    return (
      <div className="Widget">
        <Spinner />
      </div>
    );
  }
  // Error
  else if (!data.weather) {
    return (
      <div className="Widgets_error">
        <h2>I'm Sorry :c</h2>
        <p>To try again, please</p>
      </div>
    );
  }
  return (
    <section className="Widgets">
      <h3>Today's Hightlights</h3>
      <Wind wind={data.wind} />
      <Humidity humedity={data.main.humidity} />
      <Visibility visibility={parseFloat(data.visibility / 1000)} />
      <Pressure pressure={data.main.pressure} />
      <footer>Miguel Vásquez - Quarzizus</footer>
    </section>
  );
};

export default Widgets;
