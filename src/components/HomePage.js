import React, { useState, useEffect } from "react";
import ShowList from "./ShowList";

function HomePage() {
  const [showList, setShowList] = useState([]);
  const [searchShow, setSearchShow] = useState("");
  const [history, setHistory] = useState([]);

//pagination
const [currentPage, setCurrentPage] = useState(1);
const [showPerPage, setShowPerPage] = useState (25);

  useEffect(() => {
    async function fetchData() {
      // 1. get the data
      const response = await fetch("https://api.tvmaze.com/shows");
      // 2. prepare the data
      const data = await response.json();
      console.log(data);
      // 3. update the value of the state
      setShowList(data);
    }
    fetchData();
    // fetch data
    // set the events
  }, []);

  //searching Characters
  function getShows(e) {
    
    fetch(`https://swapi.dev/api/people/?search=${searchShow}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
         
        setShowList(data);
        //setHistory([...history, { searchShow, data }]);
      });
  }

  //pagination
const lastShow = currentPage * showPerPage;
const firstShow = lastShow - showPerPage;
const currentshows = showList.slice(firstShow, lastShow)



  return (
    <div>
      <h1> Favorite Shows</h1>
      <div>
        <input
          type="text"
          required
          className="search-show-input"
          placeholder="Search your favorite"
          onChange={(event) => {
            setSearchShow(event.target.value);
          }}
        />
        <button className="search-show-btn" onClick={getShows}>search</button>
      </div>
     
      {history.map((item) => {
          return (
            <button
              onClick={() => {
                setShowList(item.data);
              }}
            >
              {item.searchCharacter}
            </button>
          );
        })}
      <ShowList showList={currentshows}/>
    </div>
  );
}

export default HomePage;
