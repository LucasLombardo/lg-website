import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    text-align: center;
    font-size: .8em;
    padding: 1em 0;
    margin-top: 1.6em;
    background-color: rgba(178, 206, 215, .3);
`;

const Footer = ({ title }) => (
  <StyledFooter>
    Copyright © {(new Date()).getFullYear()} Lombardo Graphics. All rights reserved.
  </StyledFooter>
);

export default Footer;

