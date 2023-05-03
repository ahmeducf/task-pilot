import Project from './project';
import Task from './task';
import storage from './storage';
import pubsub from './pubsub';
import { LOAD } from './pubsub/events-types';

const projects = [];
const inbox = Project({ title: 'Inbox' });

const getProjects = () => projects;

const getFavoriteProjects = () =>
  projects.filter((project) => project.isFavorite());

const getProject = (id) => projects.find((project) => project.getId() === id);

const addProject = (projectData) => {
  const project = Project(projectData);

  projects.push(project);
};

const removeProject = (id) => {
  const project = getProject(id);

  if (project) {
    const index = projects.findIndex((p) => p.getId() === project.getId());
    projects.splice(index, 1);
  }
};

const getAllTasks = () =>
  projects
    .reduce((tasks, project) => tasks.concat(project.getTasks()), [])
    .concat(inbox.getTasks());

const getInboxTasks = () => inbox.getTasks();

const getNonInboxTasks = () =>
  projects.reduce((tasks, project) => tasks.concat(project.getTasks()), []);

const getTodayTasks = () =>
  getAllTasks().filter((task) => task.dueDateIsToday() && !task.isCompleted());

const getUpcomingTasks = () =>
  getAllTasks()
    .filter((task) => task.dueDateIsUpcoming() && !task.isCompleted())
    .sort((a, b) => a.getDueDate() - b.getDueDate());

const getOverdueTasks = () =>
  getAllTasks().filter((task) => task.isOverdue() && !task.isCompleted());

const getCompletedTasks = () =>
  getAllTasks().filter((task) => task.isCompleted());

const getTasksByLabel = (label) =>
  getAllTasks().filter((task) => task.getLabels().includes(label));

const getLabels = () =>
  getAllTasks().reduce((labels, task) => {
    task.getLabels().forEach((label) => {
      if (!labels.includes(label)) {
        labels.push(label);
      }
    });

    return labels;
  }, []);

const getTasksByPriority = (priority) =>
  getAllTasks().filter((task) => task.getPriority() === priority);

const getTasksByProject = (projectID) =>
  getAllTasks().filter((task) => task.getProjectID() === projectID);

const getTasksByDueDate = (dueDate) =>
  getAllTasks().filter((task) => task.getDueDate() === dueDate);

const getTask = (id) => getAllTasks().find((task) => task.getId() === id);

const addTask = (taskData) => {
  const task = new Task(taskData);

  if (task.getProjectID()) {
    const project = getProject(task.getProjectID());

    if (project) {
      project.addTask(task);
    }
  } else {
    inbox.addTask(task);
  }
};

const removeTask = (id) => {
  const task = getTask(id);

  if (task) {
    const project = getProject(task.getProjectID());

    if (project) {
      project.removeTask(task);
    }
  }
};

const updateTask = (id) => {
  const task = getTask(id);

  if (task) {
    const project = getProject(task.getProjectID());

    if (project) {
      project.updateTask(task);
    }
  }
};

const toJSON = () => ({
  projects: projects.map((project) => project.toJSON()),
});

const setProjects = (projectsData) => {
  projectsData.forEach((projectData) => {
    projects.addProject(projectData);
  });
};

const setInbox = (inboxData) => {
  inboxData.tasks.forEach((task) => {
    if (!task.projectID) {
      const inboxTask = new Task(task);

      inbox.addTask(inboxTask);
    }
  });
};

const load = () => {
  const allProjects = storage.get('projects') ?? { projects: [] };
  const inboxProject = storage.get('inbox') ?? { tasks: [] };

  setProjects(allProjects.projects);
  setInbox(inboxProject);
};

const init = () => {
  load();

  pubsub.publish(LOAD, { projects, inbox });
};

export default {
  init,
};
