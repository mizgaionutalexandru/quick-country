import currency from './../../icons/currency.svg';
import population from './../../icons/population.svg';
import capital from './../../icons/capital.svg';
import language from './../../icons/language.svg';
import timezone from './../../icons/timezone.svg';
import border from './../../icons/border.svg';

import classes from './CountryDetail.module.css';

const sources = {
  currency,
  population,
  capital,
  language,
  timezone,
  border,
};

function CountryDetail({ detail, value, fallback = 'Something went wrong.' }) {
  let detailName = detail[0].toUpperCase() + detail.slice(1); // uppercase the first letter
  detailName += Array.isArray(value) && value.length > 1 ? 's' : ''; // allow plurals
  detailName = detailName.replace('-', ' '); // allow time-zone = Time zone(s)

  const detailValue = Array.isArray(value) ? value.join(', ') : value;
  return (
    <li className={classes.detail}>
      <img
        src={sources[detail.replace('-', '')]}
        alt={`Country ${detail.replace('-', ' ')} icon`}
      />
      <p>
        {detailName}: {detailValue || fallback}
      </p>
    </li>
  );
}

export default CountryDetail;
