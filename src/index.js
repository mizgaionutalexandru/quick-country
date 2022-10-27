import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CountryContextProvider } from './store/country-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CountryContextProvider>
    <App />
  </CountryContextProvider>
);
