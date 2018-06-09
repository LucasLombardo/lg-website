import React from 'react';
import styled from 'styled-components';
import AlbumThumnail from '../components/gallery/albumThumnail';

const StyledAlbumGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const albums = [
  ['Truck Lettering', 'truck-lettering', 'https://farm2.staticflickr.com/1183/707471795_04e161f4c9_m.jpg'],
  ['Auto Art', 'auto-art', 'https://farm4.staticflickr.com/3060/2322404488_644db5148a_m.jpg'],
  ['Pinstriping', 'pinstriping', 'https://farm2.staticflickr.com/1174/707493771_91826ed52d_m.jpg'],
  ['Vehicle Wraps & Large Prints', 'vehicle-wraps', 'https://farm9.staticflickr.com/8108/8452482639_06b6abd809_m.jpg'],
  ['Motorcycles', 'motorcycles', 'https://farm2.staticflickr.com/1251/707488391_d28dead5f0_m.jpg'],
  ['Flames', 'flames', 'https://farm2.staticflickr.com/1042/707495099_8703e81e3b_m.jpg'],
  ['Fleets of Vehicles', 'fleets-of-vehicles', 'https://farm9.staticflickr.com/8098/8446747361_57a51d5e7d_n.jpg'],
  ['Race Fans', 'race-fans', 'https://farm9.staticflickr.com/8181/8068278857_cab614bcca_m.jpg'],
  ['Wall Murals', 'wall-murals', 'https://farm2.staticflickr.com/1255/708358620_6f53c3d425_m.jpg'],
  ['Trailers/Big Rigs', 'trailers-big-rigs', 'https://farm9.staticflickr.com/8030/8068259803_7d1064e482_m.jpg'],
  ['Signs', 'signs', 'https://farm2.staticflickr.com/1339/708368774_bfccd35a90_m.jpg'],
  ['Helmets', 'helmets', 'https://farm5.staticflickr.com/4013/4325465803_08caee805e_m.jpg'],
  ['Patriotic', 'patriotic', 'https://farm2.staticflickr.com/1063/707478359_c46fe2e70d_m.jpg'],
  ['Boats', 'boats', 'https://farm3.staticflickr.com/2066/1987487917_d642a6ec8b_m.jpg'],
  ['Reflective Graphics', 'reflective-graphics', 'https://farm9.staticflickr.com/8236/8446752841_ecfb68c396_m.jpg'],
  ['Heavy Equipment', 'heavy-equipment', 'https://farm9.staticflickr.com/8518/8445314488_bf4ec409bc_m.jpg'],
];

const Gallery = () => (
  <div>
    <h1>Gallery</h1>
    <StyledAlbumGrid>
      {albums.map(album => (
        <AlbumThumnail name={album[0]} slug={album[1]} thumnail={album[2]} key={album[2]} />
      ))}
    </StyledAlbumGrid>
  </div>
);

export default Gallery;
