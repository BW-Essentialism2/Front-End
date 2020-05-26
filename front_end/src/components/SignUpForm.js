import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const SignUpForm = () => {
  const [signUpInput, setSignUpInput] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpInput({ ...signUpInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        'https://essentialism-3.herokuapp.com/api/auth/register',
        signUpInput
      )
      .then((response) => {
        console.log('response from POST request in SIGNUP form', response);
        localStorage.setItem('token', response.data.token);
        history.push('/loggedInPage');
      })
      .catch((error) => console.log('Error from POST in SIGNUP form', error));
    setSignUpInput({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    });
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Please Sign Up Here</h1>
      <label>
        Enter First Name:
        <input
          type="text"
          name="firstname"
          placeholder="Enter First Name Here"
          value={signUpInput.firstname || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Last Name:
        <input
          type="text"
          name="lastname"
          placeholder="Enter Last Name Here"
          value={signUpInput.lastname || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Email Here:
        <input
          type="text"
          name="email"
          placeholder="Enter Email Here"
          value={signUpInput.email || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Password Here:
        <input
          type="password"
          name="password"
          placeholder="Enter Password Here"
          value={signUpInput.password || ''}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};
