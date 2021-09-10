import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ShowPage() {
const { showId } = useParams();
  const [show, setShow] = useState({});

  

  useEffect(() => {
    async function fetchData() {
      // 1. get the data
      const response = await fetch(`https://api.tvmaze.com/shows/${showId}/`);
      // 2. prepare the data
      const data = await response.json();
      console.log(data);
      // 3. update the value of the state
      setShow(data);
    }

    fetchData();
    // fetch data
    // set the events
  }, [showId]);

  return <div>
      <h2>{show.name}</h2>
  </div>;
}

export default ShowPage;
