import TaskName from './field/task-name';
import TaskDescription from './field/task-description';
import TaskDueDate from './field/task-due-date';
import TaskPriority from './field/task-priority';
import TaskNewLabel from './field/task-new-label';
import TaskProject from './field/task-project';

function createEditorSection() {
  const editorSection = document.createElement('div');
  editorSection.classList.add('form-editor');
  editorSection.append(TaskName(), TaskDescription());

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

  return footer;
}

const Form = (app) => {
  const form = document.createElement('form');
  form.classList.add('task-modal__form');

  const editorSection = createEditorSection();

  const labelsSection = createLabelsSection();

  const fieldsWrapper = createFieldsWrapper();

  const footer = createFooter(app);

  form.append(editorSection, labelsSection, fieldsWrapper, footer);

  return form;
};

export default Form;
