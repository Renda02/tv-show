import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
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

      // update the value of the state
      setShowList(data);
    }
    fetchData();
    // fetch data
    // set the events
  }, []);

  //searching Shows

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

  const handleSearch = () => {
    const filteredEvent = showList.filter((e) => {
      if (e.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
    setShowList(filteredEvent);
  };

  //pagination
  const lastShow = currentPage * showPerPage;
  const firstShow = lastShow - showPerPage;
  const currentshows = showList.slice(firstShow, lastShow);

  //change pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="homepage-container">
      <HeaderSearch>
        <div>
          <Input
            type="text"
            onChange={handleChange}
            ref={searchRef}
            placeholder="Search your favorite..."
          />
          {suggestionList.length > 0 && (
            <AutoComplete>
              {suggestionList.map((suggestion) => (
                <AutoCompleteResult
                  onClick={() => {
                    searchRef.current.value = suggestion.name;
                    setSearch(suggestion.name);
                    setSuggestionList([]);
                  }}
                >
                  {suggestion.name}
                </AutoCompleteResult>
              ))}
            </AutoComplete>
          )}
        </div>
        <Btn onClick={handleSearch}>Search</Btn>
      </HeaderSearch>{" "}
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

const HeaderSearch = styled.div`
  display: flex;
  padding: 18px;
  justify-content: center;
  align-items: space-between;
  position: relative;
  margin-bottom: 1.2em;
`;

const Input = styled.input`
  outline: none;
  background: #fff;
  padding: 8px;
  border: none;
  font-size: 1rem;
  color: #000;
  border-radius: 8px 0 0 8px;
  color: gray;
`;

const AutoComplete = styled.div`
  padding: 5px 0 5px 0px;
  left: 0px;
  width: 100%;
  background: #fff;
  margin: 2em 0;
  position: absolute;
`;

const AutoCompleteResult = styled.p`
  font-size: 1rem;
  color: #000;
  width: 100%;
  height: 18px;
  padding-left: 20px;
  &:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

const Btn = styled.button`
  border: 2px solid #73f340;
  padding: 4.5px 5px;
  font-size: 18px;
  background: #73f340;
  color: #fff;
  cursor: pointer;
  margin: 0 0 1rem 0;
  border-radius: 0 8px 8px 0;
  &:hover {
    color: #6c61f6;
    background: #fff;
  }
`;
