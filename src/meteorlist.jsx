import { useState, useEffect } from "react";
import MeteorCard from "./meteorcard";

const MeteorList = () => {
  const [meteors, setMeteors] = useState([]);
  const [sortedMeteors, setSortedMeteors] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=7`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMeteors(data);
        setSortedMeteors(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const sortByName = (direction) => {
    setSortDirection(direction);
    const sorted = [...meteors].sort((a, b) => {
      if (direction === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSortedMeteors(sorted);
  };

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <div className="meteor-list">
      <label className="a-z" htmlFor="sort-direction">
        Sort by name:
      </label>
      <select
        id="sort-direction"
        onChange={(e) => sortByName(e.target.value)}
        value={sortDirection}
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <ul className="list-ul">
        {sortedMeteors.map((meteor) => {
          return <MeteorCard key={meteor.name} meteor={meteor} />;
        })}
      </ul>
    </div>
  );
};

export default MeteorList;
