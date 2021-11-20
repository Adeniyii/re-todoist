/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { firebase } from '../../firebase';
import { useProjectsValue, useSelectedProjectsValue } from '../../context';

export const ProjectItem = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectsValue();

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      });
  };

  const handleShowConfirm = () => {
    setShowConfirm((prev) => !prev);
  };

  const handleDeleteProject = () => {
    deleteProject(project.docId);
  };

  return (
    <>
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={handleShowConfirm}
        role="alert"
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal-inner">
              <p>Are you sure you want to delete this project?</p>
              <button type="button" onClick={handleDeleteProject}>
                Delete
                <span onClick={handleShowConfirm} role="alertdialog">
                  Cancel
                </span>
              </button>
            </div>
          </div>
        )}
      </span>
    </>
  );
};
