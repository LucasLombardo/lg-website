import React from 'react';
import styled from 'styled-components';

const StyledAbtPage = styled.div`
  width: 80%;
  margin: 0 auto;
  line-height: 1.8em;
  p {
    font-size: 1.1em;
    text-indent: 2em;
    text-align: left;
    padding: 1em;
  }
  .center-text {
    text-align: center;
    text-indent: 0;
    padding: 0 1em;
  }
  #caption {
    text-align: center;
    text-indent: 0;
    font-size: .9em;
    margin: 0 0 1em 0;
    padding: 0;
  }
  @media only screen and (max-width: 690px)  {
    width: 475px;
    width: 90%;
  }
`;

const StyledImg = styled.img`
  padding: 5px;
  margin-bottom: 0;
  border: solid 1px #CCC;
  -moz-box-shadow: 1px 1px 5px #999;
  -webkit-box-shadow: 1px 1px 5px #999;
  box-shadow: 1px 1px 5px #999;
  width: 300px;
`;

const StyledCard = styled.div`
  -moz-box-shadow: 1px 1px 5px #999;
  -webkit-box-shadow: 1px 1px 5px #999;
  box-shadow: 1px 1px 5px #999;
`;

const StyledVid = styled.iframe`
  width: 540px;
  height: 304px;
  border: 1px solid #000;
  -moz-box-shadow: 4px 4px 14px #999;
  -webkit-box-shadow: 4px 4px 14px #999;
  box-shadow: 4px 4px 14px #999;
  @media only screen and (max-width: 1024px)  {
    width: 400px;
    height: 225px;
  }
  @media only screen and (max-width: 690px)  {
    width: 240px;
    height: 135px;
  }
`;

const About = () => (
  <StyledAbtPage>
    <h1>About Us</h1>
    <hr />
    <p className="center-text">
      Lombardo Graphics is a local business that has been serving the
      Greater Boston area since 1989. It is owned and operated by
      Dave Lombardo.
    </p>
    <hr />
    <StyledImg src="https://imageshack.com/a/img924/3526/hRvfC1.jpg" alt="Dave Lombardo with his German Shepard" />
    <p id="caption">
      Dave Lombardo (top), Blitz (bottom)
    </p>
    <StyledCard>
      <p>
        Dave graduated from Lesley College of Art and Design in 19??.
        He is blessed with a loving wife, Jeanne Lombardo, who helps out with
        the graphic design and administration parts of the business. Outside of
        work, Dave enjoys working on his 1958 corvette, excercising, and
        walking his German Shepard, Blitz.
      </p>
    </StyledCard>
    <p className="center-text">
      You can check out this video of him working on a Hummer for the Boston Bruins below:
    </p>
    <StyledVid title="buzz video" src="https://www.youtube-nocookie.com/embed/lOYPD5r1Qhc?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
  </StyledAbtPage>
);

export default About;

// width="560"
// height="315"
