import app from './_site';

import layout from './layout';
import pages from './_lib';

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

app.start(site);
