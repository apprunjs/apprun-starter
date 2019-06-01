import app from 'apprun-site/dist'; // <== !IMPORTANT!
import layout from './layout/index';
import pages, {links} from './_lib/index';

const site = {
  title: 'My AppRun Site',
  element: 'main',
  nav: [
    { "text": "Home", "link": "/" },
    { "text": "Contact", "link": "/contact" },
    { "text": "About", "link": "/about" }
  ],
  sidebar: links,
  layout,
  pages,
};
app.start(site);
