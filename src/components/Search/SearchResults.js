import classes from './SearchResults.module.css';

function SearchResults({ results, isLoading, error, showCountry }) {
  let content;
  if (results?.length > 0)
    content = results.map((result) => {
      const countryData = {
        cca3: result.cca3,
        name: result.name?.official,
        region: result.region,
        currency: Object.values(result.currencies)[0],
        population: result.population,
        capital: result.capital ? result.capital[0] : null,
        languages: Object.values(result.languages).map((lang) =>
          lang.toLowerCase()
        ),
        timezones: result.timezones,
        borders: result.borders,
        coatOfArms: result.coatOfArms.svg,
        flag: result.flags.svg,
      };

      return (
        <div
          key={result.cca2}
          className={classes.result}
          tabIndex="0"
          onClick={showCountry.bind(null, countryData)}
        >
          {results.flags}
          <img src={result.flags.svg} alt={`${result.name.official}'s flag`} />
          <div className={classes.text}>
            <span>{result.name.official}</span>
            <span>({result.cca3})</span>
          </div>
        </div>
      );
    });
  if (error) content = <span className={classes.error}>{error}</span>;
  if (isLoading) content = <div className={classes.loading}></div>;

  return <div className={classes.results}>{content} </div>;
}

export default SearchResults;
