import { LAYOUT } from '../../../../constants';

const Handle = (projectView) => {
  const taskHandle = document.createElement('div');
  taskHandle.classList.add('tasks-list-item__handle');
  if (projectView.getLayout() === LAYOUT.GRID) {
    taskHandle.classList.add('grid-layout');
  } else if (projectView.getLayout() === LAYOUT.LIST) {
    taskHandle.classList.add('flex-layout');
  }

  const taskHandleBtn = document.createElement('button');
  taskHandleBtn.innerHTML = `<svg width="24" height="24">
                    <path
                      fill="currentColor"
                      d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z"
                    ></path>
                  </svg>`;
  taskHandle.appendChild(taskHandleBtn);

  return taskHandle;
};

export default Handle;
