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

  cancelBtn.addEventListener('click', () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.project-modal');

    modal.classList.add('hidden');
    modal.addEventListener('animationend', () => {
      modalOverlay.remove();
    });
  });

  return footer;
};

export default Footer;
