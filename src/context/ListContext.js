import React, { useState } from 'react';

export const ListContext = React.createContext();

const ListProvider = ({ children }) => {
  const defaultList = [
    // { name: 'Element 1', expendable: false },
    // {
    //   name: 'Element 2',
    //   expendable: true,
    //   subList: [{ name: 'Sublisted Name 1' }, { name: 'Sublisted Name 2' }],
    // },
    // { name: 'Element 3', expendable: false },
    // {
    //   name: 'Element 4',
    //   expendable: true,
    //   subList: [],
    // },
    // { name: 'Element 5', expendable: false },
  ];

  const [list, updateList] = useState(defaultList);
  const [popUpVisible, setPopUpVisible] = useState(false);

  const handlePopUpVisibility = () => {
    setPopUpVisible(!popUpVisible);
  };

  const handleAddItem = e => {
    console.log(e);
  };

  const handleRemoveItem = e => {
    const name = e.target.getAttribute('name');
    updateList(list.filter(item => item.name !== name));
  };

  return (
    <ListContext.Provider
      value={{ list, handleRemoveItem, handleAddItem, handlePopUpVisibility }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
