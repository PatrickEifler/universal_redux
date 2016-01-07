import React     from 'react';
import { Route } from 'react-router';
import AppView from './AppView';
import App from '../containers/App';

export default (
  //<Route name="app-view" component={AppView} path="/"></Route>
  <Route name="app" component={App} path="/"></Route>
);
