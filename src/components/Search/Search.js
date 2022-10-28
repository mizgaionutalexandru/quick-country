import { useReducer } from 'react';
import SearchBar from './SearchBar';
import classes from './Search.module.css';
import SearchResults from './SearchResults';

const initialState = {
  isVisible: false,
  isLoading: false,
  error: null,
  results: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'START_SEARCH':
      return {
        isVisible: true,
        isLoading: true,
        results: null,
        error: null,
      };
    case 'SET_RESULTS':
      return { ...state, results: action.results };
    case 'SET_ERROR':
      return { ...state, isVisible: true, error: action.error };
    case 'STOP_LOADING':
      return { ...state, isLoading: false };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Action invalid!');
  }
};

function Search() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchHandler = async (query) => {
    try {
      if (query === '')
        throw new Error('No query found. Please type something.');

      dispatch({ type: 'START_SEARCH' });
      const res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
      if (res.status === 404) throw new Error('No countries found.');
      if (!res.ok) throw new Error('Something went wrong.');

      const data = await res.json();
      dispatch({ type: 'SET_RESULTS', results: data.slice(0, 3) });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', error: err.message });
    }
    dispatch({ type: 'STOP_LOADING' });
  };

  const blurHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) dispatch({ type: 'RESET' });
  };

  const keydownHandler = (e) => {
    if (e.key == 'Escape') dispatch({ type: 'RESET' });
  };

  return (
    // <div className={`${classes.search} ${classes.left}`}>
    <div
      className={classes.search}
      onKeyDown={keydownHandler}
      onBlur={blurHandler}
    >
      <SearchBar onSearch={searchHandler} adapt={state.isVisible} />
      {state.isVisible && (
        <SearchResults
          results={state.results}
          isLoading={state.isLoading}
          error={state.error}
        />
      )}
    </div>
  );
}

export default Search;
