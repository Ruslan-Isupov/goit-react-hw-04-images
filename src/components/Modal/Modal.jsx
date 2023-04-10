import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ onClose, modalImg }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModalEscape);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', closeModalEscape);
    };
  }, []);

  const closeModalEscape = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
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
