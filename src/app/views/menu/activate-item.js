const activateItem = (menuItem) => {
  const { id: itemId } = menuItem.dataset;
  const items = document.querySelectorAll(`[data-id="${itemId}"]`);
  const allMenuItems = [
    ...document.querySelectorAll('.main-filters-list__item'),
    ...document.querySelectorAll('.menu__item'),
  ];

  allMenuItems.forEach((item) => {
    item.classList.remove('active');
  });

  items.forEach((item) => {
    item.classList.add('active');
  });
};

export default activateItem;
