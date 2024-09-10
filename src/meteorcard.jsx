/* eslint-disable react/prop-types */
const MeteorCard = ({ meteor: { name, mass, year, geolocation } }) => {
  const yearDiscovered = year.substring(0, 4);

  return (
    <li className="meteor-card">
      <h3>{name}</h3>
      <p>Mass: {mass}</p>
      <p>Year Discovered: {yearDiscovered}</p>
      <p>
        Geo Location: {geolocation.latitude}N {geolocation.longitude}E
      </p>
    </li>
  );
};

export default MeteorCard;
