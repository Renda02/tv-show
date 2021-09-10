import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import SeasonList from "./SeasonList";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <HomePage />
        <SeasonList />
      </div>
    </Router>
  );
}

export default App;
