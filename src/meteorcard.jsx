/* eslint-disable react/prop-types */
const MeteorCard = ({ meteor }) => {
  const { name, mass, year, geolocation } = meteor || {};
  const yearDiscovered = year ? year.substring(0, 4) : "Unknown";

  const latitude = geolocation?.latitude || "Unknown";
  const longitude = geolocation?.longitude || "Unknown";

  return (
    <li className="meteor-card">
      <h3>{name || "Unnamed Meteor"}</h3>
      <p>Mass: {mass || "Unknown"}</p>
      <p>Year Discovered: {yearDiscovered}</p>
      <p>
        Geo Location:{" "}
        {latitude === "Unknown" || longitude === "Unknown"
          ? "Unknown"
          : `${latitude}N ${longitude}E`}
      </p>
    </li>
  );
};

export default MeteorCard;
