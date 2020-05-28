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
            <h3>In a few sentences, describe why the selected values are important to you. Focus on your thoughts/feelings, and don’t worry about spelling, grammar, or how well-written it is.</h3>
            <form onSubmit={onSubmit}>
                <div>{errors.value1}</div>
                <input className = 'reflection'
                    type='text'
                    name='value1'
                    placeholder='Type response here'
                    values={values.value1}
                    onChange={onInputChange}
                />
                <div>{errors.value2}</div>
                <input className = 'reflection'
                    type='text'
                    name='value2'
                    placeholder='Type response here'
                    values={values.value2}
                    onChange={onInputChange}
                />
                <div>{errors.value3}</div>
                <input className = 'reflection'
                    type='text'
                    name='value3'
                    placeholder='Type response here'
                    values={values.value3}
                    onChange={onInputChange}
                />         
            </form>
            <button disabled={disabled} onSubmit={onSubmit}>Next</button>
        </div>
    )
}