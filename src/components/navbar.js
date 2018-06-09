import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 60%;
  min-width: 320px;
  a {
    text-decoration: none;
    padding-bottom: 6px;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    font-size: 1.1em;
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    min-width: 70px;
    text-align: center;
    -webkit-transition: 0.5s;
    transition: 0.3s;
    &:hover {
      border-bottom: 5px solid rgba(0, 0, 0, 0.5);
      color: #000;
    }
  }
`;

const NavBar = () => (
  <StyledNav>
    <Link to="/"> Home </Link>
    <Link to="/Gallery"> Gallery </Link>
    <Link to="/About"> About </Link>
    <Link to="/Contact"> Contact </Link>
  </StyledNav>
);

export default NavBar;
