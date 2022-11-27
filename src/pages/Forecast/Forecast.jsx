import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_key } from "../../App";
import Card from "./Card";
import "./Forecast.css";

export default function Forecast() {
  const [data, setData] = useState([]);
  const [weather, setWeather] = useState([]);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${localStorage.getItem(
    "currentCity"
  )}&units=${localStorage.getItem("currentUnit")}&lang=${localStorage.getItem(
    "currentLanguage"
  )}&cnt=40&appid=${api_key}`;

  useEffect(() => {
    if (
      localStorage.getItem("currentUnit") &&
      localStorage.getItem("currentCity")
    ) {
      getData();
      getWeather();
    }
  }, []);

  async function getData() {
    const data = await axios.get(url).then((res) => res.data.list);
    const dailyData = data.filter((e, id) => id % 8 === 0);
    setData(dailyData);
  }

  async function getWeather() {
    const data = await axios.get(url).then((res) => res.data.list);
    const dailyData = data.filter((e, id) => id % 8 === 0);
    const weather = dailyData.map((e) => e.weather[0].description);

    setWeather(weather);
  }

  return (
    <div className="forecast">
      <h1 className="text-center mt-4">
        {localStorage.getItem("currentCity")}
      </h1>
      <div className="row">
        {data.map((e, id) => (
          <Card
            key={id}
            date={e.dt_txt}
            temp={e.main.temp.toFixed()}
            weather={weather[id]}
          />
        ))}
      </div>
    </div>
  );
}
