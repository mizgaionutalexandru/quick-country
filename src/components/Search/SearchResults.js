import classes from './SearchResults.module.css';
import Image from '../UI/Image';

function SearchResults({ results, isLoading, error, showCountry }) {
  let content;
  if (results?.length > 0)
    content = results.map((result) => {
      const countryData = {
        cca3: result.cca3 || null,
        name: result.name || null,
        region: result.region || null,
        currency: result.currencies
          ? Object.values(result.currencies)[0]
          : null,
        population: result.population || null,
        capital: result.capital ? result.capital[0] : null,
        languages: result.languages
          ? Object.values(result.languages).map((lang) => lang.toLowerCase())
          : null,
        timezones: result.timezones || null,
        borders: result.borders || null,
        coatOfArms: result.coatOfArms.svg || null,
        flag: result.flags.svg || null,
      };

      return (
        <div
          key={result.cca2}
          className={classes.result}
          tabIndex="0"
          onClick={showCountry.bind(null, countryData)}
        >
          {results.flags}
          <Image
            src={result.flags.svg}
            alt={`${result.name.official}'s flag`}
          />
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
