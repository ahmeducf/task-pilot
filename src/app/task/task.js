import { v4 as uuidv4 } from 'uuid';

const Task = (state = {}) => {
  const id = uuidv4();
  let title = state.title ?? '';
  let description = state.description ?? '';
  let completed = state.completed ?? false;
  let dueDate = state.dueDate ?? null;
  let priority = state.priority ?? 'p4';
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
  };
};

export default Task;
