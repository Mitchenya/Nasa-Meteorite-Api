/* eslint-disable react/prop-types */
const MeteorCard = ({ meteor: { name, mass, year, geolocation } }) => {
  return (
    <li className="meteorCard">
      <h3>{name}</h3>
      <p>Mass: {mass}</p>
      <p>Year Discovered: {year}</p>
      <p>
        Geo Location: {geolocation.latitude}N {geolocation.longitude}E
      </p>
    </li>
  );
};

export default MeteorCard;
