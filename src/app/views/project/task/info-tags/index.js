import DueDate from './due-date';
import appendLabels from './append-labels';

const InfoTags = (task) => {
  const taskInfoTags = document.createElement('div');
  taskInfoTags.classList.add('content-wrapper__task-info-tags');

  const dueDateDiv = DueDate(task);
  taskInfoTags.appendChild(dueDateDiv);

  appendLabels(task, taskInfoTags);

  return taskInfoTags;
};

export default InfoTags;
