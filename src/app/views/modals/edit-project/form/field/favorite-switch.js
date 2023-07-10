const favoriteSwitch = (currentProject) => {
  const formField = document.createElement('div');
  formField.classList.add('form-field');

  const favoriteSwitchWrapper = document.createElement('div');
  favoriteSwitchWrapper.classList.add('favorite-switch');
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', 'is-favorite');
  input.setAttribute('name', 'is-favorite');
  const span = document.createElement('span');
  span.classList.add('switch-handle');

  favoriteSwitchWrapper.append(input, span);

  const label = document.createElement('label');
  label.textContent = 'Add to favorites';

  formField.append(favoriteSwitchWrapper, label);

  formField.addEventListener('click', () => {
    input.checked = !input.checked;
    favoriteSwitchWrapper.classList.toggle('checked');
  });

  if (currentProject.isFavorite()) {
    input.checked = true;
    favoriteSwitchWrapper.classList.add('checked');
  } else {
    input.checked = false;
    favoriteSwitchWrapper.classList.remove('checked');
  }

  return formField;
};

export default favoriteSwitch;
