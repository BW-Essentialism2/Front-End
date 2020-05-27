import React, {useState, useEffect} from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import ValuesForm from './components/valuesForm'
import SelfReflectionForm from './components/selfReflectionForm'
import * as yup from 'yup'
import formSchema from './validation/formSchema'

const initialFormState = {
  values: {
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
  }
}

const initialReflectionState = {
  value1: '',
  value2: '',
  value3: '',
}

const initialFormErrors = {
    values: {
    athletic:'',
    art:'',
    creativity:'',
    independence: '',
    kindness: '',
    living:'',
    membership: '',
    music: '',
    community: '',
    moral: '',
    nature: '',
    relationships: '',
    humor: '',
    success: '',
    other: '',
  }
}

const initialValues = []
const initialDisabled = true

export default function App() {
  const [formState, setFormState] = useState(initialFormState)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [values, setValues] = useState(initialValues)
  const [reflectionState, setReflectionState] = useState(initialReflectionState)

  const onInputChange= evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });    
    setFormState({
      ...formState,
      [name]: value
    })
    setReflectionState({
    ...reflectionState,
      [name]: value
  })  
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target
    setFormState({
      ...formState,
      values: {
        ...formState.values,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
  }

  useEffect(() => {
    formSchema.isValid(reflectionState)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [reflectionState])  

  return (
    <div className="App">
      <nav>
        <Link to ='/values'>Values Selection</Link>
        <Link to ='/reflection'>Self Reflection</Link>
      </nav>
      <Switch>
        <Route path = '/values'>
          <ValuesForm
            values = {formState} 
            onInputChange = {onInputChange} 
            onCheckboxChange={onCheckboxChange} 
            onSubmit = {onSubmit} 
            disabled={disabled} 
            errors={formErrors}        
          />
        </Route>
        <Route path ='/reflection'>
          <SelfReflectionForm
            values = {reflectionState}
            onInputChange = {onInputChange}
            onSubmit = {onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
      </Switch>
    </div>
  );
}
