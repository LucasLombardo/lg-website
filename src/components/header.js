import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import NavBar from '../components/navbar'

const LogoWrapper = styled.div`
  width: 100%;
  background-image: url('https://imagizer.imageshack.us/a/img921/3903/BaMl4X.jpg');
  background-repeat: repeat-x;
  background-position: center;
  background-color: #666;
  background-size: auto 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ isHome }) => (isHome ? '300px' : '0px')};
  @media only screen and (max-width: 1024px) {
    height: 225px;
    img {
      max-width: 518px;
    }
  }
  @media only screen and (max-width: 768px) {
    height: 150px;
    img {
      max-width: 345px;
    }
  }
`

const ImgWrapper = styled.div`
  width: 690px;
  height: 300px;
  @media only screen and (max-width: 1024px) {
    height: 225px;
    width: 518px;
  }
  @media only screen and (max-width: 768px) {
    height: 150px;
    width: 345px;
  }
  @media only screen and (max-width: 360px) {
    height: 80px;
    width: 184px;
  }
`

function calcHeaderHeight(n) {
  // determine correct header height for responsive layout
  if (n < 768) {
    return '150px'
  } else if (n < 1024) {
    return '225px'
  }
  return '300px'
}

const Header = ({ location }) => {
  const isHome = location.pathname === '/'
  const wrapper = useRef(null)
  const firstUpdate = useRef(true)

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    const vhwidth = window.innerWidth ? window.innerWidth : 2000
    const tallheight = calcHeaderHeight(vhwidth)
    const shortheight = '0px'
    if (isHome) {
      // if swiching to home page, animate the hieght to 500px
      wrapper.current.animate(
        [
          // can set as many frames as you would like, we are just using 2 to animate the vh change
          { height: shortheight },
          { height: tallheight },
        ],
        {
          // duration is time of animation, fill forwards means it will stay on last frame
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        }
      )
    } else {
      // if swiching to another page from the home page, animate the hieght to 50px
      wrapper.current.animate(
        [{ height: tallheight }, { height: shortheight }],
        {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        }
      )
    }
  }, [isHome])

  return (
    <div>
      <LogoWrapper ref={wrapper} isHome={isHome}>
        {isHome && (
          <ImgWrapper>
            <div>
              <StaticImage
                placeholder="none"
                src="../images/md_logo.png"
                alt="Lombardo Graphics"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  opacity: 0.85,
                }}
              />
            </div>
          </ImgWrapper>
        )}
      </LogoWrapper>
      <NavBar />
    </div>
  )
}

export default Header
