import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import Redux and Redux Saga

// import Router
import { BrowserRouter } from "react-router-dom";

// import Scss
import "./assets/scss/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
