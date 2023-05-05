import { editTask, moveTask, deleteTask } from './control';

const ControlList = () => {
  const taskControls = document.createElement('div');
  taskControls.classList.add('task-name-controls__task-controls');
  taskControls.appendChild(editTask);
  taskControls.appendChild(moveTask);
  taskControls.appendChild(deleteTask);

  return taskControls;
};

export default ControlList;
