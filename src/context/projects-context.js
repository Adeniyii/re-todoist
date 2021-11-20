/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import { useProject } from '../hooks';

export const ProjectContext = createContext({
  projects: [],
  setProjects: () => {},
});

export const ProjectProvider = ({ children }) => {
  const { projects, setProjects } = useProject();
  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectsValue = () => useContext(ProjectContext);
