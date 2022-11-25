import classes from './Countries.module.css';
import smile from './../../icons/smile.svg';

import CountryHeader from './CountryHeader';
import CountryDetail from './CountryDetail';
import Image from '../UI/Image';

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
                {country.flag ? '' : 'Something went wrong'}
              </div>
              <div className={classes.info}>
                <CountryHeader
                  name={country.name}
                  cca3={country.cca3}
                  region={country.region}
                />
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
                    fallback={'No capital city found'}
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
                  <Image
                    src={country.coatOfArms}
                    alt={`${country.name}'s coat of arms`}
                    className={classes.coat}
                    loadStyle={{
                      position: 'absolute',
                      bottom: '1.2rem',
                      right: '1.6rem',
                    }}
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
