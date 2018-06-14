import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  padding: 5px;
  border: solid 1px #CCC;
  -moz-box-shadow: 1px 1px 5px #999;
  -webkit-box-shadow: 1px 1px 5px #999;
  box-shadow: 1px 1px 5px #999;
  width: 300px;
`;

const About = () => (
  <div>
    <h1>About Us</h1>
    <p>
      Lombardo Graphics is a local business that has been serving the
      Greater Boston area since 1989. It is owned and operated by
      Dave Lombardo.
    </p>
    <StyledImg src="https://imageshack.com/a/img924/3526/hRvfC1.jpg" alt="Dave Lombardo with his German Shepard" />
    <p>
      Dave graduated from Lesley College of Art and Design in 19??.
      He is blessed with a loving wife, Jeanne Lombardo, who helps out with
      the graphic design and administration parts of the business. Outside of
      work, Dave enjoys working on his 1958 corvette, excercising, and
      walking his German Shepard, Blitz.
    </p>
    <p>
      You can check out this video of him working on a Hummer for the Boston Bruins below:
    </p>
    <iframe width="560" title="buzz video" height="315" src="https://www.youtube-nocookie.com/embed/lOYPD5r1Qhc?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
  </div>
);

export default About;
