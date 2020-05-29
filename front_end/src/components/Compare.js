import React from 'react';
import { useHistory } from 'react-router-dom';

import { AddedItemList } from './AddedItemList';
import { Choices } from './Choices';

export const Compare = () => {
  const history = useHistory();
  return (
    <div className="login">
      <h1>
        Take a Moment to Reflect and Compare what you need and what you
        don't...then Declutter Your Life!
      </h1>
      <Choices />
      {/* <AddedItemList /> */}
      <button onSubmit={() => history.pushState('/loggedInPage')}>
        Finish
      </button>
    </div>
  );
};
