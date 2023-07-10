import Sortable from 'sortablejs';
import { LAYOUT } from '../../../constants';
import TaskView from '../task';

const OverdueSection = (data, app) => {
  const tasks = data.getOverdueTasks();
  const projectView = data.getProjectView();
  const { view } = data;

  const overdueSection = document.createElement('section');
  overdueSection.classList.add('overdue');

  const overdueHeader = document.createElement('div');
  overdueHeader.classList.add('overdue__header');

  const toggleBtn = document.createElement('button');
  toggleBtn.classList.add('overdue__toggle-btn', 'active');
  toggleBtn.innerHTML =
    '<svg width="24" height="24"><path fill="none" stroke="currentColor" d="M16 10l-4 4-4-4"></path></svg>';

  const overdueTitle = document.createElement('h2');
  overdueTitle.classList.add('overdue__title');
  overdueTitle.textContent = 'Overdue';

  const overdueTasks = document.createElement('div');
  overdueTasks.classList.add('overdue__tasks', 'overdue--collapsed');

  const tasksList = document.createElement('ul');
  tasksList.classList.add('tasks-list');
  if (projectView.getLayout() === LAYOUT.BOARD) {
    tasksList.classList.add('grid-layout');
  } else if (projectView.getLayout() === LAYOUT.LIST) {
    tasksList.classList.add('flex-layout');
  }

  Sortable.create(tasksList, {
    group: `${view}-overdue`,
    animation: 150,
    draggable: '.tasks-list-item',
    handle: '.tasks-list-item__handle',

    ghostClass: 'sortable-ghost', // Class name for the drop placeholder
    chosenClass: 'sortable-chosen', // Class name for the chosen item
    dragClass: 'sortable-drag', // Class name for the dragging item

    store: {
      /**
       * Get the order of elements. Called once during initialization.
       * @param   {Sortable}  sortable
       * @returns {Array}
       */
      get(sortable) {
        const order = localStorage.getItem(sortable.options.group.name);
        return order ? order.split('|') : [];
      },

      /**
       * Save the order of elements. Called onEnd (when the item is dropped).
       * @param {Sortable}  sortable
       */
      set(sortable) {
        const order = sortable.toArray();
        localStorage.setItem(sortable.options.group.name, order.join('|'));
      },
    },
  });

  overdueHeader.appendChild(toggleBtn);
  overdueHeader.appendChild(overdueTitle);
  overdueSection.appendChild(overdueHeader);
  overdueSection.appendChild(overdueTasks);
  overdueTasks.appendChild(tasksList);

  tasks.forEach((task) => {
    const taskItem = TaskView({ task, projectView }, app);
    tasksList.appendChild(taskItem);
  });

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    overdueTasks.classList.toggle('overdue--collapsed');
  });

  return overdueSection;
};

export default OverdueSection;
