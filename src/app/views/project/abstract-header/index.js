import { view } from './control';
import { LAYOUT } from '../../../constants';

const Header = (viewOptions) => {
  const projectHeader = document.createElement('div');
  projectHeader.classList.add('project-header');

  if (viewOptions.getLayout() === LAYOUT.GRID) {
    projectHeader.classList.add('grid-layout');
  } else if (viewOptions.getLayout() === LAYOUT.LIST) {
    projectHeader.classList.add('flex-layout');
  }

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
