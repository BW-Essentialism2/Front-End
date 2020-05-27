import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';
import { LoggedInPage } from './components/LoggedInPage';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { FormStateContext } from './context_API';

import './App.css';

function App() {
  const [user, setUser] = useState({});

  //need Axios.get call and pass down state as props ---CONTEXT API??????
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get('/users')
  //     .then((response) =>
  //       console.log('response from GET request LOGGEDINPAGE', response)
  //     )
  //     .catch((error) =>
  //       console.log('Error from GET request LOGGEDINPAGE', error)
  //     );
  // }, []);

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
          <FormStateContext.Provider value={valueState}>
            {/* <Route path='/ROUTE TO LANDING PAGE IN UI REPO'/>*/}
            <Route path="/login" component={LoginForm} setUser={setUser} />
            <Route path="/signUp" component={SignUpForm} setUser={setUser} />
            <PrivateRoute
              path="/loggedInPage"
              component={LoggedInPage}
              user={user}
            />
            {/* <PrivateRoute path="/checkList" component={CheckList} /> */}
            {/* <PrivateRoute path="/dailySelfRating" component={DailySelfRating} /> */}
          </FormStateContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
