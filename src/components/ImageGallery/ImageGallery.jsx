import { useState } from 'react';
import PropTypes from 'prop-types';
import { Blocks } from 'react-loader-spinner';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import css from './ImageGallery.module.css';

export const ImageGallery = ({
  images,
  incrementPage,
  loader,
  totalHits,
  error,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, serModalImg] = useState('');

  const openModal = id => {
    setShowModal(true);
    const largeImageUrl = images.find(image => image.id === id).largeImageURL;
    return serModalImg(largeImageUrl);
  };
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const showButton = images.length > 1 && totalHits > images.length;
  return (
    <>
      {error && <h1>{error.message}</h1>}
      <ul className={css.gallery}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              openModal={() => {
                openModal(image.id);
              }}
              key={image.id}
              smallImg={image.webformatURL}
              tags={image.tags}
            />
          );
        })}
      </ul>
      {loader && (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperClass={css.blocksWrapper}
        />
      )}
      {showButton && <Button incrementPage={incrementPage} />}
      {showModal && <Modal onClose={toggleModal} modalImg={modalImg} />}
    </>
  );
};

ImageGallery.propTypes = {
  loader: PropTypes.bool.isRequired,
  incrementPage: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalHits: PropTypes.number.isRequired,
};
