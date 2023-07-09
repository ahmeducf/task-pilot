import { LAYOUT } from '../../../constants';
import CheckBox from './checkbox';
import ControlList from './control-list';
import Handle from './handle';
import InfoTags from './info-tags';

const Task = (data, app) => {
  const { task, projectView } = data;

  const taskItem = document.createElement('li');
  taskItem.classList.add('tasks-list-item');
  if (task.isCompleted()) {
    taskItem.classList.add('checked');
  }

  if (projectView.getLayout() === LAYOUT.BOARD) {
    taskItem.classList.add('grid-layout');
  } else if (projectView.getLayout() === LAYOUT.LIST) {
    taskItem.classList.add('flex-layout');
  }

  const taskHandle = Handle(projectView);

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  if (projectView.getLayout() === LAYOUT.BOARD) {
    wrapper.classList.add('grid-layout');
  } else if (projectView.getLayout() === LAYOUT.LIST) {
    wrapper.classList.add('flex-layout');
  }

  const taskCheckbox = CheckBox(task, app);

  const taskContentWrapper = document.createElement('div');
  taskContentWrapper.classList.add('tasks-list-item__content-wrapper');

  const taskNameControls = document.createElement('div');
  taskNameControls.classList.add('content-wrapper__task-name-controls');

  const taskName = document.createElement('div');
  taskName.classList.add('task-name-controls__task-name');
  taskName.textContent = task.getTitle();

  const taskControls = ControlList(task, app);

  taskNameControls.appendChild(taskName);
  taskNameControls.appendChild(taskControls);

  const taskDescription = document.createElement('div');
  taskDescription.classList.add('content-wrapper__task-description');
  const taskDescriptionText = document.createElement('p');
  taskDescriptionText.textContent = task.getDescription();
  taskDescription.appendChild(taskDescriptionText);

  const taskInfoTags = InfoTags(task);

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
