import { LAYOUT } from '../../../constants';
import Task from '../task';

const OverdueSection = (data) => {
  const tasks = data.getOverdueTasks();
  const projectView = data.getProjectView();

  const overdueSection = document.createElement('section');
  overdueSection.classList.add('overdue');

  const overdueHeader = document.createElement('div');
  overdueHeader.classList.add('overdue__header');

  const toggleBtn = document.createElement('button');
  toggleBtn.classList.add('overdue__toggle-btn');
  toggleBtn.innerHTML =
    '<svg width="24" height="24"><path fill="none" stroke="currentColor" d="M16 10l-4 4-4-4"></path></svg>';

  const overdueTitle = document.createElement('h2');
  overdueTitle.classList.add('overdue__title');
  overdueTitle.textContent = 'Overdue';

  const overdueTasks = document.createElement('div');
  overdueTasks.classList.add('overdue__tasks');

  const tasksList = document.createElement('ul');
  tasksList.classList.add('tasks-list');
  if (projectView.getLayout() === LAYOUT.GRID) {
    tasksList.classList.add('grid-layout');
  } else if (projectView.getLayout() === LAYOUT.LIST) {
    tasksList.classList.add('flex-layout');
  }

  overdueHeader.appendChild(toggleBtn);
  overdueHeader.appendChild(overdueTitle);
  overdueSection.appendChild(overdueHeader);
  overdueSection.appendChild(overdueTasks);
  overdueTasks.appendChild(tasksList);

  tasks.forEach((task) => {
    const taskItem = Task({ task, projectView });
    tasksList.appendChild(taskItem);
  });

  return overdueSection;
};

export default OverdueSection;
