import { PRIORITY } from '../../../../../../constants';
import PriorityPopper from './popper';

const TaskPriority = (task) => {
  const field = document.createElement('div');
  field.classList.add('form-field', 'task-priority');
  field.dataset.priority = task.getPriority().toLowerCase();

  const btn = document.createElement('button');
  btn.classList.add('priority-btn');
  btn.setAttribute('type', 'button');
  btn.innerHTML = `<svg
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
  const unselectedPriorityIcon = btn.firstElementChild;

  const spanText = document.createElement('span');
  spanText.textContent = task.getPriority();

  const removePriorityBtn = document.createElement('button');
  removePriorityBtn.setAttribute('type', 'button');
  removePriorityBtn.classList.add('remove-priority-btn');
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
