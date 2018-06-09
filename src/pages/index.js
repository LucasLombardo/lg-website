import React from 'react';

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    <hr />
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
