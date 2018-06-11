import React from 'react';
import Link from 'gatsby-link';
import AlbumImages from '../../components/gallery/albumImages';

const flickrAlbumID = '72157600626331173';

const TruckLettering = () => (
  <div>
    <h1>Truck Lettering</h1>
    <Link to="/gallery">Back to albums</Link>
    <AlbumImages albumID={flickrAlbumID} />
  </div>
);

export default TruckLettering;
