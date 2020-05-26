import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';
import { LoggedInPage } from './components/LoggedInPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link className="link" to="/login">
          Log In
        </Link>
        <Link className="link" to="/signUp">
          Sign Up
        </Link>

        <Switch>
          {/* <Route path='/ROUTE TO LANDING PAGE IN UI REPO'/>*/}
          <Route path="/login" component={LoginForm} />
          <Route path="/signUp" component={SignUpForm} />
          <PrivateRoute path="/loggedInPage" component={LoggedInPage} />
          {/* <PrivateRoute path="/checkList" component={CheckList} /> */}
          {/* <PrivateRoute path="/dailySelfRating" component={DailySelfRating} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
