import classes from './Country.module.css';

import CountryHeader from './CountryHeader';
import CountryDetail from './CountryDetail';
import Image from '../UI/Image';

function Country({ data, onUpdateSave }) {
  const changeSavedHandler = (key) => {
    onUpdateSave(key);
  };

  return (
    <article>
      <div
        style={{
          backgroundImage: `url(${data.flag})`,
        }}
        className={classes.flag}
        alt={`${data.name}'s flag`}
      >
        {data.flag ? '' : 'Something went wrong'}
      </div>
      <div className={classes.info}>
        <CountryHeader
          name={data.name}
          cca3={data.cca3}
          region={data.region}
          onChangeSaved={changeSavedHandler.bind(undefined, data.cca3)}
          isSaved={data.isSaved}
        />
        <ul className={classes.details}>
          <CountryDetail
            detail="currency"
            value={
              data.currency
                ? `${data.currency.name} (${data.currency?.symbol})`
                : null
            }
          />
          <CountryDetail
            detail="population"
            value={
              data.population
                ? new Intl.NumberFormat('fr', {
                    notation: 'compact',
                    compactDisplay: 'long',
                  }).format(data.population)
                : null
            }
          />
          <CountryDetail
            detail="capital"
            value={data.capital}
            fallback={'No capital city found'}
          />
          <CountryDetail detail="language" value={data.languages} />
          <CountryDetail detail="time-zone" value={data.timezones} />
          <CountryDetail
            detail="border"
            value={data.borders}
            fallback={'No borders'}
          />
        </ul>
        {data.coatOfArms && (
          <Image
            src={data.coatOfArms}
            alt={`${data.name}'s coat of arms`}
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
}

export default Country;
