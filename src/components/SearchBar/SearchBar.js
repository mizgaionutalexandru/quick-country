import magnifier from '../../magnifier.svg';
import classes from './SearchBar.module.css';

function SearchBar() {
  return (
    <form className={classes.form}>
      <input
        type="text"
        name="input-country"
        id="input-country"
        autoComplete="off"
      />
      <button type="submit">
        <img src={magnifier} alt="" />
        <span>Search</span>
      </button>
    </form>
  );
}

export default SearchBar;
