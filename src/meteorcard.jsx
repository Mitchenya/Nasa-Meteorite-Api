/* eslint-disable react/prop-types */
const MeteorCard = ({ meteor: { name, mass, year, geolocation } }) => {
  console.log(geolocation);
  const yearDiscovered = year ? year.substring(0, 4) : "Unknown";

  return (
    <li className="meteor-card">
      <h3>{name}</h3>
      <p>Mass: {mass}</p>
      <p>Year Discovered: {yearDiscovered}</p>
      <p>
        Geo Location:{" "}
        {geolocation.latitude && geolocation.longitude === "0.0"
          ? "Unknown"
          : `${geolocation.latitude}N ${geolocation.longitude}E`}
      </p>
    </li>
  );
};

export default MeteorCard;
