import abstractHeader from '../abstract-header';
import { addTask, showCompleted, view } from '../abstract-header/control';

const InboxHeader = (app) => {
  const header = abstractHeader(app.getInboxView());

  const title = header.querySelector('.project-title');
  title.textContent = 'Inbox';

  const controls = header.querySelector('.controls');
  controls.appendChild(addTask);
  controls.appendChild(showCompleted);
  controls.appendChild(view);

  return header;
};

export default InboxHeader;
