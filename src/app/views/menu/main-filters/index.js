import pubsub from '../../../pubsub';

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
      pubsub.publish(`main-filters-${listItem.dataset.filter}:clicked`, app);
    });
  });
};

export default render;
