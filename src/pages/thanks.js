import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledThanksPg = styled.div`
    min-height: 60vh
    p {
        font-size: 1.2em;
    }
    img {
        max-height: 30vh;
    }
`;

const Thanks = () => (
  <StyledThanksPg>
    <h1>Thank You</h1>
    <img src="https://imageshack.com/a/img922/5192/2bN1za.jpg" alt="success kid" />
    <h3>Your message has successfully been submitted.</h3>
    <p><Link to="/">Back to Home Page</Link></p>
  </StyledThanksPg>
);

export default Thanks;
