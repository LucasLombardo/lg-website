import React from 'react';
// import Link from 'gatsby-link';
import PostListing from '../components/postListing';

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    <hr />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
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
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }) {
      edges {
        node {
          id
          frontmatter{
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields{
            slug
          }
          excerpt(pruneLength: 60)
        }
      }
    }
  }

`;
/* eslint-enable */
