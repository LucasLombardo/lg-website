import React from 'react'
import Link from 'gatsby-link'
import AlbumImages from '../../components/gallery/albumImages'
import ScrollUpBtn from '../../components/scrolltotop'

const AutoArt = ({ pageContext }) => (
  <div>
    <h1>{pageContext.longTitle || pageContext.title}</h1>
    <ScrollUpBtn />
    <Link to="/gallery">Back to albums</Link>
    <AlbumImages albumID={pageContext.flickrAlbumId} />
  </div>
)

export default AutoArt
