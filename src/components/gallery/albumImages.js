import React, { Component } from 'react'
import Gallery from '../gallery/gallery'
import legacyFlickrPhotos from '../../data/legacyFlickrPhotos.json'

function makeFlickrSrc(base, size) {
  // takes base url and appends size suffix, imgs uploaded pre 2012
  // don't have b suffix unless orig image was large
  console.log(legacyFlickrPhotos)
  if (size === 'b' && legacyFlickrPhotos.indexOf(base) !== -1)
    return `${base}_z.jpg`
  return `${base}_${size}.jpg`
}

export default class SecondPage extends Component {
  state = {
    photos: [],
  }
  componentDidMount() {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8fe8ca10f276c4ceb1869ce93a314d7b&photoset_id=${this.props.albumID}&user_id=9583362@N03&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) =>
        data.photoset.photo
          .map(
            (photo) =>
              `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`
          )
          .reverse()
      )
      .then((photos) => {
        this.setState({ photos })
      })
  }
  render() {
    return (
      <div>
        <Gallery
          images={this.state.photos.map((base) => ({
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
    )
  }
}
