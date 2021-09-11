import React, { useState, useEffect, useRef } from "react";
import Pagination from "./Pagination";
import ShowList from "./ShowList";

function HomePage() {
  const [showList, setShowList] = useState([]);

  //searching
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  const [suggestionList, setSuggestionList] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(25);

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

  //searching Shows
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = searchRef.current.value;
    const filteredEvent = showList.filter((e) => {
      if (e.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      return false;
    });
    setShowList(filteredEvent);
  };

  const handleChange = () => {
    const searchTerm = searchRef.current.value;
    const matchingShows = showList.filter((e) => {
      if (e.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      return false;
    });
    if (searchTerm.length > 0) {
      setSuggestionList(matchingShows);
    } else {
      // clean up
      setSuggestionList([]);
    }

    setSearch(searchTerm);
  };

  //pagination
  const lastShow = currentPage * showPerPage;
  const firstShow = lastShow - showPerPage;
  const currentshows = showList.slice(firstShow, lastShow);

  //change pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="homepage-container">
     
      <div className="search-wrapper">
        <div>
          <input
            type="text"
            onChange={handleChange}
            ref={searchRef}
            placeholder="Search your favorite..."
          />
          {suggestionList.length > 0 && (
            <div>
              {suggestionList.map((suggestion) => (
                <p
                  onClick={() => {
                    console.log("text");

                    searchRef.current.value = suggestion.name;
                    setSearch(suggestion.name);
                    setSuggestionList([]);
                  }}
                >
                  {suggestion.name}
                </p>
              ))}
            </div>
          )}
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>

      <ShowList showList={currentshows} />
      <Pagination
        showPerPage={showPerPage}
        totalShows={showList.length}
        paginate={paginate}
      />
    </div>
  );
}

export default HomePage;
