import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


const StyledNavWrapper = styled.div`
  height: 42px;
  width: 100%
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #111;
`;

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
    color: #ddd;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    font-size: 1.1em;
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    min-width: 70px;
    text-align: center;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    &:hover {
      border-bottom: 5px solid rgba(255, 255, 255, 0.5);
      color: #fff;
    }
  }
`;

const NavBar = () => (
  <StyledNavWrapper>
    <StyledNav>
      <Link to="/"> Home </Link>
      <Link to="/Gallery"> Gallery </Link>
      <Link to="/About"> About </Link>
      <Link to="/Contact"> Contact </Link>
    </StyledNav>
  </StyledNavWrapper>
);

export default NavBar;
