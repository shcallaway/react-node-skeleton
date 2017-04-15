import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

// Declare routes
const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/test" component={App} />
  </Router>
);

// Render the router
ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
