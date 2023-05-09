const ProjectName = () => {
  const formField = document.createElement('div');
  formField.classList.add('form-field');

  const label = document.createElement('label');
  label.setAttribute('for', 'project-name');
  label.textContent = 'Name';
  const charLimit = document.createElement('span');
  charLimit.classList.add('char-limit', 'hidden');
  label.append(charLimit);

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'project-name');
  input.setAttribute('name', 'project-name');
  input.setAttribute('autocomplete', 'on');
  input.setAttribute('maxlength', 120);
  input.setAttribute('required', true);
  input.setAttribute('autofocus', true);

  formField.append(label, input);

  formField.addEventListener('input', (e) => {
    const { value } = e.target;
    const { length } = value;
    const { maxLength } = e.target;
    const submitBtn = document.querySelector('.submit-btn');

    if (length > 0 && length < maxLength) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.setAttribute('disabled', true);
    }

    if (length >= maxLength - 10 && length <= maxLength) {
      charLimit.classList.remove('hidden');
      charLimit.textContent = `Character limit: ${length}/${maxLength}`;
    } else {
      charLimit.classList.add('hidden');
    }
  });

  return formField;
};

export default ProjectName;
