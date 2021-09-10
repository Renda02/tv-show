import React, { useState, useEffect } from "react";

function HomePage() {
  const [showList, setShowList] = useState([]);
  const [searchShow, setSearchShow] = useState("");
  const [history, setHistory] = useState([]);

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
        setHistory([...history, { searchShow, data }]);
      });
  }



  return (
    <div>
      <h1> Favorite Shows</h1>
      <form>
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
      </form>
      <div>
          {showList.map((shows, id)=>{
              return <p key={id}>{shows.name}</p>
          })}
      </div>
    </div>
  );
}

export default HomePage;
