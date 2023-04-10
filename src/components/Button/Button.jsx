import PropTypes from 'prop-types';
import css from './Button.module.css';
export const Button= ({incrementPage,nameQuery})=> {
const  loadNextPage = () => {
    incrementPage(nameQuery);
  };
  
    return (
      <button
        type="button"
        className={css.buttonPagination}
        onClick={loadNextPage}
      >
        Load more
      </button>
    );
  }

Button.propTypes = {
  nameQuery: PropTypes.string.isRequired,
  incrementPage: PropTypes.func.isRequired,
};
