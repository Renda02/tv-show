import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles.js";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import SeasonList from "./components/SeasonList";
import ShowPage from "./components/ShowPage";

function App() {
  return (
    <Fragment>
      <Router>
        <GlobalStyle />
        <NavBar />
        <Switch>
          {" "}
          <Route path={`/:seasonId/season`}>x
            <SeasonList />
          </Route>
          <Route path={`/shows/:showId`}>
            <ShowPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>{" "}
    </Fragment>
  );
}

export default App;
