import { v4 as uuidv4 } from 'uuid';
import Sortable from 'sortablejs';
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
