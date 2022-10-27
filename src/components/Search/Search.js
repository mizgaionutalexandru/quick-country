import { useState } from 'react';
import SearchBar from './SearchBar';
import classes from './Search.module.css';
import SearchResults from './SearchResults';

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  const searchHandler = async (query) => {
    try {
      setIsLoading(true);
      setResults(null);
      setError(null);
      const res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
      if (res.status === 404) throw new Error('No countries found.');
      if (!res.ok) throw new Error('Something went wrong.');

      const data = await res.json();
      setResults(data.slice(0, 3));
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  const areResultsShown = isLoading || error || results?.length > 0;

  return (
    // <div className={`${classes.search} ${classes.left}`}>
    <div className={classes.search}>
      <SearchBar onSearch={searchHandler} adapt={areResultsShown} />
      {areResultsShown && (
        <SearchResults results={results} isLoading={isLoading} error={error} />
      )}
    </div>
  );
}

export default Search;
