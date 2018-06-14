import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    text-align: center;
    font-size: .8em;
    padding: 1.2em 0;
`;

const Footer = ({ title }) => (
  <StyledFooter>
    Copyright © {(new Date()).getFullYear()} Lombardo Graphics. All rights reserved.
  </StyledFooter>
);

export default Footer;

