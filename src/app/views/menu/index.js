import renderMainFilters from './main-filters';
import renderFavorites from './favorites';
import renderProjects from './projects';

const render = (data) => {
  renderMainFilters({
    inboxCount: data.getInboxTasksCount(),
    todayCount: data.getTodayTasksCount(),
  });

  renderFavorites({ favoriteProjects: data.getFavoriteProjects() });

  renderProjects({ projects: data.getProjects() });
};

export default render;
