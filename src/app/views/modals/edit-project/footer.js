import pubsub from '../../../pubsub';
import { UPDATE_PROJECT } from '../../../pubsub/events-types';

const hideModal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modal = document.querySelector('.project-modal');

  modal.classList.add('hidden');
  modal.addEventListener('animationend', () => {
    modalOverlay.remove();
  });
};

const Footer = (app) => {
  const id = app.getCurrentProject();

  const footer = document.createElement('footer');
  footer.classList.add('modal-footer');

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.setAttribute('type', 'button');
  cancelBtn.innerText = 'Cancel';

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submit-btn');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerText = 'Save';

  footer.append(cancelBtn, submitBtn);

  cancelBtn.addEventListener('click', hideModal);

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal();

    const title = document.querySelector('#project-name').value;
    const color = document.querySelector('#project-color').value;
    const favorite = document.querySelector('#is-favorite').checked;
    const { layout } = document.querySelector(
      '.view-radio-option.checked'
    ).dataset;

    const project = {
      title,
      color,
      favorite,
      view: {
        layout: layout.toUpperCase(),
      },
    };

    pubsub.publish(UPDATE_PROJECT, { id, project });
  });

  return footer;
};

export default Footer;
