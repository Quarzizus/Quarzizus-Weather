import { useState, useEffect } from "react";

const useFetchData = (endpoint, city) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    try {
      const results = await fetch(
        `http://api.openweathermap.org/data/2.5/${endpoint}?q=${city}&appid=ec49bf5e457a95f6a8f75f64fd28a417`
      );
      const response = await results.json();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }, [city]);
  return [data, setData];
};

export default useFetchData;
