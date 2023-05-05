import { editTask, moveTask, deleteTask, Control } from './control';

const ControlList = () => {
  const taskControls = document.createElement('div');
  taskControls.classList.add('task-name-controls__task-controls');
  taskControls.appendChild(Control(editTask));
  taskControls.appendChild(Control(moveTask));
  taskControls.appendChild(Control(deleteTask));

  return taskControls;
};

export default ControlList;
