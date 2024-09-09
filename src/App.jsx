import { useState } from "react";
import Header from "./header";
import MeteorList from "./meteorlist";
import MeteorSearch from "./meteorsearch";
import "./App.css";

const App = () => {
  console.log("hello");
  return (
    <div className="app">
      <h1>Test</h1>
      <Header />
      <MeteorList />
      <MeteorSearch />
    </div>
  );
};

export default App;
