import {
  FavoriteSwitch,
  ProjectColor,
  ProjectName,
  ProjectView,
} from './field';

const Form = (app) => {
  const id = app.getCurrentProject();
  let currentProject;
  if (!id) {
    currentProject = app.getInbox();
  } else {
    currentProject = app.getProject(id);
  }

  const form = document.createElement('form');
  form.classList.add('project-modal__form');

  const projectNameField = ProjectName(currentProject);
  const projectColorField = ProjectColor(currentProject);
  const favoriteSwitchField = FavoriteSwitch(currentProject);
  const projectViewField = ProjectView(currentProject);

  form.append(
    projectNameField,
    projectColorField,
    favoriteSwitchField,
    projectViewField
  );

  return form;
};

export default Form;
