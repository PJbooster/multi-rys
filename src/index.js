import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import'./i18n/config';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
    ? ``
    : `${process.env.REACT_APP_URL}`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
