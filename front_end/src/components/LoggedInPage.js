import React, { useState, useEffect, useContext } from 'react';
import { useHistory, BrowserRouter as Route, Link } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import { FormStateContext } from '../context_API/index';

export const LoggedInPage = (props) => {
  console.log('this is props', props);
  const [loggedInUser, setLoggedInUser] = useState({});
  // console.log({ loggedInUser });
  const history = useHistory();

  const values = useContext(FormStateContext);
  // console.log({ values });

  useEffect(() => {
    axiosWithAuth()
      .get('/api/users')
      .then((response) => {
        console.log('response from GET USERS request LOGGEDINPAGE', response);
        response.data.map((person) => {
          setLoggedInUser({
            id: person.id,
            firstname: person.firstname,
            lastname: person.lastname,
            email: person.email,
          });
        });
      })
      .catch((error) =>
        console.log('Error from GET USERS request LOGGEDINPAGE', error)
      );
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/values')
      .then((response) => {
        console.log('response from GET VALUES request LOGGEDINPAGE', response);
        // response.data.map((value) => {
        //   props.setValueState({
        //     id: value.id,
        //     value: value.is_set_to
        //   });
        // });
      })
      .catch((error) =>
        console.log('Error from GET VALUES request LOGGEDINPAGE', error)
      );
  }, []);

  // useEffect(() => {
  //   axiosWithAuth()
  //     .delete(`/api/delete/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log('Error with DELETE ', error));
  // });

  return (
    <div className="login">
      <h1>{`Thank You for Logging In ${loggedInUser.firstname}`}</h1>
      {/* {values.values.map((value) => {
        if (values.values) {
          return <div>Current Choice: {value}</div>;
        } else {
          return null;
        }
      })} */}
      <button className="editBTN" onClick={() => history.push('/values')}>
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
