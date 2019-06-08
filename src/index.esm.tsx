import app from 'apprun-site/esm/index-esm';

import layout from './layout/index';
import pages from './_lib/index-esm';

import './components/counter';
import './components/my-xkcd';

const site = {
  title: 'My AppRun Site',
  element: 'main',
  nav: [
    { "text": "Home", "link": "/" },
    { "text": "Contact", "link": "/contact" },
    { "text": "About", "link": "/about" }
  ],
  sidebar: [
    { "text": "Home", "link": "/" },
    { "text": "Contact", "link": "/contact" },
    { "text": "About", "link": "/about" }
  ],
  layout,
  pages,
  eventRoot: '/'
};

app(site);
