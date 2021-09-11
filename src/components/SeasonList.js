import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function SeasonList() {
  const { seasonId } = useParams;
  const [season, setSeason] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.tvmaze.com/shows/1/seasons`);

      const data = await response.json();
      console.log(data);
      setSeason(data);
    }

    fetchData();
  }, [seasonId]);

  return (
    <div>
      <h2>Season list</h2>
      {season.map((sn) => {
        return (
          <p key={sn.id}>
            {" "}
            <span>Season : </span>
            {sn.number}
          </p>
        );
      })}
    </div>
  );
}

export default SeasonList;
