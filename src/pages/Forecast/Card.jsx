import React from "react";

export default function Card({ date, temp, weather }) {
  return (
    <div className="col-2 card__item">
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header text-center">
          <p>Date: {date.split(" ")[0]}</p>
          <p>Time: {date.split(" ")[1]}</p>
        </div>

        <div className="card-body">
          <h5 className="card-title text-center text-light">
            {temp}°{" "}
            {localStorage.getItem("currentUnit") === "metric" ? "C" : "F"}
          </h5>
          <p className="card-text text-center text-warning">{weather}</p>
        </div>
      </div>
    </div>
  );
}
