import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';
export const SearchBar = ({ onSaveNameQuery })=> {
 
const [query, setQuery] = useState("")
 
  const getValue = e => {
    const inputValue = e.target.value;
    setQuery (inputValue );
  };
 
  const saveNameQuery = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Field is empty!');
      return;
    }
    onSaveNameQuery(query);
    resetForm();
  };

  const resetForm = () => {
    setQuery('');
  };

    return (
      <header className={css.searchBar}>
        <form className={css.formBar} onSubmit={saveNameQuery}>
          <button type="submit" className={css.buttonBar}>
            <span className="button-label">
              <BiSearchAlt2 />
            </span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={getValue}
            required
          />
        </form>
      </header>
    );
  }

SearchBar.propTypes = {
  onSaveNameQuery: PropTypes.func.isRequired,
};
