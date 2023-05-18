import EditTask from './control/edit-task';
import MoveTask from './control/move-task';
import DeleteTask from './control/delete-task';

const ControlList = (task) => {
  const taskControls = document.createElement('div');
  taskControls.classList.add('task-name-controls__task-controls');
  taskControls.appendChild(EditTask());
  taskControls.appendChild(MoveTask());
  taskControls.appendChild(DeleteTask(task));

  return taskControls;
};

export default ControlList;
