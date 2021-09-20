import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FavoriteShow() {
    const [favorite,setFavorite] = useState([]);

    useEffect(() => {
        async function fetchData() {
          // 1. get the data
          const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");
          // 2. prepare the data
          const data = await response.json();
    
          // update the value of the state
          setFavorite(data);
    
        }
        fetchData();
        // fetch data
        // set the events
      }, []);

      console.log(favorite);
    

    
    return (
        < FavoriteContainer>
{favorite.map((show, i) => {
        return (
          <Favoritecard key={i}>
            {" "}
            <Favoritelink to={"/shows/" + show.id}>
              <h4>
                <span>Name</span>:{show.name}
              </h4>
            </Favoritelink>
          </Favoritecard>
        );
      })}
            
        </FavoriteContainer>
    )
}

const FavoriteContainer = styled.div`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Favoritecard = styled.ul`
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

const Favoritelink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0.3em;
  
`;
