import { PRIORITY } from '../../../../../../constants';
import PriorityPopper from './popper';

const TaskPriority = () => {
  const field = document.createElement('div');
  field.classList.add('form-field', 'task-priority');
  field.dataset.priority = PRIORITY.P4.toLowerCase();

  const btn = document.createElement('button');
  btn.classList.add('priority-btn');
  btn.setAttribute('type', 'button');
  btn.innerHTML = `<svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 3a.5.5 0 01.276-.447C3.025 2.179 4.096 2 5.5 2c.901 0 1.485.135 2.658.526C9.235 2.885 9.735 3 10.5 3c1.263 0 2.192-.155 2.776-.447A.5.5 0 0114 3v6.5a.5.5 0 01-.276.447c-.749.375-1.82.553-3.224.553-.901 0-1.485-.135-2.658-.526C6.765 9.615 6.265 9.5 5.5 9.5c-1.08 0-1.915.113-2.5.329V13.5a.5.5 0 01-1 0V3zm1 5.779v-5.45C3.585 3.113 4.42 3 5.5 3c.765 0 1.265.115 2.342.474C9.015 3.865 9.599 4 10.5 4c1.002 0 1.834-.09 2.5-.279v5.45c-.585.216-1.42.329-2.5.329-.765 0-1.265-.115-2.342-.474C6.985 8.635 6.401 8.5 5.5 8.5c-1.001 0-1.834.09-2.5.279z"
                    fill="currentColor"
                  ></path>
                </svg>`;
  const unselectedPriorityIcon = btn.firstElementChild;

  const spanText = document.createElement('span');
  spanText.textContent = 'Priority';

  const removePriorityBtn = document.createElement('button');
  removePriorityBtn.setAttribute('type', 'button');
  removePriorityBtn.classList.add('remove-priority-btn', 'hidden');
  removePriorityBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.854 11.854a.5.5 0 000-.708L8.707 8l3.147-3.146a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708 0z" fill="currentColor"></path></svg>';

  btn.append(spanText);
  field.append(btn, removePriorityBtn);

  const showPriorityPopper = () => {
    const priorityPopper = PriorityPopper(field);
    document.body.append(priorityPopper);
  };

  field.addEventListener('click', showPriorityPopper);

  removePriorityBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    removePriorityBtn.classList.add('hidden');
    field.dataset.priority = PRIORITY.P4.toLowerCase();

    btn.replaceChild(unselectedPriorityIcon, btn.firstElementChild);
    spanText.textContent = 'Priority';
  });

  return field;
};

export default TaskPriority;
