import './index.html';
import './index.css';
import app from './app';
import pubsub from './app/pubsub';
import { LOAD } from './app/pubsub/events-types';

const load = () => {
  app.init();
  pubsub.publish(LOAD);
};

load();
