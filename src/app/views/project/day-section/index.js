import { isToday, isTomorrow, format } from 'date-fns';
import { LAYOUT } from '../../../constants';
import TaskView from '../task';

const DaySection = (data) => {
  const { date, projectView, tasks } = data;

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
  if (projectView.getLayout() === LAYOUT.GRID) {
    tasksList.classList.add('grid-layout');
  } else if (projectView.getLayout() === LAYOUT.LIST) {
    tasksList.classList.add('flex-layout');
  }

  dayHeader.appendChild(dayTitle);
  daySection.appendChild(dayHeader);
  daySection.appendChild(dayTasks);
  dayTasks.appendChild(tasksList);

  tasks.forEach((task) => {
    const taskItem = TaskView({ task, projectView });
    tasksList.appendChild(taskItem);
  });

  return daySection;
};

export default DaySection;
