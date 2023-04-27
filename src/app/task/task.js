// This file contains the Task factory function, which represents a task in a to-do list.

import { v4 as uuidv4 } from 'uuid';
import { PRIORITY } from '../constants';

const Task = (state = {}) => {
  const id = uuidv4();
  let title = state.title ?? '';
  let description = state.description ?? '';
  let completed = state.completed ?? false;
  let dueDate = state.dueDate ?? null;
  let priority = state.priority ?? PRIORITY.P4;
  let labels = state.labels ?? [];
  let projectID = state.projectID ?? null;

  const getId = () => id;

  const getTitle = () => title;

  const setTitle = (taskTitle) => {
    title = taskTitle;
  };

  const getDescription = () => description;

  const setDescription = (taskDescription) => {
    description = taskDescription;
  };

  const isCompleted = () => completed;

  const toggleCompleted = () => {
    completed = !completed;
  };

  const getDueDate = () => dueDate;

  const setDueDate = (taskDueDate) => {
    dueDate = taskDueDate;
  };

  const getPriority = () => priority;

  const setPriority = (taskPriority) => {
    priority = taskPriority;
  };

  const getLabels = () => labels;

  const setLabels = (taskLabels) => {
    labels = taskLabels;
  };

  const addLabel = (taskLabel) => {
    labels.push(taskLabel);
  };

  const removeLabel = (taskLabel) => {
    labels = labels.filter((label) => label !== taskLabel);
  };

  const getProjectID = () => projectID;

  const setProjectID = (taskProjectID) => {
    projectID = taskProjectID;
  };

  /* Returns a JSON representation of the task. */
  const toJSON = () => ({
    id,
    title,
    description,
    completed,
    dueDate,
    priority,
    labels,
    projectID,
  });

  return {
    getId,
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    isCompleted,
    toggleCompleted,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    getProjectID,
    setProjectID,
    getLabels,
    setLabels,
    addLabel,
    removeLabel,
    toJSON,
  };
};

export default Task;
