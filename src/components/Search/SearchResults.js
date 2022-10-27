import classes from './SearchResults.module.css';

function SearchResults({ results, isLoading, error }) {
  let content;
  if (results?.length > 0)
    content = results.map((result) => {
      return (
        <div key={result.cca2} className={classes.result} tabIndex="0">
          {results.flags}
          <img src={result.flags.svg} alt={`${result.name.official}'s flag`} />
          <div className={classes.text}>
            <span>{result.name.official}</span>
            <span>({result.cca2})</span>
          </div>
        </div>
      );
    });
  if (error) content = <span className={classes.error}>{error}</span>;
  if (isLoading) content = <div className={classes.loading}></div>;

  return <div className={classes.results}>{content} </div>;
}

export default SearchResults;
