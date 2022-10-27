import { useReducer } from 'react';
import SearchBar from './SearchBar';
import classes from './Search.module.css';
import SearchResults from './SearchResults';

const initialState = {
  resultsVisible: false,
  isLoading: false,
  error: null,
  results: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'search':
      return {
        resultsVisible: state.resultsVisible,
        isLoading: true,
        results: null,
        error: null,
      };
    case 'results':
      return { ...state, resultsVisible: true, results: action.results };
    case 'error':
      return { ...state, resultsVisible: true, error: action.error };
    case 'isLoading':
      return { ...state, resultsVisible: true, isLoading: action.isLoading };
    case 'reset':
      return initialState;
    default:
      throw new Error('Action invalid!');
  }
};

function Search() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchHandler = async (query) => {
    try {
      dispatch({ type: 'search' });
      const res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
      if (res.status === 404) throw new Error('No countries found.');
      if (!res.ok) throw new Error('Something went wrong.');

      const data = await res.json();
      dispatch({ type: 'results', results: data.slice(0, 3) });
    } catch (err) {
      dispatch({ type: 'error', error: err.message });
    }
    dispatch({ type: 'isLoading', isLoading: false });
  };

  const blurHandler = () => {
    dispatch({ type: 'reset' });
  };

  const keydownHandler = (e) => {
    if (e.key == 'Escape') dispatch({ type: 'reset' });
  };

  return (
    // <div className={`${classes.search} ${classes.left}`}>
    <div
      className={classes.search}
      onBlur={blurHandler}
      onKeyDown={keydownHandler}
    >
      <SearchBar onSearch={searchHandler} adapt={state.resultsVisible} />
      {state.resultsVisible && (
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
