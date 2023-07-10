import abstractHeader from '../abstract-header';
import { AddTaskControl, ViewControl } from '../abstract-header/control';

const UpcomingHeader = (app) => {
  const header = abstractHeader(app.getUpcomingView());

  const title = header.querySelector('.project-title');
  title.textContent = 'Upcoming';

  const controls = header.querySelector('.controls');
  controls.appendChild(AddTaskControl(app));
  controls.appendChild(ViewControl(app));

  return header;
};

export default UpcomingHeader;
