import React, {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { FormStateContext } from '../context_API/index';


export default function ValuesForm(props){
    const {
        // values,
        onSubmit,
        disabled,
        onCheckboxChange,
    } = props
    // console.log(props)

    const [loggedValues, setLoggedValues] = useState({});

    const history = useHistory()
    const values = useContext(FormStateContext);
    console.log({ values });

    useEffect(()=>{
    axiosWithAuth()
    .get('/api/values')
    .then((response)=>{
      console.log('response from GET VALUES request VALUESFORM', response.data);
      response.data.map((item) => {
          setLoggedValues({
            id: item.id,
            name: item.name,
            
          })
      })   
    })
    .catch((error) => {
        console.log('Error from GET VALUES request VALUESFORM', error)
    })
  },[]);

    return(
        <div className = 'values'>
            <form onSubmit={onSubmit} >
                <div>
                    <h3>List of Values</h3>
                </div>
                <div>
                    <h4>Choose your top 3</h4>
                    <p>Please note that you will not be able to submit if the number of values selected is not equal to 3</p>
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

                    <label>Creativity, discovering, or inventing things&nbsp;
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
                    <label>Membership in a social group&nbsp;
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
                    </label>
                </div>
                </div>
                <button disabled={disabled}
                onClick={() => history.push('/reflection')}>Next</button>
            </form>
        </div>
    )
}


