const TaskName = (task) => {
  const field = document.createElement('div');
  field.classList.add('form-field', 'task-name');

  const textarea = document.createElement('textarea');
  textarea.setAttribute('type', 'text');
  textarea.setAttribute('id', 'task-name');
  textarea.setAttribute('name', 'task-name');
  textarea.setAttribute('placeholder', 'Task name');
  textarea.setAttribute('required', true);
  textarea.setAttribute('autocomplete', 'off');
  textarea.setAttribute('autofocus', true);

  const label = document.createElement('label');
  label.setAttribute('for', 'task-name');
  label.innerText = 'Task name';
  label.style.display = 'none';

  field.append(textarea, label);

  textarea.addEventListener('input', () => {
    textarea.style.height = '0';
    textarea.style.height = `${textarea.scrollHeight}px`;
  });

  textarea.innerText = task.getTitle();

  return field;
};

export default TaskName;
