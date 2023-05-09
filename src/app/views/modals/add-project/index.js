import Footer from './footer';
import Form from './form';
import Header from './header';

const AddProjectModal = () => {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay', 'add-project');

  const modal = document.createElement('div');
  modal.classList.add('project-modal');

  const modalHeader = Header();
  const modalForm = Form();
  const modalFooter = Footer();

  modal.append(modalHeader, modalForm, modalFooter);
  modalOverlay.append(modal);

  return modalOverlay;
};

export default AddProjectModal;
