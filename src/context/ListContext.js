import React, { useState } from 'react';

export const ListContext = React.createContext();

const ListProvider = ({ children }) => {
  const [list, updateList] = useState([]);
  const [mainElement, setMainElement] = useState('');
  const [popUpVisible, setPopUpVisible] = useState(false);

  const handlePopUpVisibility = () => {
    setPopUpVisible(!popUpVisible);
  };

  const handleAddMainElement = element => {
    updateList(list.concat(element));
  };

  const handleAddSubElement = childrenElement => {
    updateList(list => {
      const listCopy = [...list];
      const indexOfName = listCopy.findIndex(item => item.name === mainElement);

      listCopy[indexOfName] = {
        ...listCopy[indexOfName],
        subList: [...list[indexOfName].subList, childrenElement],
      };

      return listCopy;
    });

    setMainElement('');
  };

  const handleRemoveMainItem = name => {
    updateList(list.filter(item => item.name !== name));
  };

  const handleRemoveSubItem = (name, parentName) => {
    updateList(list => {
      const listCopy = [...list];
      const indexOfName = listCopy.findIndex(item => item.name === parentName);

      listCopy[indexOfName] = {
        ...listCopy[indexOfName],
        subList: list[indexOfName].subList.filter(item => item.name !== name),
      };

      return listCopy;
    });
  };

  return (
    <ListContext.Provider
      value={{
        list,
        popUpVisible,
        mainElement,
        setMainElement,
        handleRemoveMainItem,
        handleRemoveSubItem,
        handleAddMainElement,
        handleAddSubElement,
        handlePopUpVisibility,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
