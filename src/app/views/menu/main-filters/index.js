import pubsub from '../../../pubsub';

const renderItemCount = (item, tasksCount) => {
  const listItem = document.querySelector(`.${item}.main-filters-list__item`);
  const countSpan = listItem.querySelector('span.count');
  countSpan.textContent = tasksCount;
};

const activateItem = (item) => {
  const allMenuItems = [
    ...document.querySelectorAll('.main-filters-list__item'),
    ...document.querySelectorAll('.menu__item'),
  ];
  allMenuItems.forEach((menuItem) => {
    menuItem.classList.remove('active');
  });
  item.classList.add('active');
};

const render = (app) => {
  renderItemCount('inbox', app.getInboxTasksCount());
  renderItemCount('today', app.getTodayTasksCount());

  const listItems = document.querySelectorAll('.main-filters-list__item');
  listItems.forEach((listItem) => {
    listItem.addEventListener('click', () => {
      pubsub.publish(`main-filters-${listItem.dataset.filter}:clicked`, app);
      activateItem(listItem);
    });
  });
};

export default render;
