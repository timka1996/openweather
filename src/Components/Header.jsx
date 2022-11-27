import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div>
        <NavLink to={"./"}>Main</NavLink>
      </div>
      <div>
        <NavLink to={"./forecast"}>Forecast</NavLink>
      </div>
      <div>
        <NavLink to={"./settings"}>Settings</NavLink>
      </div>
    </header>
  );
}
