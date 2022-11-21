import classes from './Countries.module.css';
import star from './../../icons/star.svg';
import currency from './../../icons/currency.svg';
import population from './../../icons/population.svg';
import capital from './../../icons/capital.svg';
import language from './../../icons/language.svg';
import timezone from './../../icons/timezone.svg';
import border from './../../icons/border.svg';
import smile from './../../icons/smile.svg';

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
              ></div>
              <div className={classes.info}>
                <header>
                  <h2>
                    {country.name} ({country.cca3})
                  </h2>
                  <p>{country.region}</p>
                  <img src={star} alt="Save country action icon" />
                </header>
                <ul className={classes.details}>
                  <li>
                    <img src={currency} alt="Country currency icon" />
                    <p>
                      Currency: {country.currency.name} (
                      {country.currency.symbol})
                    </p>
                  </li>
                  <li>
                    <img src={population} alt="Country population icon" />
                    <p>Population: {country.population}</p>
                  </li>
                  <li>
                    <img src={capital} alt="Country capital icon" />
                    <p>Capital: {country.capital}</p>
                  </li>
                  <li>
                    <img src={language} alt="Country language icon" />
                    <p>
                      Language{country.languages.length > 1 ? 's' : ''}:{' '}
                      {country.languages.join(', ')}
                    </p>
                  </li>
                  <li>
                    <img src={timezone} alt="Country time zones icon" />
                    <p>
                      Time zone{country.timezones.length > 1 ? 's' : ''}:{' '}
                      {country.timezones.join(', ')}
                    </p>
                  </li>
                  <li>
                    <img src={border} alt="Country border icon" />
                    <p>
                      Border{country.borders?.length > 1 ? 's' : ''}:{' '}
                      {country.borders?.length === 0 || !country.borders
                        ? 'No borders'
                        : country.borders.join(', ')}
                    </p>
                  </li>
                </ul>
                <img
                  src={country.coatOfArms}
                  alt={`${country.name}'s coat of arms`}
                  className={classes.coat}
                />
              </div>
            </article>
          );
        })}
      </ul>
    );

  return content;
}

export default Countries;
