import React from 'react';
import Link from 'gatsby-link';
import AlbumImages from '../../components/gallery/albumImages';
import ScrollUpBtn from '../../components/scrolltotop';

const flickrAlbumID = '72157600626330045';

const Patriotic = () => (
  <div>
    <h1>Patriotic</h1>
    <ScrollUpBtn />
    <Link to="/gallery">Back to albums</Link>
    <AlbumImages albumID={flickrAlbumID} />
  </div>
);

export default Patriotic;
