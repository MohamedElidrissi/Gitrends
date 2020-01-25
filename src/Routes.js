import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './pages/NotFound';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Home</h1>} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
