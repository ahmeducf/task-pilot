import { format } from 'date-fns';
import Project from './project';
import Task from './task';
import View from './project/view';
import storage from '../storage';

import { LAYOUT, ORDERING, SORT } from '../constants';

const projects = [];

const inbox = Project({ title: 'Inbox' });

let currentProject = null;

const today = View({
  layout: LAYOUT.LIST,
  sort: {
    sortBy: SORT.DEFAULT,
    ordering: 'ASC',
  },
});

const upcoming = View({
  layout: LAYOUT.LIST,
  sort: {
    sortBy: SORT.DEFAULT,
    ordering: 'ASC',
  },
});

const getProjects = () => projects;

const getInbox = () => inbox;

const getFavoriteProjects = () =>
  projects.filter((project) => project.isFavorite());

const getProject = (id) => projects.find((project) => project.getId() === id);

const addProject = (projectData) => {
  const project = Project(projectData);

  projects.push(project);

  return project.getId();
};

const updateProject = (id, projectData) => {
  const project = getProject(id);

  if (project) {
    project.update(projectData);
  }
};

const removeProject = (id) => {
  const project = getProject(id);

  if (project) {
    const index = projects.findIndex((p) => p.getId() === project.getId());
    projects.splice(index, 1);
  }
};

const getCurrentProject = () => currentProject;

const setCurrentProject = (id) => {
  currentProject = id;
};

const getAllTasks = () =>
  projects
    .reduce((tasks, project) => tasks.concat(project.getAllTasks()), [])
    .concat(inbox.getAllTasks());

const getUnCompletedInboxTasks = () => inbox.getUnCompletedTasks();
const getAllInboxTasks = () => inbox.getAllTasks();

const getInboxTasksCount = () => inbox.getTasksCount();

const getNonInboxTasks = () =>
  projects.reduce((tasks, project) => tasks.concat(project.getAllTasks()), []);

const getTodayTasks = () =>
  getAllTasks().filter((task) => task.dueDateIsToday() && !task.isCompleted());

const getTodayTasksCount = () =>
  getAllTasks().filter((task) => task.dueDateIsToday() && !task.isCompleted())
    .length;

const getUpcomingTasks = () =>
  getAllTasks()
    .filter((task) => task.dueDateIsUpcoming() && !task.isCompleted())
    .sort((a, b) => a.getDueDate() - b.getDueDate());

const mapTasksByDueDate = (tasks) =>
  tasks.reduce((map, task) => {
    const dueDate = format(task.getDueDate(), 'yyyy-MM-dd');

    if (!map.has(dueDate)) {
      map.set(dueDate, []);
    }

    map.get(dueDate).push(task);

    return map;
  }, new Map());

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
  getAllTasks().filter((task) => task.getProjectId() === projectID);

const getTasksByDueDate = (dueDate) =>
  getAllTasks().filter((task) => task.getDueDate() === dueDate);

const getTask = (id) => getAllTasks().find((task) => task.getId() === id);

const addTask = (taskData) => {
  const task = Task(taskData);
  if (task.getProjectId()) {
    const project = getProject(task.getProjectId());

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
    const project = getProject(task.getProjectId());

    if (project) {
      project.removeTask(task);
    } else {
      inbox.removeTask(task);
    }
  }
};

const updateTask = (id, taskData) => {
  const task = getTask(id);

  if (task) {
    task.update(taskData);
  }
};

const moveTask = (id, projectId) => {
  const task = getTask(id);

  if (task) {
    const project = getProject(task.getProjectId());

    if (project) {
      project.removeTask(task);
    } else {
      inbox.removeTask(task);
    }

    if (projectId) {
      const newProject = getProject(projectId);

      if (newProject) {
        newProject.addTask(task);
      }
    } else {
      inbox.addTask(task);
    }

    task.setProjectId(projectId);
  }
};

const setProjects = (projectsData) => {
  projectsData.forEach((projectData) => {
    projects.push(Project(projectData));
  });
};

const setInbox = (inboxData) => {
  inboxData.tasks.forEach((task) => {
    if (!task.projectID) {
      const inboxTask = Task(task);

      inbox.addTask(inboxTask);
    }
  });
};

const setTodayView = (todayView) => {
  today.setLayout(todayView.layout);
  today.setSort(todayView.sort);
};

const setUpcomingView = (upcomingView) => {
  upcoming.setLayout(upcomingView.layout);
  upcoming.setSort(upcomingView.sort);
};

const setInboxView = (inboxView) => inbox.setView(inboxView);

const getInboxView = () => inbox.getView();

const getTodayView = () => today;

const getUpcomingView = () => upcoming;

const toJSON = () => ({
  projects: projects.map((project) => project.toJSON()),
  inbox: inbox.toJSON(),
  todayView: today.toJSON(),
  upcomingView: upcoming.toJSON(),
});

const load = () => {
  const allProjects = storage.get('projects') ?? [];
  const inboxProject = storage.get('inbox') ?? { tasks: [] };
  const todayView = storage.get('todayView') ?? {
    layout: LAYOUT.LIST,
    sort: { sortBy: SORT.DEFAULT, ordering: ORDERING.ASC },
  };
  const upcomingView = storage.get('upcomingView') ?? {
    layout: LAYOUT.LIST,
    sort: { sortBy: SORT.DEFAULT, ordering: ORDERING.ASC },
  };

  setProjects(allProjects);
  setInbox(inboxProject);
  setTodayView(todayView);
  setUpcomingView(upcomingView);
};

const save = () => {
  const appData = toJSON();
  storage.set('projects', appData.projects);
  storage.set('inbox', appData.inbox);
  storage.set('todayView', appData.todayView);
  storage.set('upcomingView', appData.upcomingView);
};

export default {
  getProjects,
  setProjects,
  getInbox,
  setInbox,
  getTodayView,
  setTodayView,
  getInboxView,
  setInboxView,
  getUpcomingView,
  setUpcomingView,
  getFavoriteProjects,
  getProject,
  addProject,
  updateProject,
  removeProject,
  getCurrentProject,
  setCurrentProject,
  getAllTasks,
  getAllInboxTasks,
  getUnCompletedInboxTasks,
  getInboxTasksCount,
  getNonInboxTasks,
  getTodayTasks,
  getTodayTasksCount,
  getUpcomingTasks,
  getOverdueTasks,
  getCompletedTasks,
  getTasksByLabel,
  getLabels,
  getTasksByPriority,
  getTasksByProject,
  getTasksByDueDate,
  getTask,
  addTask,
  removeTask,
  updateTask,
  moveTask,
  mapTasksByDueDate,
  toJSON,
  load,
  save,
};
