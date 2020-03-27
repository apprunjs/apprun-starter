import app from 'apprun';
import site from './_site';

import layout from './layout';
import pages from './_lib';

// import web components
import './components/counter';
import './components/my-xkcd';

app.on('/', () => app.run('/README'));

const config = {
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


site.start(config);
