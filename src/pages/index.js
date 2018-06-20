import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import MapWithAMarker from '../components/map';
// import facebookBtn from '/static/assets/find-us-on-faceboook.svg';

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
  @media only screen and (max-width: 768px)  {
    width: 100%;
  }
`;

const StyledCol2 = styled.div`
  width: 50%;
  padding-left: 10%;
  p {
    text-align: left;
    margin: .5rem 0;
  }
  @media only screen and (max-width: 768px)  {
    width: 100%;
    padding-left: inherit;
  }
`;

const StyledFbBtn = styled.img`
  width: 90%;
  max-width: 500px;
  padding: 1em;
  margin-top: 1em;
  border: 2px solid #3b5998;
  border-radius: 1em;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  &:hover {
    background-color: #c4cde0;
  }
`;

const IndexPage = () => (
  <StyledHomepage>
    <StyledCol1>
      <h3>Welcome to LombardoGraphics.com!</h3>
      <p>
        We are a vehicle graphics company located in North Andover, Ma. Our
        service offerings include automobile and truck lettering, hand painted pinstriping,
        airbrush work, full vehicle wraps, and custom motorcycle art.
      </p>
      <p>
        Having been in business for over 29 years, we deliver high quality work that can make your
        business stand out among competitors and leave a great first impression.
      </p>
      <p>
        But don&#39;t take our word for it, check out our gallery of work <Link to="gallery">HERE</Link>!
      </p>
      <a href="https://www.facebook.com/LombardoGraphicscom-450098998346458/">
        <StyledFbBtn src="http://lucaslombardo.com/hosting/find-us-on-facebook.svg" alt="Find us on Facebook" />
      </a>
    </StyledCol1>
    <StyledCol2>
      <p><strong>Phone: </strong>978-688-1230</p>
      <p><strong>Fax: </strong>978-688-0188</p>
      <p><strong>Email: </strong><a href="mailto:lombardo_graphics@verizon.net">lombardo_graphics@verizon.net</a></p>
      <p><strong>Shop address: </strong></p>
      <p>By appointment only</p>
      <p>1175 Turnpike Street North Andover, MA 01845</p>
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3mhE1yT1aaaiLzBJ1tX5xpGMEOSXwd5o&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '300px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
      <p><strong>Mailing address: </strong></p>
      <p>1044 Johnson Street North Andover, MA 01845</p>
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
