import React from 'react'

export default function ValuesForm(props){
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange,
    } = props
    console.log(props)

    return(
        <div className = 'values'>
            <form onSubmit={onSubmit}>
                <div>
                    <h3>Choose the top 3 values most important to you</h3>
                </div>
                <div>
                    <h4>List of Values</h4>
                    <div className = 'labelsContainer'>
                    <label>Athletic ability&nbsp;
                        <input type='checkbox'
                               name='athletic'
                               checked={values.athletic}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Art and literature&nbsp;
                        <input type='checkbox'
                               name='art'
                               checked={values.art}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Creativity, discovering, or inventing things to make a difference in the world&nbsp;
                        <input type='checkbox'
                               name='creativity'
                               checked={values.creativity}
                               onChange={onCheckboxChange}
                        />
                    </label>
                    
                    <label>Independence&nbsp;
                        <input type='checkbox'
                               name='independence'
                               checked={values.independence}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Kindness and generosity&nbsp;
                        <input type='checkbox'
                               name='kindness'
                               checked={values.kindness}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Living in the moment&nbsp;
                        <input type='checkbox'
                               name='living'
                               checked={values.living}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Membership in a social group (such as your community, racial group, or school club)&nbsp;
                        <input type='checkbox'
                               name='membership'
                               checked={values.membership}
                               onChange={onCheckboxChange}
                        />
                    </label>                          

                    <label>Music&nbsp;
                        <input type='checkbox'
                               name='music'
                               checked={values.music}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>My community&nbsp;
                        <input type='checkbox'
                               name='community'
                               checked={values.community}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>My moral principles&nbsp;
                        <input type='checkbox'
                               name='moral'
                               checked={values.moral}
                               onChange={onCheckboxChange}
                        />
                    </label>                            

                    <label>Nature and the environment&nbsp;
                        <input type='checkbox'
                               name='nature'
                               checked={values.nature}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Relationships with friends and family&nbsp;
                        <input type='checkbox'
                               name='relationships'
                               checked={values.relationships}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Sense of humor&nbsp;
                        <input type='checkbox'
                               name='humor'
                               checked={values.humor}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Success in my career&nbsp;
                        <input type='checkbox'
                               name='success'
                               checked={values.success}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Other&nbsp;

                        <input type='checkbox'
                               name='other'
                               checked={values.other}
                               onChange={onCheckboxChange}
                        />
                        {/* <input type='text'
                               name='other'
                               placeholder='Type other value here'
                               values={values.other}
                               onChange={onInputChange}
                        />        */}
                    </label>
                </div>
                </div>
                <button disabled={disabled} onSubmit={onSubmit}>Next</button>
            </form>
        </div>
    )
}

