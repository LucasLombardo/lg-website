import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const StyledPage = styled.div`
  background-color: #eee;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

// width should align with both header and footer, update
// them as well if changing width/media queries
const StyledBody = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-align: center;
  padding: 1em;

  width: 75%;
  max-width: 1264px;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 85%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledPage>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title={data.site.siteMetadata.title}
      >
        <link
          rel="icon"
          type="image/png"
          href="https://imagizer.imageshack.us/a/img924/3105/vso8pt.png"
          sizes="16x16"
        />
      </Helmet>
      <Header data={data} location={location} />
      <StyledBody>{children}</StyledBody>
      <Footer />
    </StyledPage>
  )
}

export default Layout
