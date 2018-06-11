/* eslint no-mixed-operators: 0 */
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class AlbumLightbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: this.props.photoIndex,
      isOpen: this.props.isOpen,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    const { images } = this.props;

    this.state = {
      photoIndex: this.props.photoIndex,
      isOpen: this.props.isOpen,
    };

    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1)]}
            prevSrc={images[(photoIndex - 1)]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default AlbumLightbox;
