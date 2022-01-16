import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNavWrapper = styled.div`
  height: 42px;
  width: 100%
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #111;
`

const StyledNav = styled.nav`
  height: 45px;
  display: flex;
  align-items: flex-end;
  a {
    text-decoration: none;
    padding-bottom: 6px;
    min-width: 65px;
    text-align: center;
    color: #ddd;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    font-size: 1.1em;
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    -webkit-transition: 0.3s;
    transition: 0.3s;
    margin: 0 0 0 2em;
    &:hover {
      border-bottom: 5px solid rgba(255, 255, 255, 0.5);
      color: #fff;
    }
    &:first-of-type {
      margin: 0 auto 0 0;
    }
    @media only screen and (max-width: 480px) {
      margin: 0 10px 0 auto;
      min-width: auto;
      &:nth-of-type(1) {
        margin: 0 auto 0 10px;
      }
      &:nth-of-type(2) {
        margin: 0 auto;
      }
    }
  }
  width: 75%;
  max-width: 1264px;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 85%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const NavBar = () => (
  <StyledNavWrapper>
    <StyledNav>
      <Link to="/"> Home </Link>
      <Link to="/gallery"> Gallery </Link>
      <Link to="/about"> About </Link>
    </StyledNav>
  </StyledNavWrapper>
)

export default NavBar
