import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ShowList({ showList }) {
  return (
    <ShowContainer>
      {showList.map((show, i) => {
        return (
          <ShowCard key={i}>
            {" "}
            <ShowLink to={"/shows/" + show.id}>
              <h4>
                <span>Name</span>:{show.name}
              </h4>
            </ShowLink>
          </ShowCard>
        );
      })}
    </ShowContainer>
  );
}

const ShowContainer = styled.div`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ShowCard = styled.ul`
  background: #343434;
  color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  padding: 1.7rem 1.5rem;
  width: 250px;
  border-radius: 8px;
  box-shadow: 5px 5px 15px rgb(255 255 255 / 3%);
  cursor: pointer;
  transition: all 0.3s ease-out;
`;

const ShowLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0.3em;
  
`;
