import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/loggedInPage">My Progress Page</Link>
          </li>
          <li>
            <Link to={/*'/ROUTE TO LANDING PAGE IN UI REPO'*/}>Log Out</Link>{' '}
            {/*MAY WANT TO HAVE AN ALERT THAT SAYS SUCCESSFULLY LOGGED OUT!!! */}
          </li>
        </ul>
        <Switch>
          {/* <Route path='/ROUTE TO LANDING PAGE IN UI REPO'/>*/}
          <Route path="/login" component={LoginForm} />
          <Route path="/signUp" component={SignUpForm} />
          <PrivateRoute path="/loggedInPage" component={LoggedInPage} />
          <PrivateRoute path="/checkList" component={CheckList} />
          <PrivateRoute path="/dailySelfRating" component={DailySelfRating} />
          <PrivateRoute path="/dailyProgress" component={DailyProgress} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
