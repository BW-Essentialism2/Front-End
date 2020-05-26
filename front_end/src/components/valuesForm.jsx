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

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <h2>Choose the top 3 values most important to you</h2>
                </div>
                <div>
                    <h3>List of Values</h3>
                    <label>Athletic ability&nbsp;
                        <input type='checkbox'
                               name='athletic'
                               checked={values.values.athletic}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Art and literature&nbsp;
                        <input type='checkbox'
                               name='art'
                               checked={values.values.art}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Creativity, discovering, or inventing things to make a difference in the world&nbsp;
                        <input type='checkbox'
                               name='creativity'
                               checked={values.values.creativity}
                               onChange={onCheckboxChange}
                        />
                    </label>
                    
                    <label>Independence&nbsp;
                        <input type='checkbox'
                               name='independence'
                               checked={values.values.independence}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Kindness and generosity&nbsp;
                        <input type='checkbox'
                               name='kindness'
                               checked={values.values.kindness}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Living in the moment&nbsp;
                        <input type='checkbox'
                               name='living'
                               checked={values.values.living}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Membership in a social group (such as your community, racial group, or school club)&nbsp;
                        <input type='checkbox'
                               name='membership'
                               checked={values.values.membership}
                               onChange={onCheckboxChange}
                        />
                    </label>                          

                    <label>Music&nbsp;
                        <input type='checkbox'
                               name='athletic'
                               checked={values.values.athletic}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>My community&nbsp;
                        <input type='checkbox'
                               name='community'
                               checked={values.values.community}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>My moral principles&nbsp;
                        <input type='checkbox'
                               name='moral'
                               checked={values.values.moral}
                               onChange={onCheckboxChange}
                        />
                    </label>                            

                    <label>Nature and the environment&nbsp;
                        <input type='checkbox'
                               name='nature'
                               checked={values.values.nature}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Relationships with friends and family&nbsp;
                        <input type='checkbox'
                               name='relationships'
                               checked={values.values.relationships}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Sense of humor&nbsp;
                        <input type='checkbox'
                               name='humor'
                               checked={values.values.humor}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Success in my career&nbsp;
                        <input type='checkbox'
                               name='success'
                               checked={values.values.success}
                               onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Other&nbsp;
                        <input type='text'
                               name='other'
                               placeholder='Type other value here'
                               values={values.values.other}
                               onChange={onInputChange}
                        />
                    </label>

                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

