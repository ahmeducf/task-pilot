const Control = (data) => {
  const { title, icon } = data;

  const controlBtn = document.createElement('button');
  controlBtn.classList.add(`task-controls-${title}`);

  controlBtn.innerHTML = icon;

  return controlBtn;
};

export default Control;
