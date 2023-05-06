import renderMainFilters from './main-filters';
import renderFavorites from './favorites';
import renderProjects from './projects';

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

const render = (app) => {
  renderMainFilters(app);
  renderFavorites(app);
  renderProjects(app);

  handleAccordionMenus();
};

export default render;
