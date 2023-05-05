import pubsub from '../pubsub';
import { LOAD } from '../pubsub/events-types';
import TodayView from './project/today';
import renderMenu from './menu';

function renderContent(projectView) {
  const main = document.querySelector('main');

  main.removeChild(main.lastElementChild);

  main.appendChild(projectView);
}

function firstLoad(data) {
  const todayView = TodayView(data);

  renderContent(todayView);
  renderMenu(data);
}

function init() {
  pubsub.subscribe(LOAD, firstLoad);
}

export default { init };
