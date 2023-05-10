import renderMainFilters from './main-filters';
import renderFavorites from './favorites';
import renderProjects from './projects';
import activateItem from './activate-item';

const handleAccordionMenus = () => {
  const listToggleButtons = document.querySelectorAll('.list-toggle-btn');

  listToggleButtons.forEach((listToggleButton) => {
    listToggleButton.addEventListener('click', () => {
      listToggleButton.classList.toggle('active');
      const list = listToggleButton.parentElement.nextElementSibling;

      if (listToggleButton.classList.contains('active')) {
        list.style.maxHeight = 0;
      } else {
        list.style.maxHeight = `${list.scrollHeight}px`;
      }
    });
  });
};

const activateCurrentItem = (currentProject) => {
  const currentProjectItems = document.querySelectorAll(
    `.menu__item[data-id="${currentProject}"]`
  );

  if (currentProjectItems) {
    currentProjectItems.forEach((currentProjectItem) => {
      activateItem(currentProjectItem);
    });
  } else {
    activateItem(document.querySelector('.main-filters-list__item.inbox'));
  }
};

const render = (app) => {
  renderMainFilters(app);
  renderFavorites(app);
  renderProjects(app);

  activateCurrentItem(app.getCurrentProject());
};

const initMenu = (app) => {
  renderMainFilters(app);
  renderFavorites(app);
  renderProjects(app);

  handleAccordionMenus();
};

export default render;
export { initMenu };
