import React from 'react';
import Link from 'gatsby-link';
import AlbumImages from '../../components/gallery/albumImages';

const flickrAlbumID = '72157631723964033';

const TrailersBigRigs = () => (
  <div>
    <h1>Trailers/Big Rigs</h1>
    <Link to="/gallery">Back to albums</Link>
    <AlbumImages albumID={flickrAlbumID} />
  </div>
);

export default TrailersBigRigs;
