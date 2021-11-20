/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useProjectsValue, useSelectedProjectsValue } from '../context';
import { ProjectItem } from './layout/ProjectItem';

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectsValue();
  const { projects } = useProjectsValue();

  const handleSelectProject = (projectId) => {
    setActive(projectId);
    setSelectedProject(projectId);
  };

  return (
    projects &&
    projects.map((project) => {
      return (
        <li
          key={project.projectId}
          data-doc-id={project.docId}
          data-testid="project-action"
          className={
            active === project.projectId
              ? 'active sidebar__project'
              : 'sidebar__project'
          }
          onKeyDown={handleSelectProject.bind(null, project.projectId)}
          onClick={handleSelectProject.bind(null, project.projectId)}
        >
          <ProjectItem project={project} />
        </li>
      );
    })
  );
};
