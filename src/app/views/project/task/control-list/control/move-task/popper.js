import { CHECK_MARK_SVG, INBOX_ICON_SVG } from './constants';

const createProjectItem = (project, currentProject) => {
  const projectItem = document.createElement('li');
  projectItem.classList.add('project-list-item');
  projectItem.dataset.project = project.getId();

  const projectIcon = document.createElement('span');
  projectIcon.classList.add('project-icon');

  const projectColor = project.getColor();
  const colorDiv = document.createElement('div');
  colorDiv.classList.add('project-color');
  colorDiv.style.backgroundColor = projectColor;

  const projectName = document.createElement('span');
  projectName.classList.add('project-name');
  projectName.textContent = project.getTitle();

  if (project.getId() === currentProject) {
    projectItem.classList.add('selected');
  }

  projectIcon.append(colorDiv);
  projectItem.append(projectIcon, projectName);
  projectItem.innerHTML += CHECK_MARK_SVG;

  return projectItem;
};

const createInboxProjectItem = (currentProject) => {
  const projectItem = document.createElement('li');
  projectItem.classList.add('project-list-item');
  projectItem.dataset.project = 'inbox';

  const projectIcon = document.createElement('span');
  projectIcon.classList.add('project-icon');
  projectIcon.innerHTML = INBOX_ICON_SVG;

  const projectName = document.createElement('span');
  projectName.classList.add('project-name');
  projectName.textContent = 'Inbox';

  if (currentProject === 'inbox') {
    projectItem.classList.add('selected');
  }

  projectItem.append(projectIcon, projectName);
  projectItem.innerHTML += CHECK_MARK_SVG;

  return projectItem;
};

const handleOverlayClick = (event) => {
  const overlay = event.currentTarget;
  overlay.remove();
};

const ProjectPopper = (app, taskProjectField) => {
  const currentProject = taskProjectField.dataset.project;

  const overlay = document.createElement('div');
  overlay.classList.add('popper-overlay');

  const popper = document.createElement('div');
  popper.classList.add('popper', 'select-project');

  const projectList = document.createElement('ul');
  projectList.classList.add('project-list');

  const inboxItem = createInboxProjectItem(currentProject);

  const projectItems = app.getProjects().map((project) => {
    const projectItem = createProjectItem(project, currentProject);
    return projectItem;
  });

  projectList.append(inboxItem, ...projectItems);
  popper.append(projectList);
  overlay.append(popper);

  const setPopperPosition = () => {
    const POPPER_WIDTH = 240;
    const { top, left, width, height } =
      taskProjectField.getBoundingClientRect();

    const offset = (POPPER_WIDTH - width) / 2;
    const x = `${left - offset}px`;
    const y = `${top + height}px`;

    popper.style.transform = `translate(${x}, ${y})`;

    ['resize', 'scroll'].forEach((event) => {
      window.addEventListener(event, setPopperPosition);
    });
  };
  setPopperPosition();

  overlay.addEventListener('click', (event) => {
    taskProjectField.classList.remove('active');
    handleOverlayClick(event);
  });

  const handleListSelection = () => {
    const taskProject = taskProjectField;
    const taskProjectIcon = taskProject.querySelector('.project-icon');
    const taskProjectText = taskProject.querySelector('.project-name');

    [inboxItem, ...projectItems].forEach((projectItem) => {
      projectItem.addEventListener('click', () => {
        const projectItemIcon = projectItem.querySelector('.project-icon');
        const projectItemText = projectItem.querySelector('.project-name');

        const selectedProject = projectItem.dataset.project;
        taskProject.dataset.project = selectedProject;

        projectItems.forEach((item) => {
          item.classList.remove('selected');
        });

        projectItem.classList.add('selected');

        taskProject.firstElementChild.replaceChild(
          projectItemIcon.cloneNode(true),
          taskProjectIcon
        );
        taskProjectText.textContent = projectItemText.textContent;
      });
    });
  };
  handleListSelection();

  return overlay;
};

export default ProjectPopper;
