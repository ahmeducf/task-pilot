import Header from './header';
import { LAYOUT } from '../../../constants';
import Task from '../task';

const InboxView = (app) => {
  const contentSection = document.createElement('section');
  contentSection.classList.add('content');
  const header = Header(app);
  const inboxView = app.getInboxView();

  const tasks = document.createElement('div');
  tasks.classList.add('tasks');
  if (inboxView.getLayout() === LAYOUT.GRID) {
    tasks.classList.add('grid-layout');
  } else if (inboxView.getLayout() === LAYOUT.LIST) {
    tasks.classList.add('flex-layout');
  }

  const tasksList = document.createElement('ul');
  tasksList.classList.add('tasks-list');
  if (inboxView.getLayout() === LAYOUT.GRID) {
    tasksList.classList.add('grid-layout');
  } else if (inboxView.getLayout() === LAYOUT.LIST) {
    tasksList.classList.add('flex-layout');
  }

  app.getInboxTasks().forEach((task) => {
    const taskItem = Task({ task, projectView: inboxView });
    tasksList.appendChild(taskItem);
  });

  tasks.appendChild(tasksList);
  contentSection.appendChild(header);
  contentSection.appendChild(tasks);

  return contentSection;
};

export default InboxView;
