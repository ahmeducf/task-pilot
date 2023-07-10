import { LAYOUT } from '../../../../../constants';

const RadioOption = (optionType) => {
  const radioOption = document.createElement('label');
  radioOption.classList.add('view-radio-option');
  radioOption.setAttribute('for', optionType);
  radioOption.setAttribute('data-layout', optionType);

  const preview = document.createElement('div');
  preview.classList.add(`${optionType}-preview`);

  const option = document.createElement('div');
  option.classList.add('option');
  const optionBtn = document.createElement('button');
  optionBtn.classList.add('checkbox-circle');
  optionBtn.setAttribute('type', 'button');
  optionBtn.innerHTML = `<svg>
                      <path
                        fill="currentColor"
                        d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
                      ></path>
                    </svg>`;
  const optionLabel = document.createElement('label');
  optionLabel.setAttribute('for', optionType);
  optionLabel.textContent =
    optionType.charAt(0).toUpperCase() + optionType.slice(1);

  option.append(optionBtn, optionLabel);
  radioOption.append(preview, option);

  return radioOption;
};

const projectView = (currentProject) => {
  const formField = document.createElement('div');
  formField.classList.add('form-field');

  const label = document.createElement('label');
  label.setAttribute('for', 'project-view');
  label.textContent = 'View';

  const viewRadioGroup = document.createElement('div');
  viewRadioGroup.classList.add('view-radio-group');

  const listRadioOption = RadioOption('list');
  listRadioOption.classList.add('checked');

  const boardRadioOption = RadioOption('board');

  viewRadioGroup.append(listRadioOption, boardRadioOption);
  formField.append(label, viewRadioGroup);

  listRadioOption.addEventListener('click', () => {
    listRadioOption.classList.add('checked');
    boardRadioOption.classList.remove('checked');
  });

  boardRadioOption.addEventListener('click', () => {
    boardRadioOption.classList.add('checked');
    listRadioOption.classList.remove('checked');
  });

  const currentViewLayout = currentProject.getView().getLayout();

  if (currentViewLayout === LAYOUT.LIST) {
    listRadioOption.classList.add('checked');
    boardRadioOption.classList.remove('checked');
  } else {
    boardRadioOption.classList.add('checked');
    listRadioOption.classList.remove('checked');
  }

  return formField;
};

export default projectView;
