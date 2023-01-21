import { useState, useEffect } from 'react';
import classes from './App.module.css';
import Search from './components/Search/Search';
import Countries from './components/Countries/Countries';

const localKEY = `OIucO*Klxm3ev=c3iA~#sla+N?FR$'3E,A:T+"Dga_y<\`<~dZu2S]T,wRxj6Z9l`;

function App() {
  const [shownCountries, setShownCountries] = useState([]);

  useEffect(() => {
    // Load the saved countries from local storage
    let savedCountries = JSON.parse(localStorage.getItem(localKEY));
    if (!savedCountries) savedCountries = [];
    setShownCountries(savedCountries);
  }, []);

  useEffect(() => {
    // Save saved countries to local storage
    const savedCountries = shownCountries.filter((country) => country.isSaved);
    localStorage.setItem(localKEY, JSON.stringify(savedCountries));
  }, [shownCountries]);

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
