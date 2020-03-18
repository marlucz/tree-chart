import React, { useState } from 'react';

export const ListContext = React.createContext();

const ListProvider = ({ children }) => {
  const [list, updateList] = useState([]);
  const [popUpVisible, setPopUpVisible] = useState(false);

  const handlePopUpVisibility = () => {
    setPopUpVisible(!popUpVisible);
  };

  const handleAddElement = element => {
    updateList(list.concat(element));
  };

  const handleRemoveItem = e => {
    const name = e.target.getAttribute('name');
    updateList(list.filter(item => item.name !== name));
  };

  return (
    <ListContext.Provider
      value={{
        list,
        popUpVisible,
        handleRemoveItem,
        handleAddElement,
        handlePopUpVisibility,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
