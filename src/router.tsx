import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { App } from './App';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
};
