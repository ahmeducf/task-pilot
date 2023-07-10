import Header from './header';
import OverdueSection from '../overdue-section';
import DaySection from '../day-section';
import { LAYOUT } from '../../../constants';

const UpcomingView = (app) => {
  const todayAndUpcomingTasks = app
    .getTodayTasks()
    .concat(app.getUpcomingTasks());
  const contentSection = document.createElement('section');
  contentSection.classList.add('content');
  contentSection.dataset.view = 'upcoming';

  const header = Header(app);

  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('tasks');
  if (app.getTodayView().getLayout() === LAYOUT.BOARD) {
    tasksContainer.classList.add('grid-layout');
  } else if (app.getTodayView().getLayout() === LAYOUT.LIST) {
    tasksContainer.classList.add('flex-layout');
  }

  const overdue = OverdueSection(
    {
      getOverdueTasks: app.getOverdueTasks,
      getProjectView: app.getTodayView,
      view: 'upcoming',
    },
    app
  );

  contentSection.appendChild(header);
  contentSection.appendChild(tasksContainer);
  tasksContainer.appendChild(overdue);

  app.mapTasksByDueDate(todayAndUpcomingTasks).forEach((tasks, date) => {
    const day = DaySection(
      {
        date: new Date(date),
        projectView: app.getUpcomingView(),
        view: 'upcoming',
        tasks,
      },
      app
    );

    tasksContainer.appendChild(day);
  });

  return contentSection;
};

export default UpcomingView;
