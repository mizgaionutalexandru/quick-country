import { useState, useEffect } from 'react';
import classes from './App.module.css';
import Search from './components/Search/Search';
import Countries from './components/Countries/Countries';

function App() {
  const [shownCountries, setShownCountries] = useState([]);

  const showCountry = (data) => {
    setShownCountries((prev) => {
      if (prev.find((country) => country.cca3 === data.cca3)) return prev;
      return [data, ...prev];
    });
  };

  const updateSaveCountry = (key) => {
    setShownCountries((prev) => {
      return prev.map((country) => {
        if (country.cca3 === key) country.isSaved = !country.isSaved;
        return country;
      });
    });
  };

  return (
    <div className={classes.App}>
      <div className={classes.content}>
        <Search showCountry={showCountry} />
        <Countries
          shownCountries={shownCountries}
          updateSave={updateSaveCountry}
        />
      </div>
      {/* <div className={classes.map} id="map"></div> */}
    </div>
  );
}

export default App;
