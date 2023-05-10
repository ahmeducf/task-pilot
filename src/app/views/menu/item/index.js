const Item = ({ item }) => {
  const listItem = document.createElement('li');
  listItem.classList.add('menu__item');
  listItem.dataset.id = item.getId();
  const btn = document.createElement('button');

  const IconNameWrapper = document.createElement('div');
  IconNameWrapper.classList.add('icon-name-wrapper');

  const iconSpan = document.createElement('span');
  iconSpan.classList.add('project-icon');
  const iconColor = document.createElement('div');
  iconColor.style.backgroundColor = item.getColor();
  iconSpan.appendChild(iconColor);

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('project-name');
  nameSpan.textContent = item.getTitle();

  IconNameWrapper.appendChild(iconSpan);
  IconNameWrapper.appendChild(nameSpan);

  const actionsCountWrapper = document.createElement('div');
  actionsCountWrapper.classList.add('actions-count-wrapper');

  const actionsSpan = document.createElement('span');
  actionsSpan.classList.add('actions-menu-icon');
  actionsSpan.innerHTML = `<svg
                      alt="More project actions"
                      width="15"
                      height="3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                    </svg>`;
  const countSpan = document.createElement('span');
  countSpan.classList.add('count');
  countSpan.textContent = item.getTasksCount();

  actionsCountWrapper.appendChild(actionsSpan);
  actionsCountWrapper.appendChild(countSpan);

  btn.appendChild(IconNameWrapper);
  btn.appendChild(actionsCountWrapper);

  listItem.appendChild(btn);

  return listItem;
};

export default Item;
