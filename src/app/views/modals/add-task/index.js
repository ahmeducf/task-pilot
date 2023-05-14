import Form from './form';

const AddTaskModal = () => {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay', 'add-task');

  const modal = document.createElement('div');
  modal.classList.add('task-modal');

  const modalForm = Form();

  modal.append(modalForm);
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

export default AddTaskModal;
