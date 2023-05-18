import pubsub from '../pubsub';
import {
  LOAD,
  INBOX_FILTER_CLICKED,
  TODAY_FILTER_CLICKED,
  UPCOMING_FILTER_CLICKED,
  RENDER_MENU,
  RENDER_CONTENT,
  REFRESH_CONTENT,
} from '../pubsub/events-types';
import TodayView from './project/today';
import InboxView from './project/inbox';
import UpcomingView from './project/upcoming';
import UserProjectView from './project/user-project';
import renderContent from './project/render-content';
import renderMenu, { initMenu } from './menu';

function firstLoad(app) {
  const todayView = TodayView(app);

  renderContent(todayView);
  initMenu(app);
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
  pubsub.subscribe(RENDER_MENU, (app) => {
    renderMenu(app);
  });
  pubsub.subscribe(RENDER_CONTENT, (data) => {
    const { app, view } = data;

    if (view === 'inbox') {
      const inboxView = InboxView(app);
      renderContent(inboxView);
    } else if (view === 'today') {
      const todayView = TodayView(app);
      renderContent(todayView);
    } else if (view === 'upcoming') {
      const upcomingView = UpcomingView(app);
      renderContent(upcomingView);
    } else if (view === 'project') {
      const projectView = UserProjectView(app);
      renderContent(projectView);
    }
  });
  pubsub.subscribe(REFRESH_CONTENT, (app) => {
    const { view } = document.querySelector('.content').dataset;

    if (view === 'inbox') {
      const inboxView = InboxView(app);
      renderContent(inboxView);
    } else if (view === 'today') {
      const todayView = TodayView(app);
      renderContent(todayView);
    } else if (view === 'upcoming') {
      const upcomingView = UpcomingView(app);
      renderContent(upcomingView);
    } else if (view === 'project') {
      const projectView = UserProjectView(app);
      renderContent(projectView);
    }
  });
}

export default { init };
