import { useState } from "react";
import Header from "./header";
import Meteorlist from "./meteorlist";
import Meteorsearch from "./meteorsearch";
import "./App.css";

const App = () => {
  console.log("hello");
  return (
    <div className="app">
      <h1>Test</h1>
      <Header />
      <Meteorlist />
      <Meteorsearch />
    </div>
  );
};

export default App;
