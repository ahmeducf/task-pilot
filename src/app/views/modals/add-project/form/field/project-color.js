const projectColor = () => {
  const formField = document.createElement('div');
  formField.classList.add('form-field');

  const label = document.createElement('label');
  label.setAttribute('for', 'project-color');
  label.textContent = 'Color';

  const colorPicker = document.createElement('div');
  colorPicker.classList.add('color-picker');

  const input = document.createElement('input');
  input.setAttribute('type', 'color');
  input.setAttribute('id', 'project-color');
  input.setAttribute('name', 'project-color');
  input.setAttribute('value', '#808080');

  colorPicker.append(input);
  formField.append(label, colorPicker);

  return formField;
};

export default projectColor;
