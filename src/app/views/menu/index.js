import Item from './item';
import renderMainFilters from './main-filters';

const render = (data) => {
  renderMainFilters({
    inboxCount: data.getInboxTasksCount(),
    todayCount: data.getTodayTasksCount(),
  });

  const projects = data.getProjects();
  const favoriteProjects = data.getFavoriteProjects();

  const favoritesContainer = document.querySelector('.favorites');
  const favoritesList = favoritesContainer.querySelector('.favorites-list');

  if (favoriteProjects.length === 0) {
    favoritesContainer.classList.add('hidden');
  } else {
    favoritesContainer.classList.remove('hidden');

    favoriteProjects.forEach((project) => {
      const item = Item({ item: project });

      favoritesList.appendChild(item);
    });
  }

  const projectsContainer = document.querySelector('.projects');
  const projectsList = projectsContainer.querySelector('.projects-list');

  projects.forEach((project) => {
    const item = Item({ item: project });

    projectsList.appendChild(item);
  });
};

export default render;
