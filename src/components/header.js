import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Img from 'gatsby-image';
import NavBar from '../components/navbar';

const HeaderWrapper = styled.div`
  background: #eee;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '60vh' : '50px')};
`;
const HeaderContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 2;
`;

export default class Header extends Component {
  componentDidUpdate = (prevProps) => {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/') {
        // if swiching to home page, animate the hieght to 60vh
        this.wrapper.animate([
          // can set as many frames as you would like, we are just using 2 to animate the vh change
          { height: '50px' },
          { height: '60vh' },
        ], {
          // duration is time of animation, fill forwards means it will stay on last frame
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        });
      } else {
        // if swiching to another page, animate the hieght to 50px
        this.wrapper.animate([
          { height: '60vh' },
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
        {/* <Img
          style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
          sizes={data.background.sizes}
        /> */}
      </HeaderWrapper>
      /* eslint-enable */
    );
  }
}
