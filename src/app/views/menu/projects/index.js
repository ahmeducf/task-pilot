import Item from '../item';

function renderProjectsList(projectsList, app) {
  app.getProjects().forEach((project) => {
    const item = Item({ item: project });

    projectsList.appendChild(item);
  });
}
const render = (app) => {
  const projectsContainer = document.querySelector('.projects-container');
  const projectsList = projectsContainer.querySelector('.projects-list');

  renderProjectsList(projectsList, app);
};

export default render;
