const renderItemCount = (item, tasksCount) => {
  const inboxItem = document.querySelector(`.${item}.main-filters-list__item`);
  const countSpan = inboxItem.querySelector('span.count');
  countSpan.textContent = tasksCount;
};

const render = ({ inboxCount, todayCount }) => {
  renderItemCount('inbox', inboxCount);
  renderItemCount('today', todayCount);
};

export default render;
