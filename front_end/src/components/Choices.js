import React, { useContext } from 'react';

import { FormStateContext } from '../context_API/index';

export const Choices = () => {
  const values = useContext(FormStateContext);
  console.log('values in choices', values);

  console.log(Object.keys(values))

  return (
    <div>
      {/* {values.map((value) => {
        if (value.athletic) {
          return <h4>{'hello'}</h4>;
        } else {
          return null;
        }
      })}
      {values.map((value) => {
        if (value.kindness) {
          return <h4>{'hello'}</h4>;
        } else {
          return null;
        }
      })} */}

      {Object.keys(values).filter(choice => values === true)

      }

      {/* {Object.keys(values).map((choice)=> {
        return (choice)
      })} */}

    </div>
  );
};
