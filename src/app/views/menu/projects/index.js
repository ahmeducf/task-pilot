import AddProjectModal from '../../modals/add-project';
import Item from '../item';

function showAddProjectModal() {
  const modal = AddProjectModal();
  document.body.appendChild(modal);
}

function renderProjectsList(projectsList, app) {
  app.getProjects().forEach((project) => {
    const item = Item({ item: project });

    projectsList.appendChild(item);
  });
}
const render = (app) => {
  const projectsContainer = document.querySelector('.projects');
  const projectsList = projectsContainer.querySelector('.projects-list');
  const addProjectBtn = projectsContainer.querySelector('.add-project-btn');

  renderProjectsList(projectsList, app);

  addProjectBtn.addEventListener('click', showAddProjectModal);
};

export default render;
