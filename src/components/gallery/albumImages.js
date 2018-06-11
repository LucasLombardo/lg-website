import React, { Component } from 'react';
import styled from 'styled-components';
import AlbumLightbox from './albumLightbox';

const StyledImg = styled.img`
  margin: 2px 5px;
`;

class AlbumImages extends Component {
  state = {
    smallPhotos: [],
    largePhotos: [],
    lightBox: false,
    imageIndex: 0,
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8fe8ca10f276c4ceb1869ce93a314d7b&photoset_id=${this.props.albumID}&user_id=9583362@N03&format=json&nojsoncallback=1`);
      const photos = await res.json();
      const smallPhotos = photos.photoset.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`);
      const largePhotos = photos.photoset.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`);
      this.setState({ // eslint-disable-line
        smallPhotos,
        largePhotos,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <AlbumLightbox isOpen={this.state.lightBox} photoIndex={this.state.imageIndex} images={this.state.largePhotos} />
        {this.state.smallPhotos.map((url, i) => (
          <StyledImg
            src={url}
            alt="thumnail"
            key={url}
            onClick={() => (this.setState({
              lightBox: true,
              imageIndex: i,
            }))}
          />
        ))}
      </div>
    );
  }
}

export default AlbumImages;
