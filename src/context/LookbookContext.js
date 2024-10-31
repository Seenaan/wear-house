import React, { createContext, useState, useEffect } from 'react';

export const LookbookContext = createContext();

export const LookbookProvider = ({ children }) => {
  const [lookbooks, setLookbooks] = useState(() => {
    const savedLookbooks = localStorage.getItem('lookbooks');
    return savedLookbooks ? JSON.parse(savedLookbooks) : [];
  });

  useEffect(() => {
    localStorage.setItem('lookbooks', JSON.stringify(lookbooks));
  }, [lookbooks]);

  const handleAddLookbook = (newLookbook) => {
    setLookbooks((prevLookbooks) => [...prevLookbooks, newLookbook]);
  };

  const handleDeleteLookbook = (id) => {
    setLookbooks((prevLookbooks) => prevLookbooks.filter((lookbook) => lookbook.id !== id));
  };

  return (
    <LookbookContext.Provider value={{ lookbooks, handleAddLookbook, handleDeleteLookbook }}>
      {children}
    </LookbookContext.Provider>
  );
};
