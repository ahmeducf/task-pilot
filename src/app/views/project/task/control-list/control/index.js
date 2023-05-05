const Control = (data) => {
  const { title, icon } = data;

  const controlBtn = document.createElement('button');
  controlBtn.classList.add(`task-controls-${title}`);

  controlBtn.innerHTML = icon;

  return controlBtn;
};

const editTask = {
  title: 'edit-task',
  icon: `<svg width="24" height="24">
                          <g fill="none" fill-rule="evenodd">
                            <path
                              fill="currentColor"
                              d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
                            ></path>
                            <path
                              stroke="currentColor"
                              d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
                            ></path>
                          </g>
                        </svg>`,
};

const moveTask = {
  title: 'move-task-to-project',
  icon: `<svg width="24" height="24">
                          <g fill="none" transform="translate(4 4)">
                            <circle
                              cx="8"
                              cy="8"
                              r="7.5"
                              stroke="currentColor"
                            ></circle>
                            <path
                              fill="currentColor"
                              d="M10.11 7.82L8.15 5.85a.5.5 0 11.7-.7l2.83 2.82a.5.5 0 010 .71l-2.83 2.83a.5.5 0 11-.7-.7l1.98-1.99H4.5a.5.5 0 110-1h5.61z"
                            ></path>
                          </g>
                        </svg>`,
};

const deleteTask = {
  title: 'delete-task',
  icon: `<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <rect
                              width="14"
                              height="1"
                              x="5"
                              y="6"
                              fill="currentColor"
                              rx="0.5"
                            ></rect>
                            <path
                              fill="currentColor"
                              d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"
                            ></path>
                            <path
                              stroke="currentColor"
                              d="M17.5 6.5h-11V18A1.5 1.5 0 008 19.5h8a1.5 1.5 0 001.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0014 3.5h-4A1.5 1.5 0 008.5 5v1.5z"
                            ></path>
                          </g>
                        </svg>`,
};

export { editTask, moveTask, deleteTask, Control };
