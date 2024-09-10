import React, { useRef, useEffect, useState } from "react";
import Header from "./header";
import MeteorList from "./meteorlist";
import "./App.css";
import MapComponent from "./mapComponent";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MeteorList />
      <MapComponent />
    </div>
  );
};

export default App;
