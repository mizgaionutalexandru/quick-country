import { useState } from 'react';
import classes from './App.module.css';
import Search from './components/Search/Search';
import Countries from './components/Countries/Countries';

function App() {
  const [shownCountries, setShownCountries] = useState([]);

  const showCountry = (data) => {
    setShownCountries((prev) => {
      if (prev.find((country) => country.cca3 === data.cca3)) return prev;
      return [...prev, data];
    });
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
