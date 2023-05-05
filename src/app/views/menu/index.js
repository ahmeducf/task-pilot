import renderMainFilters from './main-filters';
import renderFavorites from './favorites';
import renderProjects from './projects';

const render = (app) => {
  renderMainFilters(app);

  renderFavorites(app);

  renderProjects(app);
};

export default render;
