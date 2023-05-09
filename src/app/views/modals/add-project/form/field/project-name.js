const ProjectName = () => {
  const formField = document.createElement('div');
  formField.classList.add('form-field');

  const label = document.createElement('label');
  label.setAttribute('for', 'project-name');
  label.textContent = 'Name';

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'project-name');
  input.setAttribute('name', 'project-name');
  input.setAttribute('autocomplete', 'on');
  input.setAttribute('maxlength', 120);
  input.setAttribute('required', true);
  input.setAttribute('autofocus', true);

  formField.append(label, input);

  return formField;
};

export default ProjectName;
