import classes from './Countries.module.css';
import smile from './../../icons/smile.svg';

import Country from './Country';

function Countries({ shownCountries, updateSave }) {
  return shownCountries.length === 0 ? (
    <div className={classes.message}>
      <img src={smile} alt="" />
      <p>Looks like you haven't searched any countries yet!</p>
    </div>
  ) : (
    <ul className={classes.list}>
      {shownCountries.map((country) => {
        return (
          <Country
            key={country.cca3}
            data={country}
            onUpdateSave={updateSave}
          />
        );
      })}
    </ul>
  );
}

export default Countries;
