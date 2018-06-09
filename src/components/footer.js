import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    text-align: center;
    font-size: .8em;
`;

const Footer = ({ siteTitle }) => (
  <StyledFooter>
        Copyright © {(new Date()).getFullYear()} { siteTitle }. All rights reserved.
  </StyledFooter>
);

export default Footer;

