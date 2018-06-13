import React from 'react';
import Link from 'gatsby-link';
import AlbumImages from '../../components/gallery/albumImages';

const flickrAlbumID = '72157632691444909';

const ReflectiveGraphics = () => (
  <div>
    <h1>Reflective Graphics</h1>
    <Link to="/gallery">Back to albums</Link>
    <AlbumImages albumID={flickrAlbumID} />
  </div>
);

export default ReflectiveGraphics;
