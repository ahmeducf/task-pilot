import { isToday, isTomorrow, format } from 'date-fns';
import Sortable from 'sortablejs';
import { LAYOUT } from '../../../constants';
import TaskView from '../task';

const DaySection = (data, app) => {
  const { date, projectView, view, tasks } = data;

  const daySection = document.createElement('section');
  const dayHeader = document.createElement('div');
  dayHeader.classList.add('day__header');

  const dayTitle = document.createElement('h2');
  dayTitle.classList.add('day__title');

  if (isToday(date)) {
    daySection.classList.add('day-section--today');
    dayTitle.textContent = `${format(date, 'MMMM d')} ‧ Today ‧ ${format(
      date,
      'EEEE'
    )}`;
  } else if (isTomorrow(date)) {
    daySection.classList.add('day-section--tomorrow');
    dayTitle.textContent = `${format(date, 'MMMM d')} ‧ Tomorrow ‧ ${format(
      date,
      'EEEE'
    )}`;
  } else {
    daySection.classList.add(`day-section--${format(date, 'yyyy-MM-dd')}`);
    dayTitle.textContent = `${format(date, 'MMMM d')} ‧ ${format(
      date,
      'EEEE'
    )}`;
  }

  const dayTasks = document.createElement('div');
  dayTasks.classList.add('day__tasks');

  const tasksList = document.createElement('ul');
  tasksList.classList.add('tasks-list');
  if (projectView.getLayout() === LAYOUT.BOARD) {
    tasksList.classList.add('grid-layout');
  } else if (projectView.getLayout() === LAYOUT.LIST) {
    tasksList.classList.add('flex-layout');
  }

  Sortable.create(tasksList, {
    group: `${view}-${format(date, 'yyyy-MM-dd')}`,
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

  dayHeader.appendChild(dayTitle);
  daySection.appendChild(dayHeader);
  daySection.appendChild(dayTasks);
  dayTasks.appendChild(tasksList);

  tasks.forEach((task) => {
    const taskItem = TaskView({ task, projectView }, app);
    tasksList.appendChild(taskItem);
  });

  return daySection;
};

export default DaySection;
