import { useState, useEffect } from 'react';
import magnifier from '../../magnifier.svg';
import classes from './SearchBar.module.css';

function SearchBar({ onSearch, adapt }) {
  const [query, setQuery] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const changeQueryHandler = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query !== '') onSearch(query);
    }, 450);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <form
      className={`${classes.form} ${adapt ? classes.adapt : ''}`}
      onSubmit={submitHandler}
    >
      <input
        type="text"
        name="input-country"
        id="input-country"
        autoComplete="off"
        placeholder="Search any country..."
        onChange={changeQueryHandler}
      />
      <button type="submit">
        <img src={magnifier} alt="" />
        <span>Search</span>
      </button>
    </form>
  );
}

export default SearchBar;
