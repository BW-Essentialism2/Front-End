import React, { useState } from 'react';

export const AddItem = (props) => {
  const [addItem, setAddItem] = useState({});
  console.log({ addItem });

  const handleChange = (event) => {
    setAddItem({ task: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addToDo(addItem);
    setAddItem({ task: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Your Projects:
        <input
          type="text"
          name="task"
          value={addItem.task || ''}
          onChange={handleChange}
        />
      </label>
      <button>Add</button>
    </form>
  );
};
