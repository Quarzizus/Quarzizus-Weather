import React, { useState } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [city, setCity] = useState("medellin");
  const [grades, setGrades] = useState(false);

  const handleCity = (city) => {
    !city ? null : setCity(city.toLowerCase());
  };

  return (
    <AppContext.Provider value={{ city, handleCity, grades, setGrades }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
