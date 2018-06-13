import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Img from 'gatsby-image';
import NavBar from '../components/navbar';

const HeaderWrapper = styled.div`
  background: #b2ced7;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '55vh' : '50px')};
  @media only screen and (max-width: 1280px)  {
    height: ${({ isHome }) => (isHome ? '45vh' : '50px')};
  }
  @media only screen and (max-width: 800px)  {
    height: ${({ isHome }) => (isHome ? '35vh' : '50px')};
  }
  @media only screen and (max-width: 600px)  {
    height: ${({ isHome }) => (isHome ? '200px' : '50px')};
  }
`;
const HeaderContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 2;
`;
const ResponsiveImg = styled(Img)`
  width: 1922px;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 1280px)  {
    height: 80%;
  }
  @media only screen and (max-width: 800px)  {
    height: 60%;
  }
  @media only screen and (max-width: 600px)  {
    height: 40%;
  }
`;

function calcHeaderHeight(n) {
  // determine correct header height for responsive layout
  if (n < 600) {
    return '200px';
  } else if (n < 800) {
    return '35vh';
  } else if (n < 1280) {
    return '45vh';
  }
  return '55vh';
}

export default class Header extends Component {
  componentDidUpdate = (prevProps) => {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      const vhwidth = (window.innerWidth) ? window.innerWidth : 1281;
      const tallheight = calcHeaderHeight(vhwidth);
      if (this.props.location.pathname === '/') {
        // if swiching to home page, animate the hieght to 500px
        this.wrapper.animate([
          // can set as many frames as you would like, we are just using 2 to animate the vh change
          { height: '50px' },
          { height: tallheight },
        ], {
          // duration is time of animation, fill forwards means it will stay on last frame
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        });
      } else if (prevProps.location.pathname === '/') {
        // if swiching to another page from the home page, animate the hieght to 50px
        console.log(prevProps.location.pathname);
        this.wrapper.animate([
          { height: tallheight },
          { height: '50px' },
        ], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        });
      }
    }
  }


  render() {
    const { data, location } = this.props;
    return (
      // ref sets this.wrapper to the DOM element of the wrapper, strange syntax
      /* eslint-disable */
      <HeaderWrapper ref={wrapper => this.wrapper = ReactDOM.findDOMNode(wrapper)} isHome={location.pathname === '/'}>
        <HeaderContainer>
          <NavBar />
        </HeaderContainer>
        <ResponsiveImg
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
          }}
          sizes={data.background.sizes}
        />
      </HeaderWrapper>
      /* eslint-enable */
    );
  }
}
