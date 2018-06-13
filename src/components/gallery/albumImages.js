import React, { Component } from 'react';
import Gallery from '../gallery/gallery';

function makeFlickrSrc(base, size) {
  // takes base url and appends size suffix
  return `${base}_${size}.jpg`;
}

export default class SecondPage extends Component {
  state = {
    photos: ['https://farm9.staticflickr.com/8374/8447854094_59f23775f7', 'https://farm9.staticflickr.com/8097/8447863054_e2ceca769d', 'https://farm9.staticflickr.com/8098/8446747361_57a51d5e7d'],
  }
  componentDidMount() {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8fe8ca10f276c4ceb1869ce93a314d7b&photoset_id=72157600626331173&user_id=9583362@N03&format=json&nojsoncallback=1')
      .then(response => response.json())
      .then(data => data.photoset.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`))
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
            `${makeFlickrSrc(base, 'c')} 800w`,
            `${makeFlickrSrc(base, 'z')} 640w`,
        ],
          thumbnail: makeFlickrSrc(base, 'q'),
        }))}
          showThumbnails
        />
      </div>
    );
  }
}
