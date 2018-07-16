import React from 'react';
import ScrollToTop from 'react-scroll-up';
import styled from 'styled-components';

const StyledBtn = styled.img`
  width: 65px;
  height: 65px;
  padding: 5px;
`;

const ScrollUpBtn = () => (
  <ScrollToTop
    showUnder={160}
    style={{
    position: 'fixed',
    bottom: 50,
    right: 30,
    cursor: 'pointer',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s',
    zIndex: 99999,
  }}
  >
    <StyledBtn src="https://cdn.rawgit.com/LucasLombardo/svg-hosting/master/scrollup.svg" alt="scroll to top" />
  </ScrollToTop>
);

export default ScrollUpBtn;

