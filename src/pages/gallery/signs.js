import React from 'react';
import Link from 'gatsby-link';
import AlbumImages from '../../components/gallery/albumImages';

const flickrAlbumID = '72157600626498948';

const Signs = () => (
  <div>
    <h1>Signs</h1>
    <Link to="/gallery">Back to albums</Link>
    <AlbumImages albumID={flickrAlbumID} />
  </div>
);

export default Signs;
