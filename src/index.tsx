import app from 'apprun-site/dist'; // <== !IMPORTANT!
import layout from './layout/index';
import pages from './_lib/index';

import './components/web-components/counter';

const nav = [
  { "text": "Home", "link": "/" },
  { "text": "Contact", "link": "/contact" },
  { "text": "About", "link": "/about" }
];

const site = {
  title: 'My AppRun Site',
  element: 'main',
  nav,
  sidebar: nav,
  layout,
  pages,
  eventRoot: '/'
};

app.start(site);
