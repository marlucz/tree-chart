import React, { useState } from 'react';

export const ListContext = React.createContext();

const ListProvider = ({ children }) => {
  const [list, updateList] = useState([]);
};
