import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';
import './index.css';

const StyledBody = styled.div`
  margin: 0 auto;
  width: 70%;
  padding: 0 1em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  div {
    text-align: center;
  }
  @media only screen and (max-width: 812px)  {
    width: 80%;
  }
  @media only screen and (max-width: 475px)  {
    width: 90%;
  }
`;

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header data={data} location={location} />
    <StyledBody>
      {children()}
    </StyledBody>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;

/* eslint-disable */
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    logo: imageSharp(id: {regex: "/md_logo.png/"}) {
      sizes(maxWidth: 1920, quality: 85) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
/* eslint-enable */
