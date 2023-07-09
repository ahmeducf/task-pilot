import Header from './header';
import OverdueSection from '../overdue-section';
import DaySection from '../day-section';
import { LAYOUT } from '../../../constants';

const TodayView = (app) => {
  const contentSection = document.createElement('section');
  contentSection.classList.add('content');
  contentSection.dataset.view = 'today';

  const header = Header(app);

  const tasks = document.createElement('div');
  tasks.classList.add('tasks');
  if (app.getTodayView().getLayout() === LAYOUT.BOARD) {
    tasks.classList.add('grid-layout');
  } else if (app.getTodayView().getLayout() === LAYOUT.LIST) {
    tasks.classList.add('flex-layout');
  }

  const overdue = OverdueSection(
    {
      getOverdueTasks: app.getOverdueTasks,
      getProjectView: app.getTodayView,
    },
    app
  );
  const today = DaySection(
    {
      date: new Date(),
      projectView: app.getTodayView(),
      tasks: app.getTodayTasks(),
    },
    app
  );

  contentSection.appendChild(header);
  contentSection.appendChild(tasks);
  tasks.appendChild(overdue);
  tasks.appendChild(today);

  return contentSection;
};

export default TodayView;
