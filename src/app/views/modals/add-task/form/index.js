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
import { ADD_TASK } from '../../../../pubsub/events-types';

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

function createEditorSection() {
  const editorSection = document.createElement('div');
  editorSection.classList.add('form-editor');

  const taskName = TaskName();
  const taskDescription = TaskDescription();

  editorSection.append(taskName, taskDescription);

  ['input', 'focus'].forEach((event) => {
    taskName.addEventListener(event, checkTaskNameValidity, true);
    taskDescription.addEventListener(event, checkTaskDescriptionValidity, true);
  });

  return editorSection;
}

function createLabelsSection() {
  const labelsSection = document.createElement('div');
  labelsSection.classList.add('task-labels', 'hidden');

  return labelsSection;
}

function createFieldsWrapper() {
  const fieldsWrapper = document.createElement('div');
  fieldsWrapper.classList.add('fields-wrapper');
  fieldsWrapper.append(TaskDueDate(), TaskPriority(), TaskNewLabel());

  return fieldsWrapper;
}

function createFooter(app) {
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
  submitBtn.setAttribute('disabled', true);
  submitBtn.innerText = 'Add';

  actionBtns.append(cancelBtn, submitBtn);

  footer.append(TaskProject(app), actionBtns);

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

    pubsub.publish(ADD_TASK, task);
    hideModal();
  };

  cancelBtn.addEventListener('click', hideModal);
  submitBtn.addEventListener('click', submitBtnListener);

  return footer;
}

const Form = (app) => {
  const form = document.createElement('form');
  form.classList.add('task-modal__form');

  const editorSection = createEditorSection();

  const charLimit = document.createElement('span');
  charLimit.classList.add('char-limit', 'hidden');

  const labelsSection = createLabelsSection();

  const fieldsWrapper = createFieldsWrapper();

  const footer = createFooter(app);

  form.append(editorSection, charLimit, labelsSection, fieldsWrapper, footer);

  return form;
};

export default Form;
