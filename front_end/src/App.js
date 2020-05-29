import React, { useState, useEffect, createContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from 'react-router-dom';
import axios from 'axios';

import { PrivateRoute } from './components/PrivateRoute';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';
import { LoggedInPage } from './components/LoggedInPage';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { FormStateContext } from './context_API';
import ValuesForm from './components/valuesForm';
import SelfReflectionForm from './components/selfReflectionForm';
import { Projects } from './components/Projects';
import { Compare } from './components/Compare';
import { Choices } from './components/Choices';

import * as yup from 'yup';
import formSchema from './validation/formSchema';
import valueSchema from './validation/valueSchema';
import './App.css';

const initialValueState = [
  { athletic: true },
  { art: false },
  { creativity: false },
  { independence: false },
  { kindness: false },
  { living: false },
  { membership: false },
  { music: true },
  { community: false },
  { moral: false },
  { nature: false },
  { relationships: false },
  { humor: false },
  { success: true },
];

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
  const [values, setValues] = useState(initialValues);
  const [reflectionState, setReflectionState] = useState(
    initialReflectionState
  );
  const history = useHistory();

  const postNewValues = (newValues) => {
    axios
      .post('https://essentialism-3.herokuapp.com/api/values', newValues)
      .then((res) => {
        setValues([...values, res.data]);
        console.log(res);
        history.push('/reflections');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setValueState(initialValueState);
      });
  };

  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

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

    Check();

    setValueState({
      ...valueState,
      ...valueState.values,
      [name]: checked,
    });
  };

  function Check() {
    var count = 0;
    var checkBoxes = document.getElementsByTagName('input');
    for (var index = 0; index < checkBoxes.length; index++) {
      if (checkBoxes[index].type == 'checkbox') {
        if (!checkBoxes[index].disabled) {
          count = checkBoxes[index].checked ? count + 1 : count;
        }
      }
    }
    if (count > 3) {
      alert('Must select 3 values');
      return false;
    }
    return true;
  }

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newValues = {
      athletic: values.athletic,
      art: values.art,
      creativity: values.creativity,
      independence: values.independence,
      kindness: values.kindness,
      living: values.living,
      membership: values.membership,
      music: values.music,
      community: values.community,
      moral: values.moral,
      nature: values.nature,
      relationships: values.relationships,
      humor: values.humor,
      success: values.success,
      other: values.other,
    };
    postNewValues(newValues);
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
          <Link className="link" to="/">
            Sign Out
          </Link>

          <Switch>
            {/* <Route path='/ROUTE TO LANDING PAGE IN UI REPO'/>*/}
            <Route exact path="/">
              <h1>Please Log In or Sign Up</h1>
            </Route>
            <Route path="/login" component={LoginForm} setUser={setUser} />
            <Route path="/signUp" component={SignUpForm} setUser={setUser} />

            <PrivateRoute path="/loggedInPage">
              <LoggedInPage setValueState={setValueState} />
            </PrivateRoute>
            <PrivateRoute path="/values">
              <ValuesForm
                values={valueState}
                onInputChange={onInputChange}
                onCheckboxChange={onCheckboxChange}
                onSubmit={onSubmit}
                disabled={disabled}
                errors={formErrors}
              />
            </PrivateRoute>

            <PrivateRoute path="/reflection">
              <SelfReflectionForm
                values={reflectionState}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
                disabled={disabled}
                errors={formErrors}
              />
            </PrivateRoute>
            <PrivateRoute path="/projects">
              <Projects />
            </PrivateRoute>
            <PrivateRoute path="/compare">
              <Compare />
            </PrivateRoute>
            <PrivateRoute path="/choices">
              <Choices />
            </PrivateRoute>
          </Switch>
        </FormStateContext.Provider>
      </Router>
    </div>
  );
}

export default App;
