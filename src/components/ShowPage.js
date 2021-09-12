import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import styled from "styled-components";

function ShowPage({ showList }) {
  const { showId } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    async function fetchData() {
      // 1. get the data
      const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
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

  return (
    <ShowPageWrapper>
      <Image
        src={
          show.image
            ? show.image.medium
            : ""
        }
        alt={show.name}
      />
      <div>
        <h1>{show.name}</h1>
        <div>
          {show.genres &&
            show.genres.filter((genre) => <Genre href="/">{genre}</Genre>)}
        </div>
        <p>
          <strong>Premiered:</strong> {show.premiered}
        </p>
        <p>
          <strong>Rating:</strong>{" "}
          {show.rating ? show.rating.average : "No rating"}
        </p>
      </div>
    </ShowPageWrapper>
  );
}

export default ShowPage;

const ShowPageWrapper = styled.div`
  max-width: 1200px;
  width: 80%;
  margin: 2em auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin-right: 2rem;
`;

const Genre = styled.a`
  background: #73f340;
  padding: 0.4em 1em;
`;

//const SeasonLink = styled(Link)`
  //text-decoration: none;
  //olor: #fff;
  //padding: 0.3em;
//`;
