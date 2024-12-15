import React from "react";
import "./map.css";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const { paths, startLoc, endLoc } = props;
  // console.log("received paths as props in map.jsx", paths);

  const startCoordinates = startLoc ? startLoc.split(",").map(Number) : null;
  const endCoordinates = endLoc ? endLoc.split(",").map(Number) : null;

  // fetching icon from internet
  const DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  const defaultCenter = [12.9716, 77.5946];

  return (
    <>
      <h1 className="mapHeader">Here is your shortest path</h1>

      {/* map container */}
      <div className="leafletContainer flex-wrap">
        {/* {paths.map((item, index) => (
        <span key={index} className="mapItem">{item}, </span>
      ))} */}
        <MapContainer
          center={defaultCenter}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          className="mapContainer"
        >
          {/* loading the map */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* setting pointers on map */}
          {startCoordinates && <Marker position={startCoordinates} />}
          {endCoordinates && <Marker position={endCoordinates} />}

          {/* creating path between start and end locations */}
          {paths && paths.length > 1 && (
            <Polyline positions={paths} color="blue" />
          )}
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
