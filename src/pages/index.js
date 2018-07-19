import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ContactInfo from '../components/contactinfo';

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
    text-align: left;
  }
  @media only screen and (max-width: 768px)  {
    width: 100%;
  }
`;

const StyledCol2 = styled.div`
  width: 55%;
  padding-left: 10%;
  @media only screen and (max-width: 768px)  {
    width: 100%;
    padding-left: inherit;
  }
`;

const StyledSocialBtns = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 1em;
  //set a minimum margin with div in between
  div {
    width: 15px;
  }
`;
const StyledBtn = styled.img`
  padding: 1em;
  margin: 0 8px 0 0;
  border: 2px solid #3b5998;
  border-radius: 10px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  &:hover {
    padding: 1.05em;
    background-color: rgba(0,0,0,0.05);
  }
`;

function getYears() {
  const dt = new Date();
  return Number(dt.getFullYear()) - 1989;
}

const IndexPage = () => (
  <StyledHomepage>
    <StyledCol1>
      <h3>Welcome to Lombardo Graphics</h3>
      <p>
        We are a vehicle graphics company located in North Andover, Ma. Our
        service offerings include truck and automobile lettering, hand painted pinstriping,
        airbrush work, full vehicle wraps, and custom motorcycle art.
      </p>
      <p>
        Having been in business for over {getYears()} years, we deliver high quality work that can
        make your business stand out among competitors and leave a great first impression.
      </p>
      <p id="gallery-link" >
        <Link to="gallery">Check out our portfolio of work for some photos!</Link>
      </p>
      <StyledSocialBtns>
        <a href="https://www.facebook.com/LombardoGraphicscom-450098998346458/">
          <StyledBtn src="https://cdn.rawgit.com/LucasLombardo/svg-hosting/master/facebooksvg.svg" alt="Find us on Facebook" />
        </a>
        <div />
        <a href="https://www.flickr.com/photos/lombardographics/albums">
          <StyledBtn src="https://cdn.rawgit.com/LucasLombardo/svg-hosting/master/flickrsvg.svg" alt="Follow our photostream on Flickr" />
        </a>
      </StyledSocialBtns>
    </StyledCol1>
    <StyledCol2>
      <ContactInfo />
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
