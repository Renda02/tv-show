import React from "react";

function NavBar() {
  return (
    <div className="navbar-container">
      <h1 className="navbar-heading"> TV show</h1>
      <nav className="navbar-wrapper">
        <ul className="navbar-unorderlist">
          <li className="navbar-list">
            <a href="/" alt="home">
            
              Home
            </a>
          </li>
          <li className="navbar-list">
            <a href="/" alt="home">
              {" "}
              Season List
            </a>
          </li>
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
