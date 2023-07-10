import Header from './header';
import { LAYOUT } from '../../../constants';
import Task from '../task';

const UserProjectView = (app) => {
  const id = app.getCurrentProject();
  const project = app.getProject(id);
  const contentSection = document.createElement('section');
  contentSection.classList.add('content');
  contentSection.dataset.view = 'project';

  const header = Header(app);
  const projectView = project.getView();

  const tasks = document.createElement('div');
  tasks.classList.add('tasks');
  if (projectView.getLayout() === LAYOUT.BOARD) {
    tasks.classList.add('grid-layout');
  } else if (projectView.getLayout() === LAYOUT.LIST) {
    tasks.classList.add('flex-layout');
  }

  const tasksList = document.createElement('ul');
  tasksList.classList.add('tasks-list');
  if (projectView.getLayout() === LAYOUT.BOARD) {
    tasksList.classList.add('grid-layout');
  } else if (projectView.getLayout() === LAYOUT.LIST) {
    tasksList.classList.add('flex-layout');
  }

  if (project.isShowCompleted()) {
    project.getAllTasks().forEach((task) => {
      const taskItem = Task({ task, projectView }, app);
      tasksList.appendChild(taskItem);
    });
  } else {
    project.getUnCompletedTasks().forEach((task) => {
      const taskItem = Task({ task, projectView }, app);
      tasksList.appendChild(taskItem);
    });
  }

  tasks.appendChild(tasksList);
  contentSection.appendChild(header);
  contentSection.appendChild(tasks);

  return contentSection;
};

export default UserProjectView;
