import React, { useState } from "react";
import "./home.css";
import Map from "../components/Map.jsx";
import History from "../components/History.jsx";
import axios from "axios";

const Home = () => {
  const [startLoc, setStartLoc] = useState("");
  const [endLoc, setEndLoc] = useState("");
  const [path, setPath] = useState(["Search a route"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sLoc = startLoc.split(",").map(Number);
    const eLoc = endLoc.split(",").map(Number);

    // sends start and end location coordinates and receives shortest path coordinates as output
    const response = await axios.post(
      "http://localhost:3000/api/v1/calcAndSearch/calculatePath",
      { start_loc: sLoc, end_loc: eLoc }
    );
    // console.log(response.data.data.path);
    setPath(response.data.data.path);

    // updates the database with newly searched location
    const searchHistoryResponse = await axios.post(
      "http://localhost:3000/api/v1/calcAndSearch/saveSearchHistory",
      {
        start_loc: sLoc,
        end_loc: eLoc,
      }
    );
  };

  return (
    <>
      <div className="super">
        <h1>Google Map Clone</h1>

        {/* container having search section */}
        <div className="searchSection">
          <form className="input-group flex-nowrap" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Source Location"
              aria-label="longitude"
              aria-describedby="addon-wrapping"
              value={startLoc}
              onChange={(e) => setStartLoc(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Destination Location"
              aria-label="latitude"
              aria-describedby="addon-wrapping"
              value={endLoc}
              onChange={(e) => setEndLoc(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </form>
        </div>

        <span>
          <p>*note: enter coordinates in (latitude, longitude) formate</p>
        </span>

        {/* container having maps and search history section */}
        <div className="mapAndHistSection">
          <div className="mapSection">
            <Map paths={path} startLoc={startLoc} endLoc={endLoc} />
          </div>
          <div className="histSection">
            <History />
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
