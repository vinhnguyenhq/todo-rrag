import * as React from 'react';
import { Header, About, MembersPage } from './components';
import './App.css';
import { Route } from 'react-router-dom';

export const App: React.SFC<{}> = props => {
  return (
    <div className="container-fluid">
      <Header />

      <Route exact={true} path="/about" component={About} />
      <Route path="/members" component={MembersPage} />

      {props.children}
    </div>
  );
};

export default App;
