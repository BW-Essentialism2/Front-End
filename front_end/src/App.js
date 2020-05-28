import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';
import { LoggedInPage } from './components/LoggedInPage';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { FormStateContext } from './context_API';
import ValuesForm from './components/valuesForm';
import SelfReflectionForm from './components/selfReflectionForm';

import * as yup from 'yup';
import formSchema from './validation/formSchema';
import valueSchema from './validation/valueSchema';
import './App.css';

const initialValueState = {
  athletic: false,
  art: false,
  creativity: false,
  independence: false,
  kindness: false,
  living: false,
  membership: false,
  music: false,
  community: false,
  moral: false,
  nature: false,
  relationships: false,
  humor: false,
  success: false,
  other: false,
};

const initialReflectionState = {
  value1: '',
  value2: '',
  value3: '',
};

const initialFormErrors = {
  athletic: '',
  art: '',
  creativity: '',
  independence: '',
  kindness: '',
  living: '',
  membership: '',
  music: '',
  community: '',
  moral: '',
  nature: '',
  relationships: '',
  humor: '',
  success: '',
  other: '',
};

const initialValues = [];
const initialDisabled = true;

function App() {
  const [user, setUser] = useState({});
  const [valueState, setValueState] = useState(initialValueState);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  // const [values, setValues] = useState(initialValues)
  const [reflectionState, setReflectionState] = useState(
    initialReflectionState
  );

  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    // yup
    //   .reach(valueSchema, name)
    //   .validate(value)
    //   .then(valid => {
    //      setFormErrors({
    //        ...formErrors,
    //        [name]: ''
    //      });
    //    })
    //   .catch(err => {
    //      setFormErrors({
    //        ...formErrors,
    //        [name]: err.errors[0]
    //      });
    //    })

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setValueState({
      ...valueState,
      [name]: value,
    });
    setReflectionState({
      ...reflectionState,
      [name]: value,
    });
  };

  const onCheckboxChange = (evt) => {
    const { name } = evt.target;
    const { checked } = evt.target;

    setValueState({
      ...valueState,
      ...valueState.values,
      [name]: checked,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  useEffect(() => {
    valueSchema.isValid(valueState).then((valid) => {
      setDisabled(!valid);
    });
  }, [valueState]);

  useEffect(() => {
    formSchema.isValid(reflectionState).then((valid) => {
      setDisabled(!valid);
    });
  }, [reflectionState]);

  return (
    <div className="App">
      <Router>
        <FormStateContext.Provider value={valueState}>
          <Link className="link" to="/login">
            Log In
          </Link>
          <Link className="link" to="/signUp">
            Sign Up
          </Link>
          {/* <h1>Please Log In or Sign Up</h1> */}

          <Switch>
            {/* <Route path='/ROUTE TO LANDING PAGE IN UI REPO'/>*/}
            <Route path="/login" component={LoginForm} setUser={setUser} />
            <Route path="/signUp" component={SignUpForm} setUser={setUser} />

            <PrivateRoute
              path="/loggedInPage"
              component={LoggedInPage}
              setValueState={setValueState}
            />
            <PrivateRoute
              path="/values"
              component={ValuesForm}
              values={valueState}
              onInputChange={onInputChange}
              onCheckboxChange={onCheckboxChange}
              onSubmit={onSubmit}
              disabled={disabled}
              errors={formErrors}
            />

            <PrivateRoute
              path="/reflection"
              component={SelfReflectionForm}
              values={reflectionState}
              onInputChange={onInputChange}
              onSubmit={onSubmit}
              disabled={disabled}
              errors={formErrors}
            />
          </Switch>
        </FormStateContext.Provider>
      </Router>
    </div>
  );
}

export default App;
