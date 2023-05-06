import abstractHeader from '../abstract-header';
import { addTask, view } from '../abstract-header/control';

const UpcomingHeader = (app) => {
  const header = abstractHeader(app.getUpcomingView());

  const title = header.querySelector('.project-title');
  title.textContent = 'Upcoming';

  const controls = header.querySelector('.controls');
  controls.appendChild(addTask);
  controls.appendChild(view);

  return header;
};

export default UpcomingHeader;
