// React
import React from 'react';
import ReactDOM from 'react-dom';

// React-Router
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './App';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/test" component={App} />
  </Router>
);

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
