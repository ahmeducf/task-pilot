import AddProjectModal from '../../modals/add-project';
import Item from '../item';
import activateItem from '../activate-item';

function showAddProjectModal() {
  const modal = AddProjectModal();
  document.body.appendChild(modal);
}

function renderProjectsList(projectsList, app) {
  app.getProjects().forEach((project) => {
    const item = Item({ item: project });
    item.dataset.id = project.getId();

    projectsList.appendChild(item);
  });
}
const render = (app) => {
  const projectsContainer = document.querySelector('.projects');
  const toggleButton = document.querySelector('.projects .list-toggle-btn');
  const projectsList = projectsContainer.querySelector('.projects-list');
  projectsList.innerHTML = '';
  const addProjectBtn = projectsContainer.querySelector('.add-project-btn');

  renderProjectsList(projectsList, app);

  if (toggleButton.classList.contains('active')) {
    projectsList.style.maxHeight = 0;
  } else {
    projectsList.style.maxHeight = `${projectsList.scrollHeight}px`;
  }

  const projectsListItems = projectsList.querySelectorAll('.menu__item');
  projectsListItems.forEach((favoriteListItem) => {
    favoriteListItem.addEventListener('click', () => {
      const { id } = favoriteListItem.dataset;
      app.setCurrentProject(id);

      activateItem(favoriteListItem);
    });
  });

  addProjectBtn.addEventListener('click', showAddProjectModal);
};

export default render;
