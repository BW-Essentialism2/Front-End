import React, {useState, useEffect} from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import ValuesForm from './components/valuesForm'
import SelfReflectionForm from './components/selfReflectionForm'

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

  return (
    <div className="App">
      <ValuesForm
        values = {formState} 
        onInputChange = {onInputChange} 
        onCheckboxChange={onCheckboxChange} 
        onSubmit = {onSubmit} 
        disabled={disabled} 
        errors={formErrors}        
      />

      <SelfReflectionForm
        values = {reflectionState}
        onInputChange = {onInputChange}
        onSubmit = {onSubmit}
      />
    </div>
  );
}
