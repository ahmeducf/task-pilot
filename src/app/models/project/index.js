// This code creates a project object with title, color, tasks, and favorite properties.
// The project object also has functions to get and set the different properties.
// The project object has a function to add and remove tasks from the tasks array.
// The project object has a function to toggle the favorite property.
// The project object has a view object to hold the layout and sort properties.
// The project object has a function to get and set the view object.
// The project object has a toJSON method to return a JSON object of the project.

import { v4 as uuidv4 } from 'uuid';
import { COLOR } from '../../constants';
import View from './view';
import Task from '../task';

const Project = (state = {}) => {
  const id = state.id ?? uuidv4();
  let title = state.title ?? '';
  let color = state.color ?? COLOR.GREY;
  let favorite = state.favorite ?? false;
  let showCompleted = state.showCompleted ?? false;
  const view = View(state.view);
  let tasks;
  if (!state.tasks) {
    tasks = [];
  } else {
    tasks = state.tasks.map((task) => Task(task));
  }

  const getId = () => id;

  const getTitle = () => title;

  const setTitle = (projectTitle) => {
    title = projectTitle;
  };

  const getColor = () => color;

  const setColor = (projectColor) => {
    color = projectColor;
  };

  const getUnCompletedTasks = () => tasks.filter((task) => !task.isCompleted());

  const getAllTasks = () => tasks;

  const getTasksCount = () =>
    tasks.filter((task) => !task.isCompleted()).length;

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

  const isShowCompleted = () => showCompleted;

  const setShowCompleted = (show) => {
    showCompleted = show;
  };

  const toggleShowCompleted = () => {
    showCompleted = !showCompleted;
  };

  const getView = () => view;

  const setView = (newView) => {
    view.setLayout(newView.layout);
    view.setSort(newView.sort);
  };

  const update = (projectData) => {
    setTitle(projectData.title);
    setColor(projectData.color);
    toggleFavorite(projectData.favorite);
    setView(projectData.view);
  };

  const toJSON = () => ({
    id,
    title,
    color,
    favorite,
    showCompleted,
    tasks: tasks.map((task) => task.toJSON()),
    view: view.toJSON(),
  });

  return {
    getId,
    getTitle,
    setTitle,
    getColor,
    setColor,
    getAllTasks,
    getUnCompletedTasks,
    getTasksCount,
    addTask,
    removeTask,
    updateTask,
    isFavorite,
    isShowCompleted,
    setShowCompleted,
    toggleShowCompleted,
    toggleFavorite,
    getView,
    setView,
    update,
    toJSON,
  };
};

export default Project;
