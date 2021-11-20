import moment from 'moment';
import { useEffect, useState } from 'react';
import { firebase } from '../firebase';
import { collatedTasksExists } from '../helpers';

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'lagbaja');

    if (selectedProject && !collatedTasksExists(selectedProject)) {
      unsubscribe = unsubscribe.where('projectId', '==', selectedProject);
    } else if (selectedProject === 'TODAY') {
      unsubscribe = unsubscribe.where(
        'date',
        '==',
        moment().format('DD/MM/YYYY')
      );
    } else if (selectedProject === 'INBOX' || selectedProject === 0) {
      unsubscribe = unsubscribe.where('date', '==', '');
    }

    // Grab queried data
    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      // Set task if task isn't past 7 days || !archived
      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter((newTask) =>
              moment(newTask.date, 'DD-MM-YYYY').diff(moment(), 'days')
            )
          : newTasks.filter((newTask) => newTask.archived !== true)
      );

      setArchivedTasks(
        newTasks.filter((newTask) => newTask.archived !== false)
      );
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'lagbaja')
      .orderBy('projectId')
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
