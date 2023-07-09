import EditTaskControl from './control/edit-task';
import MoveTaskControl from './control/move-task';
import DeleteTaskControl from './control/delete-task';

const ControlList = (task, app) => {
  const taskControls = document.createElement('div');
  taskControls.classList.add('task-name-controls__task-controls');
  taskControls.appendChild(EditTaskControl(task, app));
  taskControls.appendChild(MoveTaskControl(task));
  taskControls.appendChild(DeleteTaskControl(task));

  return taskControls;
};

export default ControlList;
