import { DeleteTaskControl, EditTaskControl, MoveTaskControl } from './control';

const ControlList = (task) => {
  const taskControls = document.createElement('div');
  taskControls.classList.add('task-name-controls__task-controls');
  taskControls.appendChild(EditTaskControl());
  taskControls.appendChild(MoveTaskControl());
  taskControls.appendChild(DeleteTaskControl(task));

  return taskControls;
};

export default ControlList;
