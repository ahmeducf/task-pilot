const CheckBox = (task) => {
  const taskCheckbox = document.createElement('div');
  taskCheckbox.classList.add('tasks-list-item__checkbox');
  const controlBtn = document.createElement('button');
  controlBtn.classList.add(
    'checkbox-circle',
    `checkbox-circle-${task.getPriority().toLowerCase()}`
  );
  controlBtn.innerHTML = `<svg>
                      <path
                        fill="currentColor"
                        d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
                      ></path>
                    </svg>`;

  taskCheckbox.appendChild(controlBtn);
  return taskCheckbox;
};

export default CheckBox;
