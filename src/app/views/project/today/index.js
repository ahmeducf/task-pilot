import Header from './header';
import OverdueSection from '../overdue-section';
import DaySection from '../day-section';
import { LAYOUT } from '../../../constants';

const TodayView = (data) => {
  const contentSection = document.createElement('section');
  contentSection.classList.add('content');

  const header = Header(data.getTodayView());

  const tasks = document.createElement('div');
  tasks.classList.add('tasks');
  if (data.getTodayView().getLayout() === LAYOUT.GRID) {
    tasks.classList.add('grid-layout');
  } else if (data.getTodayView().getLayout() === LAYOUT.LIST) {
    tasks.classList.add('flex-layout');
  }

  const overdue = OverdueSection({
    getOverdueTasks: data.getOverdueTasks,
    getProjectView: data.getTodayView,
  });
  const today = DaySection({
    date: new Date(),
    projectView: data.getTodayView(),
    tasks: data.getTodayTasks(),
  });

  contentSection.appendChild(header);
  contentSection.appendChild(tasks);
  tasks.appendChild(overdue);
  tasks.appendChild(today);

  return contentSection;
};

export default TodayView;
