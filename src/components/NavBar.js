import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      <Link to="/"><h1 className="navbar-heading"> TV show</h1></Link>
      <nav className="navbar-wrapper">
        <ul className="navbar-unorderlist">
          {" "}
          <li className="navbar-list">
            <a href="/" alt="home">
              {" "}
              <Link to="/">Home</Link>{" "}
            </a>{" "}
          </li>
          <Link to="/season">
            {" "}
            <li className="navbar-list">
              <a href="/" alt="home">
                {" "}
                Season List
              </a>
            </li>
          </Link>
          <li className="navbar-list btn">
            <a href="/" alt="home">
              {" "}
              Add
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
