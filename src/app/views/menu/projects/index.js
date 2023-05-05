import Item from '../item';

const render = ({ projects }) => {
  const projectsContainer = document.querySelector('.projects');
  const projectsList = projectsContainer.querySelector('.projects-list');

  projects.forEach((project) => {
    const item = Item({ item: project });

    projectsList.appendChild(item);
  });
};

export default render;
