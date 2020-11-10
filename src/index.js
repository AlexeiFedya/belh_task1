import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ErrorBoundry from './components/error-boundry/error-boundry'
import App from './components/app/App';


ReactDOM.render(
  <React.Fragment>
    <ErrorBoundry>
      <Router>
        <App />
      </Router>
    </ErrorBoundry>
  </React.Fragment>,
  document.getElementById('root')
);

