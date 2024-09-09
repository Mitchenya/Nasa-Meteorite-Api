import { useState } from "react";
import Header from "./header";
import MeteorList from "./meteorlist";
import "./App.css";

const App = () => {
  console.log("hello");
  return (
    <div className="app">
      <Header />
      <MeteorList />
    </div>
  );
};

export default App;
