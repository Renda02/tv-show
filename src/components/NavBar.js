import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <NavBarWrapper>
      <NavLink to="/">
        <h1 className="navbar-heading"> TV show</h1>
      </NavLink>
    </NavBarWrapper>
  );
}

export default NavBar;

const NavBarWrapper = styled.nav`
  padding-left: 1em;
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  color: #fff;
  
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0.3em;
`;
