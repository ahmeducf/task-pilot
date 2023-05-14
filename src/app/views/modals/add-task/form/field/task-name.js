const TaskName = () => {
  const field = document.createElement('div');
  field.classList.add('form-field', 'task-name');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'task-name');
  input.setAttribute('name', 'task-name');
  input.setAttribute('placeholder', 'Task name');
  input.setAttribute('required', true);
  input.setAttribute('maxlength', 500);
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('autofocus', true);

  const label = document.createElement('label');
  label.setAttribute('for', 'task-name');
  label.innerText = 'Task name';
  label.style.display = 'none';

  field.append(input, label);

  return field;
};

export default TaskName;
