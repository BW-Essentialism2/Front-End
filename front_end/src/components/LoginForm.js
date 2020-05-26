import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const LoginForm = () => {
  const [loginInput, setLoginInput] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setLoginInput({ ...loginInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://essentialism-3.herokuapp.com/api/auth/login', loginInput)
      .then((response) => {
        console.log('response from POST request in LOGIN form', response);
        localStorage.setItem('token', response.data.token);
        history.push('/loggedInPage');
      })
      .catch((error) => console.log('Error from POST in LOGIN form', error));
    setLoginInput({ email: '', password: '' });
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Please Log In Here</h1>
      <label>
        Enter Email Here:
        <input
          type="text"
          name="email"
          placeholder="Enter Email Here"
          value={loginInput.email || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Password Here:
        <input
          type="password"
          name="password"
          placeholder="Enter Password Here"
          value={loginInput.password || ''}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
