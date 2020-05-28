import React, { useState, useEffect, useContext } from 'react';
import { useHistory, BrowserRouter as Route, Link } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { FormStateContext } from '../context_API/index';
// import axios from 'axios';

export const LoggedInPage = (props) => {
  // const [loggedInUser, setLoggedInUser] = useState({});
  const history = useHistory();

  const values = useContext(FormStateContext);
  console.log({ values });

  useEffect(() => {
    axiosWithAuth()
      .get('/api/users')
      .then((response) =>
        console.log('response from GET request LOGGEDINPAGE', response)
      )
      .catch((error) =>
        console.log('Error from GET request LOGGEDINPAGE', error)
      );
  }, []);

  return (
    <div className="login">
      <h1>Thank You for Logging In {values.firstname}</h1>
      {/* {values.values.map(value => {
          values.values:true ? <div>Current Choice: {value}</div> : null
      })} */}
      <button className="editBTN" onClick={() => history.push('/optionsList')}>
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
