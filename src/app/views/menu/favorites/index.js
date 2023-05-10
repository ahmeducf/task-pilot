import pubsub from '../../../pubsub';
import { RENDER_CONTENT } from '../../../pubsub/events-types';
import activateItem from '../activate-item';
import Item from '../item';

const render = (app) => {
  const favoritesContainer = document.querySelector('.favorites');
  const favoritesList = favoritesContainer.querySelector('.favorites-list');
  favoritesList.innerHTML = '';
  const toggleButton = document.querySelector('.favorites .list-toggle-btn');
  const favoriteProjects = app.getFavoriteProjects();

  if (favoriteProjects.length === 0) {
    favoritesContainer.classList.add('hidden');
  } else {
    favoritesContainer.classList.remove('hidden');

    favoriteProjects.forEach((project) => {
      const item = Item({ item: project });
      favoritesList.appendChild(item);
    });

    if (toggleButton.classList.contains('active')) {
      favoritesList.style.maxHeight = 0;
    } else {
      favoritesList.style.maxHeight = `${favoritesList.scrollHeight}px`;
    }
  }

  const favoriteListItems = favoritesList.querySelectorAll('.menu__item');
  favoriteListItems.forEach((favoriteListItem) => {
    favoriteListItem.addEventListener('click', () => {
      const { id } = favoriteListItem.dataset;
      app.setCurrentProject(id);

      activateItem(favoriteListItem);

      pubsub.publish(RENDER_CONTENT, app);
    });
  });
};

export default render;
