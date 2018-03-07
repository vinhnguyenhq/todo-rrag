import * as React from 'react';
import { Header, About, MembersPage } from './components';
import './App.css';
import { Route, Link } from 'react-router-dom';

export const App: React.SFC<{}> = props => {
  return (
    <div className="container-fluid">
      <Header />

      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
      </ul>

      <Route exact={true} path="/about" component={About} />
      <Route path="/members" component={MembersPage} />

      {props.children}
    </div>
  );
};

export default App;
