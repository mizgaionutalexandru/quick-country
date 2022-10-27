import React from 'react';

const CountryContext = React.createContext({
  shownCountries: [],
  showCountry: () => {},
});

export const CountryContextProvider = ({ children }) => {
  const showCountryHandler = () => {};

  return (
    <CountryContext.Provider
      value={{
        shownCountries: [],
        showCountry: showCountryHandler,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
