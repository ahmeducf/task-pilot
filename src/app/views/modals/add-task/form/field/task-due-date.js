import {
  addWeeks,
  endOfToday,
  format,
  isToday,
  isTomorrow,
  isWithinInterval,
} from 'date-fns';

const TaskDueDate = () => {
  const field = document.createElement('div');
  field.classList.add('form-field', 'task-due-date');

  const btn = document.createElement('button');
  btn.classList.add('no-due-date');
  btn.setAttribute('type', 'button');

  btn.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h8zm0 1H4a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1zm-1.25 7a.75.75 0 110 1.5.75.75 0 010-1.5zm.75-5a.5.5 0 110 1h-7a.5.5 0 010-1h7z"
                  ></path>
                </svg>`;

  const textSpan = document.createElement('span');
  textSpan.classList.add('btn-text');
  textSpan.textContent = 'Due date';
  btn.appendChild(textSpan);

  const input = document.createElement('input');
  input.setAttribute('type', 'date');
  input.setAttribute('name', 'task-due-date');
  input.setAttribute('id', 'task-due-date');
  input.setAttribute('min', endOfToday().toISOString().split('T')[0]);
  input.setAttribute('value', '');

  field.append(btn, input);

  input.addEventListener('change', () => {
    const today = new Date();
    const nextWeek = addWeeks(today, 1);

    if (input.value === '') {
      btn.classList.add('no-due-date');
      btn.classList.remove(
        'due-date-today',
        'due-date-tomorrow',
        'due-date-upcoming',
        'due-date-within-next-week'
      );
      textSpan.textContent = 'Due date';
    } else if (isToday(new Date(input.value))) {
      btn.classList.add('due-date-today');
      btn.classList.remove(
        'no-due-date',
        'due-date-tomorrow',
        'due-date-upcoming',
        'due-date-within-next-week'
      );
      textSpan.textContent = 'Today';
    } else if (isTomorrow(new Date(input.value))) {
      btn.classList.add('due-date-tomorrow');
      btn.classList.remove(
        'no-due-date',
        'due-date-today',
        'due-date-upcoming',
        'due-date-within-next-week'
      );
      textSpan.textContent = 'Tomorrow';
    } else if (
      isWithinInterval(new Date(input.value), { start: today, end: nextWeek })
    ) {
      btn.classList.add('due-date-within-next-week');
      btn.classList.remove(
        'no-due-date',
        'due-date-today',
        'due-date-tomorrow',
        'due-date-upcoming'
      );
      textSpan.textContent = format(new Date(input.value), 'EEEE');
    } else {
      btn.classList.add('due-date-upcoming');
      btn.classList.remove(
        'no-due-date',
        'due-date-today',
        'due-date-tomorrow',
        'due-date-within-next-week'
      );
      textSpan.textContent = format(new Date(input.value), 'MMM d');
    }
  });

  return field;
};

export default TaskDueDate;
