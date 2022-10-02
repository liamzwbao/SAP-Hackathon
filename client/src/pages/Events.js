import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search"
import { fetchAllEvents } from "../api/API";


export default function Events() {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { searchCriteria } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchAllEvents().then((data) => {
      setEvents(data);
      console.log("data: ", data);
    });
  }, [])

  return (
    <div id="Search-Page" className="d-flex flex-column justify-content-center align-items-center">

      <div>
        <h1>Search the SAP Green Events</h1>
        <Search></Search>
      </div>

      {events.map((item) => (
        // EventCard
        <div>item</div>
      ))}
      {events.length === 0 && <p>No result.</p>}
    </div>
  );
}