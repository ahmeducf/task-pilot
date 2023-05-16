import Label from './label';

const TaskNewLabel = () => {
  const field = document.createElement('div');
  field.classList.add('form-field', 'task-label');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Label');
  input.setAttribute('name', 'task-label');
  input.setAttribute('id', 'task-label');
  input.setAttribute('autocomplete', 'on');
  input.setAttribute('maxlength', '100');

  const addLabelBtn = document.createElement('button');
  addLabelBtn.classList.add('add-label-btn', 'hidden');
  addLabelBtn.setAttribute('type', 'button');
  addLabelBtn.innerHTML = `<svg width="13" height="13">
                  <path
                    d="M6 6V.5a.5.5 0 011 0V6h5.5a.5.5 0 110 1H7v5.5a.5.5 0 11-1 0V7H.5a.5.5 0 010-1H6z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>`;

  field.append(input, addLabelBtn);

  input.addEventListener('input', () => {
    if (input.value.length > 0) {
      addLabelBtn.classList.remove('hidden');
    } else {
      addLabelBtn.classList.add('hidden');
    }
  });

  addLabelBtn.addEventListener('click', () => {
    if (input.value.length <= 0) {
      return;
    }

    const taskLabelsSection = document.querySelector('.task-labels');
    console.log(taskLabelsSection);
    const labelTitle = input.value;

    // if has label with same title, return
    const labels = document.querySelectorAll('.task-label');
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].innerText === labelTitle) {
        return;
      }
    }

    if (taskLabelsSection.classList.contains('hidden')) {
      taskLabelsSection.classList.remove('hidden');
    }

    const label = Label(labelTitle);

    taskLabelsSection.append(label);

    input.value = '';
    addLabelBtn.classList.add('hidden');
  });

  return field;
};

export default TaskNewLabel;
