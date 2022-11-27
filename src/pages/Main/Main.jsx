import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_key } from "../../App";

export default function Main() {
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem(
    "currentCity"
  )}&units=${localStorage.getItem("currentUnit")}&appid=${api_key}`;

  useEffect(() => {
    if (
      localStorage.getItem("currentUnit") &&
      localStorage.getItem("currentCity")
    ) {
      axios.get(url).then((response) => {
        setData(response.data);
        localStorage.setItem("currentCity", response.data.name);
      });
    }
  }, []);

  return (
    <div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h1 className="text-info">Current weather</h1>
            <p>{localStorage.getItem("currentCity")}</p>
          </div>
          <div className="temp">
            {data.main ? (
              <h1>
                {data.main.temp.toFixed()}°
                {localStorage.getItem("currentUnit") === "metric" ? "C" : "F"}
              </h1>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
