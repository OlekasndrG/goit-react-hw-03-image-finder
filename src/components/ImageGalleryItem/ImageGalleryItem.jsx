import React from 'react';
import {
  ImageGalleryItemContainer,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  id,
  toggleModal,
  openBigImage,
  largeImageURL,
}) => {
  return (
    <ImageGalleryItemContainer key={id}>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        // onClick={() => {
        //   toggleModal();
        //   openBigImage(largeImageURL);
        // }}
        onClick={openBigImage}
      />
    </ImageGalleryItemContainer>
  );
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openBigImage: PropTypes.func.isRequired,
  // toggleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
