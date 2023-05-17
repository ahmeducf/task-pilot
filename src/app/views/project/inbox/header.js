import abstractHeader from '../abstract-header';
import {
  AddTaskControl,
  ShowCompletedControl,
  ViewControl,
} from '../abstract-header/control';

const InboxHeader = (app) => {
  const header = abstractHeader(app.getInboxView());

  const title = header.querySelector('.project-title');
  title.textContent = 'Inbox';

  const controls = header.querySelector('.controls');
  controls.appendChild(AddTaskControl(app));
  controls.appendChild(ShowCompletedControl());
  controls.appendChild(ViewControl());

  return header;
};

export default InboxHeader;
