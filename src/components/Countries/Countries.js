import classes from './Countries.module.css';
import star from './../../icons/star.svg';
import smile from './../../icons/smile.svg';

import CountryDetail from './CountryDetail';

function Countries({ shownCountries }) {
  const content =
    shownCountries.length === 0 ? (
      <div className={classes.message}>
        <img src={smile} alt="" />
        <p>Looks like you haven't searched any countries yet!</p>
      </div>
    ) : (
      <ul className={classes.list}>
        {shownCountries.map((country) => {
          return (
            <article key={country.cca3}>
              <div
                style={{
                  backgroundImage: `url(${country.flag})`,
                }}
                className={classes.flag}
                alt={`${country.name}'s flag`}
              >
                {country.flag ? '' : 'Something went wrong.'}
              </div>
              <div className={classes.info}>
                <header>
                  <img src={star} alt="Save country action icon" />
                  <h2>
                    {country.name} ({country.cca3})
                  </h2>
                  <p>{country.region}</p>
                </header>
                <ul className={classes.details}>
                  <CountryDetail
                    detail="currency"
                    value={
                      country.currency
                        ? `${country.currency.name} (${country.currency?.symbol})`
                        : null
                    }
                  />
                  <CountryDetail
                    detail="population"
                    value={
                      country.population
                        ? new Intl.NumberFormat('fr', {
                            notation: 'compact',
                            compactDisplay: 'long',
                          }).format(country.population)
                        : null
                    }
                  />
                  <CountryDetail
                    detail="capital"
                    value={country.capital}
                    fallback={'No capital city found.'}
                  />
                  <CountryDetail detail="language" value={country.languages} />
                  <CountryDetail detail="time-zone" value={country.timezones} />
                  <CountryDetail
                    detail="border"
                    value={country.borders}
                    fallback={'No borders'}
                  />
                </ul>
                {country.coatOfArms && (
                  <img
                    src={country.coatOfArms}
                    alt={`${country.name}'s coat of arms`}
                    className={classes.coat}
                  />
                )}
              </div>
            </article>
          );
        })}
      </ul>
    );

  return content;
}

export default Countries;
