import React from 'react';

export const AddedItemList = (props) => {
  console.log('props in addeditemlist', props);

  return (
    <div>
      {props.itemList.map((item) => {
        return <li>{item.task}</li>;
      })}
    </div>
  );
};
