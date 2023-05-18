const Header = () => {
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modalHeader.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 1a8 8 0 100 16 8 8 0 000-16zm.5 6a.5.5 0 01.5.5V15h1a.5.5 0 110 1h-3a.5.5 0 110-1h1v-4h-1a.5.5 0 110-1h1.5zm-.16-2.68a.84.84 0 110 1.68.84.84 0 010-1.68z"></path></svg>';

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('modal-header__cancel-btn');
  cancelBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>';

  modalHeader.append(cancelBtn);

  return modalHeader;
};

export default Header;
