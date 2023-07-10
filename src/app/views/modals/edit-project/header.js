const Header = () => {
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modalHeader.textContent = 'Edit Project';
  return modalHeader;
};

export default Header;
