import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AddItem } from './AddItem';
import { AddedItemList } from './AddedItemList';

const list = [{ task: 'Buy House' }];

export const Projects = () => {
  const [itemList, setItemList] = useState(list);
  const history = useHistory();

  const addToDo = (itemName) => {
    setItemList([...itemList, { task: itemName }]);
  };

  return (
    <div className="login">
      <h1>Add ALL Projects you are working on currently.</h1>
      <p>
        No matter how small or if they apply to the choices you've just
        picked...LIST THEM ANYWAYS!
      </p>
      <AddItem addToDo={addToDo} />
      <AddedItemList itemList={itemList} />
      <button onClick={() => history.push('/compare')}>Next</button>
    </div>
  );
};
