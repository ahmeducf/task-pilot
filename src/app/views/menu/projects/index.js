import Item from '../item';

function toggleAddProjectModal() {
  const modal = document.querySelector('.modal-overlay.add-project');
  modal.classList.remove('hidden');
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

  addProjectBtn.addEventListener('click', toggleAddProjectModal);
};

export default render;
