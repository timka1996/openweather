import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Forecast from "./pages/Forecast/Forecast";
import Main from "./pages/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Settings from "./pages/Settings/Settings";

export const api_key = "7e47480acf58f651c7086be318fd04b4";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
