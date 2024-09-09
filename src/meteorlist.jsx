import { useState } from "react";
import MeteorCard from "./meteorcard";

const MeteorList = () => {
  const [meteors, setMeteors] = useState([]);
  useEffect(() => {
    fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json=${searchTerm}`).then(
      (response) => {
        return response.json();
      }
    );
  });
  return (
    <li>
      <h3>Meteor List</h3>
    </li>
  );
};

export default MeteorList;
