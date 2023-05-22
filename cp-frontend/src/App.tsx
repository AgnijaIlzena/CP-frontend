import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountryList from "./components/CountryList";
import ContinentList from "./components/ContinentList";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/continents" element={<ContinentList />} />
        <Route path="/countries" element={<CountryList continentCode="EU" />} />
      </Routes>
    </div>
  );
}

export default App;
