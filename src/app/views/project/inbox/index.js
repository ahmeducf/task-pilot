import Header from './header';
import { LAYOUT } from '../../../constants';
import Task from '../task';

const InboxView = (app) => {
  const inbox = app.getInbox();
  const contentSection = document.createElement('section');
  contentSection.classList.add('content');
  contentSection.dataset.view = 'inbox';

  const header = Header(app);
  const inboxView = app.getInboxView();

  const tasks = document.createElement('div');
  tasks.classList.add('tasks');
  if (inboxView.getLayout() === LAYOUT.BOARD) {
    tasks.classList.add('grid-layout');
  } else if (inboxView.getLayout() === LAYOUT.LIST) {
    tasks.classList.add('flex-layout');
  }

  const tasksList = document.createElement('ul');
  tasksList.classList.add('tasks-list');
  if (inboxView.getLayout() === LAYOUT.Board) {
    tasksList.classList.add('grid-layout');
  } else if (inboxView.getLayout() === LAYOUT.LIST) {
    tasksList.classList.add('flex-layout');
  }

  if (inbox.isShowCompleted()) {
    app.getAllInboxTasks().forEach((task) => {
      const taskItem = Task({ task, projectView: inboxView }, app);
      tasksList.appendChild(taskItem);
    });
  } else {
    app.getUnCompletedInboxTasks().forEach((task) => {
      const taskItem = Task({ task, projectView: inboxView }, app);
      tasksList.appendChild(taskItem);
    });
  }

  tasks.appendChild(tasksList);
  contentSection.appendChild(header);
  contentSection.appendChild(tasks);

  return contentSection;
};

export default InboxView;
