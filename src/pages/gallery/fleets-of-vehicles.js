import React from 'react';
import Link from 'gatsby-link';
import AlbumImages from '../../components/gallery/albumImages';

const flickrAlbumID = '72157632695564360';

const FleetsOfVehicles = () => (
  <div>
    <h1>Fleets of Vehicles</h1>
    <Link to="/gallery">Back to albums</Link>
    <AlbumImages albumID={flickrAlbumID} />
  </div>
);

export default FleetsOfVehicles;
