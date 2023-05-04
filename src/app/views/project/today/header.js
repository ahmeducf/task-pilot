import { format } from 'date-fns';
import abstractHeader from '../abstract-header';

const todayHeader = () => {
  const header = abstractHeader();

  const title = header.querySelector('.project-title');
  const todayDateSpan = document.createElement('small');
  todayDateSpan.classList.add('today-date');

  const todayDate = new Date();
  const todayDateFormatted = format(todayDate, 'EEE MMMM d');
  todayDateSpan.textContent = todayDateFormatted;

  title.appendChild(todayDateSpan);

  return header;
};

export default todayHeader;
