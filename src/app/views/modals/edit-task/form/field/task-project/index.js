import { ARROW_DOWN_SVG, INBOX_ICON_SVG } from './constants';
import ProjectPopper from './popper';

const TaskProject = (taskData, app) => {
  const currentProject = app.getCurrentProject();

  const field = document.createElement('div');
  field.classList.add('form-field', 'task-project');
  field.dataset.project = currentProject ?? 'inbox';

  const btn = document.createElement('button');
  btn.classList.add('task-project-btn');
  btn.setAttribute('type', 'button');

  const btnIcon = document.createElement('span');
  btnIcon.classList.add('project-icon');
  const btnText = document.createElement('span');
  btnText.classList.add('project-name');

  if (!currentProject) {
    btnIcon.innerHTML = INBOX_ICON_SVG;
    btnText.textContent = 'Inbox';
  } else {
    const project = app.getProject(currentProject);
    const projectColor = project.getColor();
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('project-color');
    colorDiv.style.backgroundColor = projectColor;

    btnIcon.append(colorDiv);
    btnText.textContent = project.getTitle();
  }

  btn.append(btnIcon, btnText);
  btn.innerHTML += ARROW_DOWN_SVG;

  field.append(btn);

  const showProjectPopper = () => {
    const projectPopper = ProjectPopper(app, field);
    document.body.append(projectPopper);
  };

  field.addEventListener('click', () => {
    field.classList.add('active');
    showProjectPopper();
  });

  return field;
};

export default TaskProject;
