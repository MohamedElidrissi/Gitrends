import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './pages/NotFound';
import ReposList from './components/ReposList';
import ReposProvider from './context/repos/ReposContext';

export default () => (
  <ReposProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ReposList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </ReposProvider>
);
