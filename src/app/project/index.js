// This code creates a project object with title, color, tasks, and favorite properties.
// The project object also has functions to get and set the different properties.
// The project object has a function to add and remove tasks from the tasks array.
// The project object has a function to toggle the favorite property.
// The project object has a view object to hold the layout and sort properties.
// The project object has a function to get and set the view object.
// The project object has a toJSON method to return a JSON object of the project.

import { v4 as uuidv4 } from 'uuid';
import { COLOR } from '../constants';
import View from './view';

const Project = (state = {}) => {
  const id = uuidv4();
  let title = state.title ?? '';
  let color = state.color ?? COLOR.GREY;
  let tasks = state.tasks ?? [];
  let favorite = state.favorite ?? false;
  const view = View(state.view);

  const getId = () => id;

  const getTitle = () => title;

  const setTitle = (projectTitle) => {
    title = projectTitle;
  };

  const getColor = () => color;

  const setColor = (projectColor) => {
    color = projectColor;
  };

  const getTasks = () => tasks;

  const addTask = (task) => {
    tasks.push(task);
  };

  const removeTask = (task) => {
    tasks = tasks.filter((t) => t.getId() !== task.getId());
  };

  const updateTask = (task) => {
    const index = tasks.findIndex((t) => t.getId() === task.getId());

    tasks[index] = task;
  };

  const isFavorite = () => favorite;

  const toggleFavorite = () => {
    favorite = !favorite;
  };

  const getView = () => view;

  const setView = (newView) => {
    view.setLayout(newView.layout);
    view.setSort(newView.sort);
  };

  const toJSON = () => ({
    id,
    title,
    color,
    favorite,
    tasks: tasks.map((task) => task.toJSON()),
    view: view.toJSON(),
  });

  return {
    getId,
    getTitle,
    setTitle,
    getColor,
    setColor,
    getTasks,
    addTask,
    removeTask,
    updateTask,
    isFavorite,
    toggleFavorite,
    getView,
    setView,
    toJSON,
  };
};

export default Project;
