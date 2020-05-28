import React from 'react'
import {useHistory} from 'react-router-dom'

export default function SelfReflectionForm(props){
    const { 
        values, 
        onSubmit,
        onInputChange,
        disabled,
        errors 
    } = props

    const history = useHistory()

    return (
        <div className = 'reflection'>
            <h4>In a few sentences, describe why the selected values are important to you. Focus on your thoughts/feelings, and don’t worry about spelling, grammar, or how well-written it is.</h4>
            <form onSubmit={onSubmit}>
                <div>{errors.value1}</div>
                <input 
                    type='text'
                    name='value1'
                    placeholder='Type response here'
                    values={values.value1}
                    onChange={onInputChange}
                />
                <div>{errors.value2}</div>
                <input 
                    type='text'
                    name='value2'
                    placeholder='Type response here'
                    values={values.value2}
                    onChange={onInputChange}
                />
                <div>{errors.value3}</div>
                <input 
                    type='text'
                    name='value3'
                    placeholder='Type response here'
                    values={values.value3}
                    onChange={onInputChange}
                />         
            </form>
            <button disabled={disabled} onClick={()=> history.push('/loggedInPage')}>Next</button>
        </div>
    )
}