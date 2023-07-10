import abstractHeader from '../abstract-header';
import {
  AddTaskControl,
  ShowCompletedControl,
  ViewControl,
  EditProjectControl,
  DeleteProjectControl,
} from '../abstract-header/control';

const UserProjectHeader = (app) => {
  const id = app.getCurrentProject();
  const project = app.getProject(id);
  const header = abstractHeader(project.getView());

  const title = header.querySelector('.project-title');
  title.textContent = project.getTitle();

  const controls = header.querySelector('.controls');
  controls.appendChild(AddTaskControl(app));
  controls.appendChild(ShowCompletedControl(app));
  controls.appendChild(ViewControl(app));
  controls.appendChild(EditProjectControl(app));
  controls.appendChild(DeleteProjectControl(app));

  return header;
};

export default UserProjectHeader;
