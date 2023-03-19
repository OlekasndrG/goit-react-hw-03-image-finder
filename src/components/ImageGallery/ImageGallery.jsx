import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { ImageGalleryContainer } from './ImageGallery.styled';
import PropTypes from 'prop-types';
class ImageGallery extends Component {
  render() {
    return (
      <ImageGalleryContainer>
        {this.props.picturesArray.map(picture => {
          return (
            <ImageGalleryItem
              webformatURL={picture.webformatURL}
              tags={picture.tags}
              key={picture.id}
              id={picture.id}
              openBigImage={() => {
                this.props.openBigImage(picture.largeImageURL);
              }}
              // toggleModal={this.props.toggleModal}
              largeImageURL={picture.largeImageURL}
            />
          );
        })}
      </ImageGalleryContainer>
    );
  }
}
ImageGallery.propTypes = {
  picturesArray: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  openBigImage: PropTypes.func.isRequired,
  // toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
