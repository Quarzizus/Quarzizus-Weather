import React, { useState } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [city, setCity] = useState("medellin");

  const handleCity = (city) => {
    !city ? null : setCity(city.toLowerCase());
  };
  return (
    <AppContext.Provider value={{ city, handleCity }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
