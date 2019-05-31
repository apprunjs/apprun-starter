import './layout/index.css';

import app from 'apprun-site';
import layout from './layout';
import pages, {links} from './_lib/index';

import * as config from './config.json';
const site = {
  title: config.title,
  element: config.element,
  nav: config.nav,
  sidebar: config.sidebar && config.sidebar.length || links,
  layout,
  pages,
};

app.start(site);
