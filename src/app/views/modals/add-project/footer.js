import pubsub from '../../../pubsub';
import { ADD_PROJECT } from '../../../pubsub/events-types';

const hideModal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modal = document.querySelector('.project-modal');

  modal.classList.add('hidden');
  modal.addEventListener('animationend', () => {
    modalOverlay.remove();
  });
};

const Footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('modal-footer');

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.setAttribute('type', 'button');
  cancelBtn.innerText = 'Cancel';

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submit-btn');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('disabled', true);
  submitBtn.innerText = 'Add';

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

    pubsub.publish(ADD_PROJECT, project);
  });

  return footer;
};

export default Footer;
