import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ onClose, modalImg }) => {


  
  useEffect(() => {
       const closeModalEscape = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
    window.addEventListener('keydown', closeModalEscape);
     return () => {
      window.removeEventListener('keydown', closeModalEscape);
    };
  }, [onClose]);

  // useEffect(() => {
  //   return () => {
  //     window.removeEventListener('keydown', closeModalEscape);
  //   };
  // }, []);

 
  const closeModalBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={closeModalBackdrop}>
      <div className={css.modal}>
        <img src={modalImg} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
