import PropTypes from 'prop-types';

export default function ImageGallery({ images, openModal }) {
  return (
    <ImageGalleryList id="gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
      ))}
    </ImageGalleryList>
  );
}


ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
}