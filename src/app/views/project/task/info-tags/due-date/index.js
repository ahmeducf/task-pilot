import { format } from 'date-fns';

const DueDate = (task) => {
  const dueDateDiv = document.createElement('div');
  dueDateDiv.classList.add('task-info-tags__task-due-date');

  dueDateDiv.innerHTML = `<svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.5 1h-7A1.5 1.5 0 001 2.5v7A1.5 1.5 0 002.5 11h7A1.5 1.5 0 0011 9.5v-7A1.5 1.5 0 009.5 1zM2 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7zM8.75 8a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM3.5 4a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
                          fill="currentColor"
                        ></path>
                      </svg>`;

  const dueDateText = document.createElement('span');

  if (task.dueDateIsToday()) {
    dueDateDiv.classList.add('due-date-today');
    // tex content is in form 'Today'
    dueDateText.textContent = 'Today';
  } else if (task.dueDateIsTomorrow()) {
    dueDateDiv.classList.add('due-date-tomorrow');
    // text content is in form 'Tomorrow'
    dueDateText.textContent = 'Tomorrow';
  } else if (task.dueDateIsThisWeek()) {
    dueDateDiv.classList.add('due-date-this-week');
    // text content is in form 'Day of the week'
    dueDateText.textContent = format(task.getDueDate(), 'EEEE');
  } else if (task.dueDateIsUpcoming()) {
    dueDateDiv.classList.add('due-date-upcoming');
    // text content is in form 'Month Day'
    dueDateText.textContent = format(task.getDueDate(), 'MMM d');
  } else if (task.isOverdue()) {
    dueDateDiv.classList.add('due-date-overdue');
    // text content is in form 'Month Day'
    dueDateText.textContent = format(task.getDueDate(), 'MMM d');
  }

  dueDateDiv.appendChild(dueDateText);

  return dueDateDiv;
};

export default DueDate;