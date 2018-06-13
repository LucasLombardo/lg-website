import React from 'react';

const IndexPage = ({ data }) => (
  <div>
    <h2>Welcome to LombardoGraphics.com!</h2>
  </div>
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
