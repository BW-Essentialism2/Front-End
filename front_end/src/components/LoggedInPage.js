import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LoggedInPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get('/users')
      .then((response) =>
        console.log('response from GET request LOGGEDINPAGE', response)
      )
      .catch((error) =>
        console.log('Error from GET request LOGGEDINPAGE', error)
      );
  }, [user]);

  return (
    <div className="login">
      <h1>Thank You for Logging In {user.firstname}</h1>
      {/* {user.values.map(value => {
          user.values:true ? <div>Current Choice: {value}</div> : null
      })} */}
      <button className="editBTN" onClick={() => console.log('hello')}>
        Make/Edit Your Choices
      </button>
      <button
        className="deactivateBTN"
        onClick={() => console.log('I am deactivated')}
      >
        De-activate Account
      </button>
    </div>
  );
};
