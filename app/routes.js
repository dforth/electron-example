import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import InfoPage from './containers/InfoPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/info" component={InfoPage} />
  </Route>
);
