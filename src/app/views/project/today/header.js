import { format } from 'date-fns';
import abstractHeader from '../abstract-header';
import { addTask, view } from '../abstract-header/control';

const TodayHeader = (app) => {
  const header = abstractHeader(app.getTodayView());

  const title = header.querySelector('.project-title');
  title.textContent = 'Today';

  const todayDateSpan = document.createElement('small');
  todayDateSpan.classList.add('today-date');
  const todayDate = new Date();
  const todayDateFormatted = format(todayDate, 'EEE MMMM d');
  todayDateSpan.textContent = todayDateFormatted;

  title.appendChild(todayDateSpan);

  const controls = header.querySelector('.controls');
  controls.appendChild(addTask);
  controls.appendChild(view);

  return header;
};

export default TodayHeader;
