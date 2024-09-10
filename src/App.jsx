import Header from "./header";
import MeteorList from "./meteorlist";
import "./App.css";
import MapComponent from "./mapComponent";

const App = () => {
  return (
    <div className="app">
      <Header />
      <section className="main">
        <MeteorList />
        <MapComponent />
      </section>
    </div>
  );
};

export default App;
