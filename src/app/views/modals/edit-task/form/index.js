import TaskName from './field/task-name';
import TaskDescription from './field/task-description';
import TaskDueDate from './field/task-due-date';
import TaskPriority from './field/task-priority';
import TaskNewLabel from './field/task-new-label';
import TaskProject from './field/task-project';
import pubsub from '../../../../pubsub';
import {
  TASK_MODAL_DESCRIPTION_MAX_LENGTH,
  TASK_MODAL_TITLE_MAX_LENGTH,
} from './constants';
import { UPDATE_TASK } from '../../../../pubsub/events-types';
import Label from './field/task-new-label/label';

function checkTaskNameValidity() {
  const { value } = document.querySelector('textarea#task-name');
  const maxLength = 500;
  const { length } = value;
  const submitBtn = document.querySelector('.submit-btn');
  const charLimit = document.querySelector('.char-limit');

  if (length > 0 && length < maxLength) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }

  if (length >= maxLength) {
    charLimit.classList.remove('hidden');
    charLimit.classList.add('task-name-over-limit');
    charLimit.textContent = `Task name character limit: ${length}/${maxLength}`;
  } else {
    charLimit.classList.add('hidden');
    charLimit.classList.remove('task-name-over-limit');
    if (charLimit.classList.contains('task-description-over-limit')) {
      // eslint-disable-next-line no-use-before-define
      checkTaskDescriptionValidity();
    }
  }
}

function checkTaskDescriptionValidity() {
  const { value } = document.querySelector('#task-description');
  const maxLength = 10000;
  const { length } = value;
  const charLimit = document.querySelector('.char-limit');

  if (length >= maxLength) {
    charLimit.classList.remove('hidden');
    charLimit.classList.add('task-description-over-limit');
    charLimit.textContent = `Task description character limit: ${length}/${maxLength}`;
  } else {
    charLimit.classList.add('hidden');
    charLimit.classList.remove('task-description-over-limit');
    if (charLimit.classList.contains('task-name-over-limit')) {
      checkTaskNameValidity();
    }
  }
}

function createEditorSection(task) {
  const editorSection = document.createElement('div');
  editorSection.classList.add('form-editor');

  const taskName = TaskName(task);
  const taskDescription = TaskDescription(task);

  editorSection.append(taskName, taskDescription);

  ['input', 'focus'].forEach((event) => {
    taskName.addEventListener(event, checkTaskNameValidity, true);
    taskDescription.addEventListener(event, checkTaskDescriptionValidity, true);
  });

  return editorSection;
}

function createLabelsSection(task) {
  const labelsSection = document.createElement('div');
  labelsSection.classList.add('task-labels');

  if (task.getLabels().length === 0) {
    labelsSection.classList.add('hidden');
  } else {
    const labels = task.getLabels();
    labels.forEach((label) => {
      const labelItem = Label(label);
      labelsSection.append(labelItem);
    });
  }

  return labelsSection;
}

function createFieldsWrapper(task) {
  const fieldsWrapper = document.createElement('div');
  fieldsWrapper.classList.add('fields-wrapper');
  fieldsWrapper.append(TaskDueDate(task), TaskPriority(task), TaskNewLabel());

  return fieldsWrapper;
}

function createFooter(taskData, app) {
  const footer = document.createElement('div');
  footer.classList.add('modal-footer');

  const actionBtns = document.createElement('div');
  actionBtns.classList.add('action-btns');
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.setAttribute('type', 'button');
  cancelBtn.innerText = 'Cancel';

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submit-btn');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerText = 'Save';

  actionBtns.append(cancelBtn, submitBtn);

  footer.append(TaskProject(taskData, app), actionBtns);

  const hideModal = () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.task-modal');

    modal.classList.add('hidden');
    modal.addEventListener('animationend', () => {
      modalOverlay.remove();
    });
  };

  const submitBtnListener = (e) => {
    e.preventDefault();

    checkTaskNameValidity();
    checkTaskDescriptionValidity();

    const title = document.querySelector('textarea#task-name').value;
    const description = document.querySelector('#task-description').value;
    const { priority } = document.querySelector('.task-priority').dataset;
    const { project } = document.querySelector('.task-project').dataset;
    const dueDate = document.querySelector('input#task-due-date').value;
    const labels = document.querySelectorAll(
      '.task-labels .task-label .label-name'
    );

    if (
      title === '' ||
      title.length > TASK_MODAL_TITLE_MAX_LENGTH ||
      description.length > TASK_MODAL_DESCRIPTION_MAX_LENGTH
    ) {
      return;
    }

    const task = {
      title,
      description,
      priority: priority.toUpperCase(),
      dueDate: dueDate === '' ? null : new Date(dueDate),
      projectId: project === 'inbox' ? null : project,
      labels: [...labels].map((label) => label.textContent),
      createdDate: new Date(),
    };

    pubsub.publish(UPDATE_TASK, { id: taskData.getId(), task });
    hideModal();
  };

  cancelBtn.addEventListener('click', hideModal);
  submitBtn.addEventListener('click', submitBtnListener);

  return footer;
}

const Form = (task, app) => {
  const form = document.createElement('form');
  form.classList.add('task-modal__form');

  const editorSection = createEditorSection(task);

  const charLimit = document.createElement('span');
  charLimit.classList.add('char-limit', 'hidden');

  const labelsSection = createLabelsSection(task);

  const fieldsWrapper = createFieldsWrapper(task);

  const footer = createFooter(task, app);

  form.append(editorSection, charLimit, labelsSection, fieldsWrapper, footer);

  return form;
};

export default Form;
