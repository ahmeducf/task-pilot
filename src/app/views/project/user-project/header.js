import abstractHeader from '../abstract-header';
import {
  addTask,
  showCompleted,
  view,
  editProject,
  deleteProject,
} from '../abstract-header/control';

const UserProjectHeader = (app) => {
  const id = app.getCurrentProject();
  const project = app.getProject(id);
  const header = abstractHeader(project.getView());

  const title = header.querySelector('.project-title');
  title.textContent = project.getTitle();

  const controls = header.querySelector('.controls');
  controls.appendChild(addTask);
  controls.appendChild(showCompleted);
  controls.appendChild(view);
  controls.appendChild(editProject);
  controls.appendChild(deleteProject);

  return header;
};

export default UserProjectHeader;
