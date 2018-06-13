import React from 'react';
import Link from 'gatsby-link';
import AlbumImages from '../../components/gallery/albumImages';

const flickrAlbumID = '72157600626330445';

const Pinstriping = () => (
  <div>
    <h1>Pinstriping</h1>
    <Link to="/gallery">Back to albums</Link>
    <AlbumImages albumID={flickrAlbumID} />
  </div>
);

export default Pinstriping;
