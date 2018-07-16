import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  text-align: center;
  font-size: .6em;
  margin-top: auto;
  color: #ddd;
  padding: 0.5em 0;
  background-color: #111;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const Footer = ({ title }) => (
  <StyledFooter>
    Copyright © {(new Date()).getFullYear()} Lombardo Graphics. All rights reserved.
  </StyledFooter>
);

export default Footer;

