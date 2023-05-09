import pubsub from '../pubsub';
import {
  LOAD,
  INBOX_FILTER_CLICKED,
  TODAY_FILTER_CLICKED,
  UPCOMING_FILTER_CLICKED,
} from '../pubsub/events-types';
import TodayView from './project/today';
import InboxView from './project/inbox';
import UpcomingView from './project/upcoming';
import renderMenu from './menu';

function renderContent(projectView) {
  const main = document.querySelector('main');

  main.removeChild(main.lastElementChild);

  main.appendChild(projectView);
}

function firstLoad(app) {
  const todayView = TodayView(app);

  renderContent(todayView);
  renderMenu(app);
}

function init() {
  pubsub.subscribe(LOAD, firstLoad);

  pubsub.subscribe(INBOX_FILTER_CLICKED, (app) => {
    const inboxView = InboxView(app);

    renderContent(inboxView);
  });
  pubsub.subscribe(TODAY_FILTER_CLICKED, (app) => {
    const todayView = TodayView(app);

    renderContent(todayView);
  });
  pubsub.subscribe(UPCOMING_FILTER_CLICKED, (app) => {
    const upcomingView = UpcomingView(app);

    renderContent(upcomingView);
  });
}

export default { init };
