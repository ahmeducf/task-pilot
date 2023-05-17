const TaskDescription = () => {
  const field = document.createElement('div');
  field.classList.add('form-field', 'task-description');

  const label = document.createElement('label');
  label.setAttribute('for', 'task-description');
  label.textContent = 'Description';
  label.style.display = 'none';

  const textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'task-description');
  textarea.setAttribute('name', 'task-description');
  textarea.setAttribute('placeholder', 'Description');

  field.appendChild(textarea, label);

  textarea.addEventListener('input', () => {
    textarea.style.height = '0';
    textarea.style.height = `${textarea.scrollHeight}px`;
  });

  return field;
};

export default TaskDescription;
