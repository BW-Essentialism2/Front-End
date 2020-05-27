import React from 'react'

export default function SelfReflectionForm(props){
    const { 
        details, 
        values, 
        onSubmit,
        onInputChange,
        disabled,
        errors 
    } = props

    return (
        <div>
            <p>{details} </p>
            <form onSubmit={onSubmit}>
                <h3>In a few sentences, describe why the selected values are important to you. Focus on your thoughts/feelings, and don’t worry about spelling, grammar, or how well-written it is.</h3>
                <div>{errors.value1}</div>  
                <input type='text'
                       name='value1'
                       placeholder='Type response here'
                       values={values.value1}
                       onChange={onInputChange}
                />

                <h3>In a few sentences, describe why the selected values are important to you. Focus on your thoughts/feelings, and don’t worry about spelling, grammar, or how well-written it is.</h3>
                <div>{errors.value2}</div>
                <input type='text'
                       name='value2'
                       placeholder='Type response here'
                       values={values.value2}
                       onChange={onInputChange}
                />

                <h3>In a few sentences, describe why the selected values are important to you. Focus on your thoughts/feelings, and don’t worry about spelling, grammar, or how well-written it is.</h3>
                <div>{errors.value3}</div>
                <input type='text'
                       name='value3'
                       placeholder='Type response here'
                       values={values.value3}
                       onChange={onInputChange}
                />         
            </form>
            <button disabled={disabled}>Next</button>
        </div>
    )
}