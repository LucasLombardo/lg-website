import React from 'react'
import Link from 'gatsby-link'
import AlbumImages from '../../components/gallery/albumImages'
import ScrollUpBtn from '../../components/scrolltotop'

const flickrAlbumID = '72157600626331693'

const WallMurals = () => (
  <div>
    <h1>Wall Murals</h1>
    <ScrollUpBtn />
    <Link to="/gallery">Back to albums</Link>
    <AlbumImages albumID={flickrAlbumID} />
  </div>
)

export default WallMurals
