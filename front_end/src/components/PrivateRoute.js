import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={() => {
        token ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
};

//Redirect may want to redirect to Landing page????????????
//Do I use LOCALSTORAGE.GETITEM or some other storage???????????
