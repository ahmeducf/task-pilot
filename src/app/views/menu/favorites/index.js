import Item from '../item';

const render = (app) => {
  const favoritesContainer = document.querySelector('.favorites');
  const favoritesList = favoritesContainer.querySelector('.favorites-list');
  const favoriteProjects = app.getFavoriteProjects();

  if (favoriteProjects.length === 0) {
    favoritesContainer.classList.add('hidden');
  } else {
    favoritesContainer.classList.remove('hidden');

    favoriteProjects.forEach((project) => {
      const item = Item({ item: project });

      favoritesList.appendChild(item);
    });
  }
};

export default render;
