import { view } from '../control';

const Header = () => {
  const projectHeader = document.createElement('div');
  projectHeader.classList.add('project-header', 'flex-layout');

  const projectTitle = document.createElement('h1');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = 'Today';

  const controls = document.createElement('div');
  controls.classList.add('controls');

  projectHeader.appendChild(projectTitle);
  controls.appendChild(view);
  projectHeader.appendChild(controls);

  return projectHeader;
};

export default Header;
