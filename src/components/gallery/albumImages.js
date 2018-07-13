import React, { Component } from 'react';
import Gallery from '../gallery/gallery';

function makeFlickrSrc(base, size) {
  // takes base url and appends size suffix
  const noLarge = [
    'https://farm2.staticflickr.com/1265/707496651_0f3bbe011a',
    'https://farm2.staticflickr.com/1387/707483939_bf3b672e7b',
    'https://farm2.staticflickr.com/1262/707480187_9c134ed0eb',
    'https://farm2.staticflickr.com/1310/708353988_5767af24de',
    'https://farm2.staticflickr.com/1128/707480343_4bbd416a3d',
    'https://farm2.staticflickr.com/1191/707481247_d6c6e61aea',
    'https://farm2.staticflickr.com/1346/707481321_46f8e9c2a2',
    'https://farm2.staticflickr.com/1028/707481423_8754f7f6b4',
    'https://farm2.staticflickr.com/1361/707486599_d0da618ec8',
    'https://farm2.staticflickr.com/1090/707497037_8fab1ddf78',
    'https://farm2.staticflickr.com/1351/708357540_0d1b6b9540',
    'https://farm2.staticflickr.com/1371/707483679_951c0f7b34',
    'https://farm2.staticflickr.com/1404/707481493_d54890e396',
    'https://farm2.staticflickr.com/1193/708355470_251e72b01a',
    'https://farm2.staticflickr.com/1266/708355544_230f25bda7',
    'https://farm2.staticflickr.com/1284/708355598_eedc0519ba',
    'https://farm2.staticflickr.com/1094/708355692_647892a89f',
    'https://farm2.staticflickr.com/1283/707481907_fae074befe',
    'https://farm2.staticflickr.com/1086/708355832_e5ca72c2fb',
    'https://farm2.staticflickr.com/1325/707482025_572b65e349',
    'https://farm2.staticflickr.com/1025/708355992_2d04c39bc1',
    'https://farm2.staticflickr.com/1255/707482159_83db93899f',
    'https://farm2.staticflickr.com/1341/708356148_672e9bc0fb',
    'https://farm2.staticflickr.com/1055/707482415_42711b4b4c',
    'https://farm2.staticflickr.com/1006/708356670_c31a2dbf58',
    'https://farm2.staticflickr.com/1426/707483027_02a6ef6020',
    'https://farm2.staticflickr.com/1089/708357046_ea8e6d918b',
    'https://farm2.staticflickr.com/1293/707483193_747ace272c',
    'https://farm2.staticflickr.com/1315/708357192_3e00d67956',
    'https://farm2.staticflickr.com/1227/708353056_016558eb52',
    'https://farm2.staticflickr.com/1122/707479343_e3e6e3d6de',
    'https://farm2.staticflickr.com/1087/708352988_c8f53d7919',
    'https://farm2.staticflickr.com/1191/707481247_d6c6e61aea',
    'https://farm2.staticflickr.com/1310/708353988_5767af24de',
    'https://farm2.staticflickr.com/1414/708353338_847daf10c7',
    'https://farm2.staticflickr.com/1187/708353400_aec3b26199',
    'https://farm2.staticflickr.com/1079/707479843_6be7128931',
    'https://farm2.staticflickr.com/1224/708353686_c6159aae4d',
    'https://farm2.staticflickr.com/1183/707480049_ac895c9e36',
    'https://farm2.staticflickr.com/1123/708353852_d5b6527e82',
    'https://farm4.staticflickr.com/3470/3947707203_3c0416a910',
    'https://farm2.staticflickr.com/1063/707478359_c46fe2e70d',
    'https://farm2.staticflickr.com/1341/708352170_98a7f72c28',
    'https://farm2.staticflickr.com/1163/707478545_6551b60d66',
    'https://farm2.staticflickr.com/1293/708351698_35e3795ba1',
    'https://farm2.staticflickr.com/1328/708351788_ef36dfccea',
    'https://farm2.staticflickr.com/1287/708351838_a1a25d51ea',
    'https://farm2.staticflickr.com/1297/708351904_d0de5836dd',
  ];
  // imgs uploaded pre 2012 don't have b suffix unless orig image was large, filter 48 legacy imgs
  if (size === 'b' && noLarge.indexOf(base) !== -1) return `${base}_z.jpg`;
  return `${base}_${size}.jpg`;
}

export default class SecondPage extends Component {
  state = {
    photos: [],
  }
  componentDidMount() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8fe8ca10f276c4ceb1869ce93a314d7b&photoset_id=${this.props.albumID}&user_id=9583362@N03&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(data => data.photoset.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`).reverse())
      .then((photos) => {
        this.setState({ photos });
      });
  }
  render() {
    return (
      <div>
        <Gallery
          images={this.state.photos.map(base => ({
          src: makeFlickrSrc(base, 'c'),
          srcSet: [
            `${makeFlickrSrc(base, 'b')} 1024w`,
            `${makeFlickrSrc(base, 'z')} 640w`,
            `${makeFlickrSrc(base, 'n')} 320w`,
        ],
          thumbnail: makeFlickrSrc(base, 'q'),
        }))}
          showThumbnails
          backdropClosesModal
        />
      </div>
    );
  }
}
