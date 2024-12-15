import React, { useEffect, useState } from "react";
import axios from "axios";
import "./history.css"

const History = () => {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/calcAndSearch/getSearchHistory"
      );
      // console.log(response.data.data);
      setHistoryList(response.data.data);
      // console.log(historyList)
    };
    setInterval(() => {
      getHistory();
    }, 2000);
  }, []);

  // delete the search history
  const handleOnclick = async () => {
    const response = await axios.delete(
      "http://localhost:3000/api/v1/calcAndSearch/deleteSearchHistory"
    );
  };

  return (
    <>
      <h1>Search History</h1>
      <ul className="histList">
        {historyList.map((item, index) => (
          <li key={index} className="histItem">
            Source: {item.start_loc[0].toFixed(4)},{item.start_loc[1].toFixed(4)} ; Destination: {item.end_loc[0].toFixed(4)},{item.end_loc[1].toFixed(4)}
          </li>
        ))}
      </ul>
      <button type="submit" className="btn btn-secondary hist-clr-btn" onClick={handleOnclick}>
        Clear
      </button>
    </>
  );
};

export default History;
