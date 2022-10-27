import { useRef } from 'react';
import magnifier from '../../magnifier.svg';
import classes from './SearchBar.module.css';

function SearchBar({ onSearch, adapt }) {
  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    onSearch(query);
  };

  return (
    <form
      className={`${classes.form} ${adapt && classes.adapt}`}
      onSubmit={submitHandler}
    >
      <input
        ref={inputRef}
        type="text"
        name="input-country"
        id="input-country"
        autoComplete="off"
        placeholder="Search any country..."
      />
      <button type="submit">
        <img src={magnifier} alt="" />
        <span>Search</span>
      </button>
    </form>
  );
}

export default SearchBar;
