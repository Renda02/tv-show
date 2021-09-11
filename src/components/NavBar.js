import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <div className="navbar-container">
      <NavLink to="/"><h1 className="navbar-heading"> TV show</h1></NavLink>
     
          
    </div>
  );
}

export default NavBar;


const NavLink = styled(Link)`
  text-decoration: none;
  color:#fff;
  padding:0.3em;
 
`;
