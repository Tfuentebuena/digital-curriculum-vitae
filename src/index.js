import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './MainPage';
import reportWebVitals from './reportWebVitals';

const JsonData = require('./tobias_data.json');

const root = ReactDOM.createRoot(document.getElementById('MainPage'));
root.render(
  <React.StrictMode>
    <MainPage data={JsonData} />
  </React.StrictMode>
);
reportWebVitals();
