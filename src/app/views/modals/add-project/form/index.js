import {
  FavoriteSwitch,
  ProjectColor,
  ProjectName,
  ProjectView,
} from './field';

const Form = () => {
  const form = document.createElement('form');
  form.classList.add('project-modal__form');

  const projectNameField = ProjectName();
  const projectColorField = ProjectColor();
  const favoriteSwitchField = FavoriteSwitch();
  const projectViewField = ProjectView();

  form.append(
    projectNameField,
    projectColorField,
    favoriteSwitchField,
    projectViewField
  );

  return form;
};

export default Form;
