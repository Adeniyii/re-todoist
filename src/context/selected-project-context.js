/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

export const SelectedProjectContext = createContext({
  selectedProject: [],
  setSelectedProject: () => {},
});

export const SelectedProjectProvider = ({ children }) => {
  const { selectedProject, setSelectedProject } = useState('INBOX');
  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectsValue = () =>
  useContext(SelectedProjectContext);
