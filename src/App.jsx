import { useState } from "react";
import Header from "./header";
import MeteorList from "./meteorlist";
import "./App.css";
import * as React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MeteorList />
      <Map
        mapboxAccessToken="<pk.eyJ1IjoibWl0Y2hlbnlhIiwiYSI6ImNtMHY1M2dmcDBteHMyaXNnbjJieHl4OWQifQ.-Tok8lVeXFwoAcHoSm16Uw>"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default App;
