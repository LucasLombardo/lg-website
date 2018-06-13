import React from 'react';
import Link from 'gatsby-link';
import AlbumImages from '../../components/gallery/albumImages';

const flickrAlbumID = '72157622315958253';

const VehicleWraps = () => (
  <div>
    <h1>Vehicle Wraps and Large Prints</h1>
    <Link to="/gallery">Back to albums</Link>
    <AlbumImages albumID={flickrAlbumID} />
  </div>
);

export default VehicleWraps;
