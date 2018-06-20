import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import MapWithAMarker from '../components/map';

const StyledHomepage = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    color: #333;
  }
`;

const StyledCol1 = styled.div`
  width: 45%;
  h3 {
    text-align: left;
    font-size: 1.5em;
    @media only screen and (max-width: 955px)  {
      font-size: 1.3em;
    }
  }
  p {
    text-align: left;
    line-height: 1.55em;
  }
  #gallery-link {
    font-size: 1.1em;
    font-weight: 480;
    text-align: center;
  }
  @media only screen and (max-width: 768px)  {
    width: 100%;
  }
`;

const StyledCol2 = styled.div`
  width: 55%;
  padding-left: 10%;
  p {
    text-align: left;
    margin: .5rem 0;
    line-height: 1.3em;
  }
  a {
    color: #333;
  }
  @media only screen and (max-width: 768px)  {
    width: 100%;
    padding-left: inherit;
  }
`;

const StyledSocialBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  flex-wrap: wrap;
`;
const StyledBtn = styled.img`
  padding: 1em;
  margin: 7px;
  width: 200px;
  border: 2px solid #3b5998;
  border-radius: 1em;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  &:hover {
    background-color: #b2ced7;
  }
`;

const IndexPage = () => (
  <StyledHomepage>
    <StyledCol1>
      <h3>Welcome to LombardoGraphics.com!</h3>
      <p>
        We are a vehicle graphics company located in North Andover, Ma. Our
        service offerings include truck and automobile lettering, hand painted pinstriping,
        airbrush work, full vehicle wraps, and custom motorcycle art.
      </p>
      <p>
        Having been in business for over 29 years, we deliver high quality work that can make your
        business stand out among competitors and leave a great first impression.
      </p>
      <p id="gallery-link" >
        <Link to="gallery">Check out our portfolio of work for some photos!</Link>
      </p>
      <StyledSocialBtns>
        <a href="https://www.facebook.com/LombardoGraphicscom-450098998346458/">
          <StyledBtn src="http://lucaslombardo.com/hosting/find-us-on-facebook.svg" alt="Find us on Facebook" />
        </a>
        <a href="https://www.flickr.com/photos/lombardographics/albums">
          <StyledBtn src="http://lucaslombardo.com/hosting/follow-flickr.svg" alt="Follow our photostream on Flickr" />
        </a>
      </StyledSocialBtns>
    </StyledCol1>
    <StyledCol2>
      <p><strong>Phone: </strong><a href="tel:1-978-688-1230">978-688-1230</a></p>
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
