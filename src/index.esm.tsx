import app from 'apprun-site';
import layout from './layout/index';
import pages from './_lib/index-esm';

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

app(site);
