import { addDays, addWeeks, endOfTomorrow } from 'date-fns';
import app from './models';
import Task from './models/task';
import pubsub from './pubsub';
import {
  ADD_PROJECT,
  LOAD,
  RENDER_MENU,
  RENDER_CONTENT,
  ADD_TASK,
  REFRESH_CONTENT,
  REMOVE_TASK,
  MOVE_TASK_CONTROL_CLICKED,
  SHOW_PROJECT_POPPER,
  MOVE_TASK,
  UPDATE_TASK,
  CHECK_TASK_COMPLETED,
  CHECK_TASK_NOT_COMPLETED,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
  TOGGLE_SHOW_COMPLETED,
} from './pubsub/events-types';

const init = () => {
  app.load();

  if (!app.getAllTasks().length && !app.getProjects().length) {
    app.getInbox().addTask(
      Task({
        title: 'Welcome to Task Pilot!',
        description:
          'This is your inbox. Tasks can be organized into projects, and you can also add labels and filters.',
        dueDate: new Date(),
        priority: 'P1',
        labels: ['Welcome'],
      })
    );

    app.getInbox().addTask(
      Task({
        title: 'Create a new project',
        description:
          'Projects are a great way to organize your tasks. You can create as many projects as you want.',
        dueDate: endOfTomorrow(),
        priority: 'P2',
        labels: ['Welcome'],
      })
    );

    app.getInbox().addTask(
      Task({
        title: 'Add a new task',
        description:
          'Tasks can be added to projects or to your inbox. You can also add labels and due dates to your tasks.',
        dueDate: addDays(new Date(), 3),
        priority: 'P3',
        labels: ['Welcome'],
      })
    );

    app.getInbox().addTask(
      Task({
        title: 'Add a new label',
        description:
          'Labels are a great way to organize your tasks. You can create as many labels as you want.',
        dueDate: addWeeks(new Date(), 2),
        priority: 'P4',
        labels: ['Welcome'],
      })
    );

    app.addProject({ title: 'Home 🏡', favorite: true });

    app.getProjects()[0].addTask(
      Task({
        title: 'Add a new task to this project',
        description:
          'Tasks can be added to projects or to your inbox. You can also add labels and due dates to your tasks.',
        dueDate: new Date(),
        priority: 'P3',
        labels: ['Welcome'],
      })
    );

    app.save();
  }

  pubsub.publish(LOAD, app);

  pubsub.subscribe(ADD_PROJECT, (project) => {
    const id = app.addProject(project);
    app.setCurrentProject(id);

    app.save();

    pubsub.publish(RENDER_CONTENT, { app, view: 'project' });
    pubsub.publish(RENDER_MENU, app);
  });

  pubsub.subscribe(UPDATE_PROJECT, (data) => {
    app.updateProject(data.id, data.project);

    app.save();

    pubsub.publish(REFRESH_CONTENT, app);
    pubsub.publish(RENDER_MENU, app);
  });

  pubsub.subscribe(REMOVE_PROJECT, (projectId) => {
    app.removeProject(projectId);
    app.setCurrentProject(null);

    app.save();

    pubsub.publish(RENDER_CONTENT, { app, view: 'inbox' });
    pubsub.publish(RENDER_MENU, app);
  });

  pubsub.subscribe(ADD_TASK, (task) => {
    app.addTask(task);

    app.save();

    pubsub.publish(REFRESH_CONTENT, app);
    pubsub.publish(RENDER_MENU, app);
  });

  pubsub.subscribe(UPDATE_TASK, (data) => {
    app.updateTask(data.id, data.task);

    app.save();

    pubsub.publish(REFRESH_CONTENT, app);
    pubsub.publish(RENDER_MENU, app);
  });

  pubsub.subscribe(REMOVE_TASK, (taskId) => {
    app.removeTask(taskId);

    app.save();

    pubsub.publish(REFRESH_CONTENT, app);
    pubsub.publish(RENDER_MENU, app);
  });

  pubsub.subscribe(CHECK_TASK_COMPLETED, () => {
    app.save();

    pubsub.publish(REFRESH_CONTENT, app);
    pubsub.publish(RENDER_MENU, app);
  });

  pubsub.subscribe(CHECK_TASK_NOT_COMPLETED, () => {
    app.save();

    pubsub.publish(REFRESH_CONTENT, app);
    pubsub.publish(RENDER_MENU, app);
  });

  pubsub.subscribe(TOGGLE_SHOW_COMPLETED, () => {
    app.save();

    pubsub.publish(REFRESH_CONTENT, app);
    pubsub.publish(RENDER_MENU, app);
  });

  pubsub.subscribe(MOVE_TASK_CONTROL_CLICKED, (data) => {
    pubsub.publish(SHOW_PROJECT_POPPER, { app, ...data });
  });

  pubsub.subscribe(MOVE_TASK, (data) => {
    app.moveTask(data.taskId, data.projectId);

    app.save();

    pubsub.publish(REFRESH_CONTENT, app);
    pubsub.publish(RENDER_MENU, app);
  });
};

export default {
  init,
};
