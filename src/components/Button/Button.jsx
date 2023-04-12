import PropTypes from 'prop-types';
import css from './Button.module.css';
export const Button = ({ incrementPage }) => {
  return (
    <button
      type="button"
      className={css.buttonPagination}
      onClick={incrementPage}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};
