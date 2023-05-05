import Item from '../item';

const render = (app) => {
  const projectsContainer = document.querySelector('.projects');
  const projectsList = projectsContainer.querySelector('.projects-list');

  app.getProjects().forEach((project) => {
    const item = Item({ item: project });

    projectsList.appendChild(item);
  });
};

export default render;
