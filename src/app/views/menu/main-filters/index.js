import pubsub from '../../../pubsub';
import activateItem from '../activate-item';

const renderItemCount = (item, tasksCount) => {
  const listItem = document.querySelector(`.${item}.main-filters-list__item`);
  const countSpan = listItem.querySelector('span.count');
  countSpan.textContent = tasksCount;
};

const render = (app) => {
  renderItemCount('inbox', app.getInboxTasksCount());
  renderItemCount('today', app.getTodayTasksCount());

  const listItems = document.querySelectorAll('.main-filters-list__item');
  listItems.forEach((listItem) => {
    listItem.addEventListener('click', () => {
      app.setCurrentProject(null);
      pubsub.publish(`main-filters-${listItem.dataset.filter}:clicked`, app);
      activateItem(listItem);
    });
  });
};

export default render;
