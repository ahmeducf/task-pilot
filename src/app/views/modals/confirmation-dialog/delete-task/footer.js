import pubsub from '../../../../pubsub';
import { REMOVE_TASK } from '../../../../pubsub/events-types';

const hideModal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modal = document.querySelector('.confirmation-dialog__modal');

  modal.classList.add('hidden');
  modal.addEventListener('animationend', () => {
    modalOverlay.remove();
  });
};

const Footer = (taskId) => {
  const footer = document.createElement('footer');
  footer.classList.add('modal-footer');

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.setAttribute('type', 'button');
  cancelBtn.innerText = 'Cancel';

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submit-btn');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerText = 'Delete';

  footer.append(cancelBtn, submitBtn);

  cancelBtn.addEventListener('click', hideModal);

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal();

    pubsub.publish(REMOVE_TASK, taskId);
  });

  return footer;
};

export default Footer;
