import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useRef, useEffect, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWl0Y2hlbnlhIiwiYSI6ImNtMHY1MDQ5eTE1NXUycXI2OGhqN2w4eTEifQ.wv1jXe9GC7tWCIEd4QEEdQ";

const MapComponent = () => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const [lat, setLat] = useState("53.47203");
  const [lng, setLng] = useState("-2.23831");
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    mapInstance.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [parseFloat(lng), parseFloat(lat)],
      zoom: zoom,
    });

    return () => mapInstance.current.remove();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const parsedLat = parseFloat(lat);
    const parsedLng = parseFloat(lng);

    if (!isNaN(parsedLat) && !isNaN(parsedLng) && mapInstance.current) {
      mapInstance.current.flyTo({
        center: [parsedLng, parsedLat],
        essential: true,
        zoom: zoom,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <label>
          Latitude:
          <input
            type="text"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </label>
        <label>
          Longitude:
          <input
            type="text"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
        </label>
        <button type="submit">Go to Location</button>
      </form>
      <div
        ref={mapContainer}
        style={{ width: "600px", height: "400px", margin: "0 auto" }}
      />
    </div>
  );
};

export default MapComponent;
