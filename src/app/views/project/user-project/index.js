import { v4 as uuidv4 } from 'uuid';
import Sortable from 'sortablejs';
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

  Sortable.create(tasksList, {
    group: uuidv4(),
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
