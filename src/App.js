import { useState } from 'react';
import classes from './App.module.css';
import Search from './components/Search/Search';
import Countries from './components/Countries/Countries';

function App() {
  const [shownCountries, setShownCountries] = useState([
    {
      // Dummy data for styling
      borders: ['DEU'],
      capital: 'Copenhagen',
      cca3: 'DNK',
      currency: { name: 'Danish krone', symbol: 'kr' },
      languages: ['danish'],
      name: 'Denmark',
      population: 5831404,
      region: 'Europe',
      timezones: ['UTC-04:00', 'UTC-03:00', 'UTC-01:00', 'UTC', 'UTC+01:00'],
      flag: 'https://flagcdn.com/dk.svg',
      coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/dk.svg',
    },
    {
      borders: ['BGR', 'HUN', 'MDA', 'SRB', 'UKR'],
      capital: 'Bucharest',
      cca3: 'ROU',
      currency: { name: 'Romanian leu', symbol: 'lei' },
      languages: ['romanian'],
      name: 'Romania',
      population: 19286123,
      region: 'Europe',
      timezones: ['UTC+02:00'],
      flag: 'https://flagcdn.com/ro.svg',
      coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/ro.svg',
    },
    {
      borders: ['BGR', 'HUN', 'MDA', 'SRB', 'UKR'],
      capital: 'Bucharest',
      cca3: 'ROU',
      currency: { name: 'Romanian leu', symbol: 'lei' },
      languages: ['romanian'],
      name: 'Romania',
      population: 19286123,
      region: 'Europe',
      timezones: ['UTC+02:00'],
      flag: 'https://flagcdn.com/ro.svg',
      coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/ro.svg',
    },
    {
      borders: ['BGR', 'HUN', 'MDA', 'SRB', 'UKR'],
      capital: 'Bucharest',
      cca3: 'ROU',
      currency: { name: 'Romanian leu', symbol: 'lei' },
      languages: ['romanian'],
      name: 'Romania',
      population: 19286123,
      region: 'Europe',
      timezones: ['UTC+02:00'],
      flag: 'https://flagcdn.com/ro.svg',
      coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/ro.svg',
    },
    {
      borders: ['BGR', 'HUN', 'MDA', 'SRB', 'UKR'],
      capital: 'Bucharest',
      cca3: 'ROU',
      currency: { name: 'Romanian leu', symbol: 'lei' },
      languages: ['romanian'],
      name: 'Romania',
      population: 19286123,
      region: 'Europe',
      timezones: ['UTC+02:00'],
      flag: 'https://flagcdn.com/ro.svg',
      coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/ro.svg',
    },
  ]);

  const showCountry = (data) => {
    console.log(data.flag, data.coatOfArms);
    setShownCountries((prev) => prev.push(data));
  };

  return (
    <div className={classes.App}>
      <div className={classes.content}>
        <Search showCountry={showCountry} />
        <Countries shownCountries={shownCountries} />
      </div>
      {/* <div className={classes.map} id="map"></div> */}
    </div>
  );
}

export default App;
