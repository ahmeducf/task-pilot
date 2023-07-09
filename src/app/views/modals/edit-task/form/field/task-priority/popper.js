const createPriorityItem = (priority, currentPriority) => {
  const priorityItem = document.createElement('li');
  priorityItem.classList.add('priority-list-item');
  priorityItem.dataset.priority = priority.toLowerCase();

  priorityItem.innerHTML = `<svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="priority-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.223 4.584A.5.5 0 004 5v14.5a.5.5 0 001 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0020 13V4.5a.5.5 0 00-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084z"
                fill="currentColor"
              ></path>
            </svg>`;

  const priorityName = document.createElement('span');
  priorityName.classList.add('priority-name');
  priorityName.textContent = `Priority ${priority.slice(1)}`;

  priorityItem.append(priorityName);

  if (priority === currentPriority) {
    priorityItem.innerHTML += `<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              width="12"
              height="12"
              aria-hidden="true"
              class="select-priority-checkmark"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z"
              ></path>
            </svg>`;
  }

  return priorityItem;
};

const handleOverlayClick = (event) => {
  const overlay = event.currentTarget;
  overlay.remove();
};

const handleListSelection = (priorityList, taskPriorityBtn) => {
  const taskPriority = taskPriorityBtn;
  const priorityItems = priorityList.querySelectorAll('.priority-list-item');
  const priorityBtnIcon = taskPriority.firstElementChild.firstElementChild;
  const priorityBtnText = taskPriority.firstElementChild.lastElementChild;
  const removePriorityBtn = taskPriority.lastElementChild;

  priorityItems.forEach((priorityItem) => {
    priorityItem.addEventListener('click', () => {
      const priorityItemIcon = priorityItem.firstElementChild;

      priorityItems.forEach((item) => {
        item.classList.remove('selected');
      });

      priorityItem.classList.add('selected');
      taskPriority.dataset.priority = priorityItem.dataset.priority;
      const { priority } = taskPriority.dataset;

      taskPriority.firstElementChild.replaceChild(
        priorityItemIcon.cloneNode(true),
        priorityBtnIcon
      );
      priorityBtnText.textContent = `P${priority.slice(1)}`;
      removePriorityBtn.classList.remove('hidden');
    });
  });
};

const PriorityPopper = (taskPriorityBtn) => {
  const currentPriority = taskPriorityBtn.dataset.priority;

  const overlay = document.createElement('div');
  overlay.classList.add('popper-overlay');

  const popper = document.createElement('div');
  popper.classList.add('popper', 'select-priority');

  const priorityList = document.createElement('ul');
  priorityList.classList.add('priority-list');

  const priorityItem1 = createPriorityItem('p1', currentPriority);
  const priorityItem2 = createPriorityItem('p2', currentPriority);
  const priorityItem3 = createPriorityItem('p3', currentPriority);
  const priorityItem4 = createPriorityItem('p4', currentPriority);

  priorityList.append(
    priorityItem1,
    priorityItem2,
    priorityItem3,
    priorityItem4
  );
  popper.append(priorityList);
  overlay.append(popper);

  const setPopperPosition = () => {
    const POPPER_WIDTH = 141;
    const { top, left, width, height } =
      taskPriorityBtn.getBoundingClientRect();

    const offset = (POPPER_WIDTH - width) / 2;
    const x = `${left - offset}px`;
    const y = `${top + height}px`;

    popper.style.transform = `translate(${x}, ${y})`;

    ['resize', 'scroll'].forEach((event) => {
      window.addEventListener(event, setPopperPosition);
    });
  };
  setPopperPosition();

  overlay.addEventListener('click', handleOverlayClick);

  handleListSelection(priorityList, taskPriorityBtn);

  return overlay;
};

export default PriorityPopper;
