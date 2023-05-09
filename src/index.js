import './index.html';
import './index.css';
import app from './app';
import appView from './app/views';

const load = () => {
  appView.init();
  app.init();
};

load();
