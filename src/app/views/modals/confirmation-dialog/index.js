import TaskFooter from './delete-task/footer';
import ProjectFooter from './delete-project/footer';
import Header from './header';

const ConfirmationDialog = (message, id, type) => {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay', 'confirmation-dialog');

  const modal = document.createElement('div');
  modal.classList.add('confirmation-dialog__modal');

  const modalHeader = Header();

  const dialogMessage = document.createElement('div');
  dialogMessage.classList.add('confirmation-dialog__message');
  dialogMessage.innerHTML = message;

  let modalFooter;
  if (type === 'task') {
    modalFooter = TaskFooter(id);
  } else if (type === 'project') {
    modalFooter = ProjectFooter(id);
  }

  modal.append(modalHeader, dialogMessage, modalFooter);
  modalOverlay.append(modal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      modal.classList.add('hidden');
      modal.addEventListener('animationend', () => {
        modalOverlay.remove();
      });
    }
  });

  return modalOverlay;
};

export default ConfirmationDialog;
