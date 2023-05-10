function renderContent(projectView) {
  const main = document.querySelector('main');

  main.removeChild(main.lastElementChild);

  main.appendChild(projectView);
}

export default renderContent;
