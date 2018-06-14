import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledHomepage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCol1 = styled.div`
  width: 50%;
  h3 {
    text-align: left;
  }
  p {
    text-align: left;
  }
  @media only screen and (max-width: 475px)  {
    width: 100%;
  }
`;

const StyledCol2 = styled.div`
  width: 50%;
  padding-left: 10%;
  p {
    text-align: left;
  }
  @media only screen and (max-width: 475px)  {
    width: 100%;
    padding-left: inherit;
  }
`;

const IndexPage = ({ data }) => (
  <StyledHomepage>
    <StyledCol1>
      <h3>Welcome to LombardoGraphics.com!</h3>
      <p>
        We are a vehicle and sign graphics company located in North Andover, Ma. Our
        service offerings include automobile and truck lettering, pinstriping, airbrush work,
        full vehicle wraps, and custom motorcycle art.
      </p>
      <p>
        Having been in business for over 29 years, we deliver high quality work that can make your
        business stand out among competitors and leave a great first impression.
      </p>
    </StyledCol1>
    <StyledCol2>
      <p><strong>Phone: </strong>978-688-1230</p>
      <p><strong>Fax: </strong>978-688-0188</p>
      <p><strong>Email: </strong>lombardo_graphics@verizon.net</p>
    </StyledCol2>
  </StyledHomepage>
);

export default IndexPage;

/* eslint-disable */
export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }

`;
/* eslint-enable */
