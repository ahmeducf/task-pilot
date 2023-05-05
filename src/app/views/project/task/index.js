import { LAYOUT } from '../../../constants';
import checkBoxCircle from './checkbox-circle';
import { editTask, moveTask, deleteTask } from './control';
import DueDate from './due-date';

const Task = (data) => {
  const { task, projectView } = data;

  const taskItem = document.createElement('li');
  taskItem.classList.add('tasks-list-item');
  if (projectView.getLayout() === LAYOUT.GRID) {
    taskItem.classList.add('grid-layout');
  } else if (projectView.getLayout() === LAYOUT.LIST) {
    taskItem.classList.add('flex-layout');
  }

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

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  if (projectView.getLayout() === LAYOUT.GRID) {
    wrapper.classList.add('grid-layout');
  } else if (projectView.getLayout() === LAYOUT.LIST) {
    wrapper.classList.add('flex-layout');
  }

  const taskCheckbox = document.createElement('div');
  taskCheckbox.classList.add('tasks-list-item__checkbox');
  taskCheckbox.appendChild(checkBoxCircle(task));

  const taskContentWrapper = document.createElement('div');
  taskContentWrapper.classList.add('tasks-list-item__content-wrapper');

  const taskNameControls = document.createElement('div');
  taskNameControls.classList.add('content-wrapper__task-name-controls');

  const taskName = document.createElement('div');
  taskName.classList.add('task-name-controls__task-name');
  taskName.textContent = task.getTitle();

  const taskControls = document.createElement('div');
  taskControls.classList.add('task-name-controls__task-controls');
  taskControls.appendChild(editTask);
  taskControls.appendChild(moveTask);
  taskControls.appendChild(deleteTask);

  taskNameControls.appendChild(taskName);
  taskNameControls.appendChild(taskControls);

  const taskDescription = document.createElement('div');
  taskDescription.classList.add('content-wrapper__task-description');
  const taskDescriptionText = document.createElement('p');
  taskDescriptionText.textContent = task.getDescription();
  taskDescription.appendChild(taskDescriptionText);

  const taskInfoTags = document.createElement('div');
  taskInfoTags.classList.add('content-wrapper__task-info-tags');
  const dueDateDiv = DueDate(task);
  taskInfoTags.appendChild(dueDateDiv);

  task.getLabels().forEach((label) => {
    const labelDiv = document.createElement('div');
    labelDiv.classList.add('task-info-tags__task-label');
    labelDiv.innerHTML = `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="M9.357 1C10.264 1 11 1.736 11 2.643V6.07c0 .436-.173.854-.481 1.162L7.232 10.52a1.643 1.643 0 01-2.323 0L1.48 7.09c-.64-.64-.64-1.68.001-2.322L4.768 1.48C5.076 1.173 5.494 1 5.93 1h3.427zm-.07.91H5.93a.805.805 0 00-.569.235L2.145 5.362a.805.805 0 000 1.138L5.5 9.855a.805.805 0 001.138 0l3.217-3.217a.805.805 0 00.236-.569V2.713a.804.804 0 00-.804-.804zM7.364 3.726a.91.91 0 110 1.818.91.91 0 010-1.818z"
                          fill="currentColor"
                          fill-rule="evenodd"
                        ></path>
                      </svg>`;
    const labelSpan = document.createElement('span');
    labelSpan.textContent = label;
    labelDiv.appendChild(labelSpan);
    taskInfoTags.appendChild(labelDiv);
  });

  taskContentWrapper.appendChild(taskNameControls);
  taskContentWrapper.appendChild(taskDescription);
  taskContentWrapper.appendChild(taskInfoTags);

  wrapper.appendChild(taskCheckbox);
  wrapper.appendChild(taskContentWrapper);

  taskItem.appendChild(taskHandle);
  taskItem.appendChild(wrapper);

  return taskItem;
};

export default Task;
