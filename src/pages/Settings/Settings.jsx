import axios from "axios";
import React, { useState } from "react";
import { api_key } from "../../App";
import "./Settings.css";

export default function Settings() {
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        localStorage.setItem("currentCity", response.data.name);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const confirmData = () => {
    axios.get(url).then((response) => {
      localStorage.setItem("currentCity", response.data.name);
    });
    setLocation("");
  };

  const selectUnit = (event) => {
    localStorage.setItem("currentUnit", event.target.value);
  };

  const selectLanguage = (event) => {
    localStorage.setItem("currentLanguage", event.target.value);
  };

  return (
    <div>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
        {/*  <select>
          <option value="metric">Metric</option>
          <option value="imperial">Farenheit</option>
        </select> */}
        <select onChange={selectUnit}>
          <option defaultValue>Choose unit</option>
          <option value="metric">Celsius</option>
          <option value="imperial">Farenheit</option>
        </select>
        <select onChange={selectLanguage}>
          <option defaultValue>Choose Language</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
        <div className="confirm">
          <button onClick={confirmData} className="mt-4 btn btn-secondary">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
